import React from 'react'
import { ChakraProvider } from "@chakra-ui/react";
import Navigation from './Components/Navigation'


export default function App() {

    return(
   <ChakraProvider>
       <Navigation/>
    </ChakraProvider>
    )
}