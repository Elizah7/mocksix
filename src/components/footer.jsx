import { Flex, Grid, GridItem, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
    return (
        <Grid padding="10%" width="100%" templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)']} gap="2%" margin="auto" flexWrap="wrap">
            <GridItem>
                <Image src="https://preview.colorlib.com/theme/kindergarten/assets/img/logo/logo.png" />
                <Text>Lorem ipsum dolor sit amet  recusandae aliquam nam ipsa illum, quos dolore harum earum maxime! Hic, esse.</Text>
              <Flex width="90%" justifyContent="space-between" paddingTop="5%" height="100px">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-youtube"></i>
              </Flex>
            </GridItem>
            <GridItem>
                <UnorderedList>
                    <ListItem>Lorem ipsum</ListItem>
                    <ListItem>Consectetur </ListItem>
                    <ListItem>Integer molestie</ListItem>
                    <ListItem>Facilisis in </ListItem>
                </UnorderedList>
            </GridItem>
            <GridItem>
            <UnorderedList>
                    <ListItem>Lorem ipsum </ListItem>
                    <ListItem>Consectetu</ListItem>
                    <ListItem>Integer molestie</ListItem>
                    <ListItem>Facilisis</ListItem>
                </UnorderedList>
            </GridItem>
        </Grid>
    )
}

export default Footer
