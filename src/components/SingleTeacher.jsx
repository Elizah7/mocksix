import React from 'react'
import { Box, Heading, Image, Text } from '@chakra-ui/react'
const SingleTeacher = ({img,name,inst}) => {
  return (
    <Box width="100%" >
       <Image src={img} />
       <Heading fontSize="100%" as="h2">{name}</Heading>
       <Text>{inst}</Text>
    </Box>
  )
}

export default SingleTeacher
