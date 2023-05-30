import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Welcome = () => {
    return (
        <Box width="100%" >
            <Box width="80%" textAlign="center" padding="1%" margin="auto"> 
                <Heading as="h2">Welcome to our School</Heading>
                <Text textAlign="center"> laborum odio eligendi, velit earum doloribus, ipsum dolor saepe cupiditate libero dolorum porro eum iste eveniet consequatur quaerat cumque magni iusto doloremque. Velit, ut tempore nulla perferendis numquam accusantium exercitationem modi optio laboriosam vero? Esse!</Text>
            </Box>
            <Box width="80%" padding="1%" margin="auto" display={["block", "block", "block", "flex"]} alignItems="center">
                <Box width={["100%", "100%", "100%", "50%"]} fontSize="90%">
                    <Flex width="100%" padding="5%">
                        <Image width="10%" src="https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon1.svg" />
                        <Box paddingLeft="2%">
                            <Heading as="h6">Inter School Sports</Heading>
                            <Text>Lorem ipsum dolor sit amet.</Text>
                        </Box>
                    </Flex>
                    <Flex width="100%" padding="5%">
                        <Image width="10%" src="https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon2.svg" />
                        <Box paddingLeft="2%">
                            <Heading as="h6">Friendly Envoirment</Heading>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, impedit.</Text>
                        </Box>
                    </Flex>
                    <Flex width="100%" padding="5%">
                        <Image width="10%" src="https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon3.svg" />
                        <Box paddingLeft="2%">
                            <Heading as="h6">Friendly Envoirment</Heading>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, impedit.</Text>
                        </Box>
                    </Flex>
                </Box>
                <Box width={["100%", "100%", "100%", "50%"]}>
                    <Image width="100%" src="https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/about2.png" />
                </Box>
            </Box>
        </Box>
    )
}

export default Welcome
