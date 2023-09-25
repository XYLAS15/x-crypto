import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return(

   <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
    <Button varient={"unstyled"} color={"white"} >
    <Link to={"/"}>Home</Link>
    </Button>

    <Button varient={"unstyled"} color={"white"} >
    <Link to={"/Exchanges"}>Exchanges</Link>
    </Button>

    <Button varient={"unstyled"} color={"white"} >
    <Link to={"/Coins"}>Coins</Link>
    </Button>

   </HStack>



  )
}

export default Header