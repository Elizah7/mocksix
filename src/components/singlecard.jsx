import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Singlecard = ({title,txt,img}) => {
  return (
    <Box width="100%">
       <Image src={img} />
       <Heading as="h2">{title}</Heading>
       <Text>{txt}</Text>
    </Box>
  )
}

export default Singlecard
