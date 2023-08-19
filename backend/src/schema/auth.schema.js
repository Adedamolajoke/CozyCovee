const { object, string, number } = require("zod");

const createUserSchema = object({
  username: string({ required_error: "Username is required" }),
  date_of_birth: string({ required_error: "Date of birth is required" }),
  wallet_address: string({ required_error: "Wallet address is required" }),
});

const loginUserSchema = object({
  wallet_address: string({ required_error: "Wallet address is required" }),
});

module.exports = {
  createUserSchema,
  loginUserSchema,
};