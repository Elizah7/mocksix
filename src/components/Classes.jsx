import { Box, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Singlecard from './singlecard'

const Classes = () => {
    const arr = [
        {title:"inteligent challenge",image:"https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img2.png",text:"fgsdfgrtg"},
        {title:"inteligent challenge",image:"https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img2.png",text:"fgsdfgrtg"},
        {title:"inteligent challenge",image:"https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img2.png",text:"fgsdfgrtg"}
    ]
    return (
        <Box width="100%">
            <Box width="80%" textAlign="center" padding="1%" margin="auto">
                <Heading as="h2">Classes we offer</Heading>
                <Text textAlign="center"> laborum odio eligendi, velit earum doloribus, ipsum dolor saepe cupiditate libero dolorum porro eum iste eveniet consequatur quaerat cumque magni iusto doloremque. Velit, ut tempore nulla perferendis numquam accusantium exercitationem modi optio laboriosam vero? Esse!</Text>
            </Box>
            <Grid width="80%" templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)']} gap="2%" margin="auto" flexWrap="wrap" padding="2%">
               {
                arr.map(ele=> <GridItem><Singlecard title={ele.title} img={ele.image} txt={ele.text}/></GridItem>)
               }
            </Grid>
        </Box>
    )
}

export default Classes
