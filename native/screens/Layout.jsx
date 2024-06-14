import React, { Children } from 'react'
import { SafeAreaView, Text, StatusBar } from 'react-native'
import tailwind from 'twrnc'

export const Layout = ({children}) => {
  return (
    <SafeAreaView style={tailwind`mt-[${StatusBar.currentHeight}] flex-1`}>
        {children}
    </SafeAreaView>
  )
}
