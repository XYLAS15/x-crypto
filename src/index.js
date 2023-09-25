import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, theme } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

export const server = `https://api.coingecko.com/api/v3`;





// import React,{useEffect, useState} from 'react';
// import axios from "axios";
// import {server} from "../index";
// import { Container } from '@chakra-ui/react';

// const Exchanges = () => {

//     const [exchanges,setExchanges] = useState([]);

// useEffect(() => {
//     const fetchExchanges = async() => {
//         const { data } = await axios.get('${server}/exchanges');
//         setExchanges(data);
//        // console.log(data);
//     };
//     fetchExchanges();

// },[])

//   return  <Container maxW={"container.xl"} >
// safas
//   </Container>
  
// }

// export default Exchanges