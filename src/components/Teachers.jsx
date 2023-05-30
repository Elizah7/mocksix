
import React from 'react'
import SingleTeacher from './SingleTeacher'
import { Box, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
const Teachers = () => {
    const arr = [
        { name: "Elijah Mikealson", inst: "Sports Instructor", img: "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team2.png" },
        { name: "Elijah Mikealson", inst: "Sports Instructor", img: "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team2.png" },
        { name: "Elijah Mikealson", inst: "Sports Instructor", img: "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team2.png" },
        { name: "Elijah Mikealson", inst: "Sports Instructor", img: "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team2.png" }
    ]
    return (
        <Box width="100%" >
            <Box width="80%" textAlign="center" padding="1%" margin="auto">
                <Heading as="h2">Our Expert Teachers</Heading>
                <Text textAlign="center"> laborum odio eligendi, velit earum doloribus, ipsum dolor saepe cupiditate libero dolorum porro eum iste eveniet consequatur quaerat cumque magni iusto doloremque. Velit, ut tempore nulla perferendis numquam accusantium exercitationem modi optio laboriosam vero? Esse!</Text>
            </Box>
            <Grid width="80%" margin="auto" templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']} gap="2%" flexWrap="wrap">
                {
                    arr.map(ele => <GridItem><SingleTeacher name={ele.name} img={ele.img} inst={ele.inst} /></GridItem>)
                }
            </Grid>
        </Box>
    )
}

export default Teachers
