const { NotFound, BadRequestError } = require('../errors')
const Session = require('../models/session.model')
const User = require('../models/user.model')
const { StatusCodes } = require('http-status-codes')
const moment = require("moment");
const axios = require("axios")

const API_URL = "https://api.spherepay.co/v1";
const API_KEY = process.env.API_KEY;
const config = { headers: { Authorization: `Bearer ${API_KEY}` } };


const createProduct = async () => {
    const response = await axios.post(
      `${API_URL}/product`,
      {
        name: "Tranquille Therapy Session",
      },
      config,
    );
    const product = response.data.data.product;
    return product;
};
  
const createPrice = async (productId) => {
    const response = await axios.post(
      `${API_URL}/price`,
      {
        product: productId,
        type: "recurring",
        recurring: {
          type: "delegated",
          interval: "month",
          intervalCount: 1,
          usageAggregation: "sum",
          defaultLength: 1,
        },
        currency: "usdc",
        billingScheme: "perUnit",
        name: "Basic Subscription Price",
        description: "A simple description",
        unitAmount: "0000000",
      },
      config,
    );
    const price = response.data.data.price;
    return price;
};
  
const createPaymentLink = async (priceId) => {
    const response = await axios.post(
      `${API_URL}/paymentLink`,
      {
        lineItems: [
          {
            price: priceId,
            quantity: 1,
            quantityMutable: false,
          },
        ],
        requiresName: true,
      },
      config,
    );
    const paymentLink = response.data.data.paymentLink;
    return paymentLink;
};

const getAllTherapists = async (req, res) => {
    
    const therapists = await User.find({ role: 'Therapist' })

    return res.status(StatusCodes.OK).json({ therapists })
}

const createSession = async (req, res) => {
    const userId = req.id
    const therapistId = req.params.id

    const session = await Session.create({
        therapist_id: therapistId,
        client_id: userId,
        date: moment().add(1, 'day').toString()
    })

    const product = await createProduct();
    const price = await createPrice(product.id);
    const paymentLink = await createPaymentLink(price.id);
    console.log("paymentLink", paymentLink.url);

    return res.status(StatusCodes.CREATED).json({ session, paymentLink })
}

module.exports = {
    getAllTherapists,
    createSession
}