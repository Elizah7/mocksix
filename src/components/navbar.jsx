import React from 'react'
import {Box, Button, Flex, HStack, Heading, Image, Show, Stack, Text, VStack} from "@chakra-ui/react"
import DrawerExample from './drawer'
const Navbar = () => {
  return (
    <Flex width="100%" justifyContent="space-between" alignItems="center" height={["60px","60px","80px","80px"]} padding="1%" boxShadow= "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;">
      <Box width={["20%","20%","15%","15%"]} marginLeft="5%">
        <Image width="100%" src="https://preview.colorlib.com/theme/kindergarten/assets/img/logo/logo.png"/>
      </Box>
        <HStack  fontSize="90%" color="gray" width="40%" display={["none","none","none","flex"]} justifyContent="space-between">
            <Text className='stack'>Home</Text>
            <Text className='stack'>Class</Text>
            <Text className='stack'>About</Text>
            <Text className='stack'>Blog</Text>
            <Text className='stack'>Contact</Text>
            <Button className='btn' backgroundColor="rgb(106, 252, 252)" color="black">Enroll Now</Button>
        </HStack>
       <Box width="20%"  display={["flex","flex","flex","none"]} justifyContent="center" alignItems="center">
        <DrawerExample/>
       </Box>
    </Flex>
  )
}

export default Navbar
