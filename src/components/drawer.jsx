import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    Text,
  } from '@chakra-ui/react'
import { useRef } from 'react'


let  DrawerExample = ()=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
  
    return (
      <>
      <i class="fa-solid fa-bars 2xl" ref={btnRef} colorScheme='teal' onClick={onOpen}></i>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
            <VStack fontSize="90%" color="gray" width="100%"  marginTop="15%">
            <Text className='stack'>Home</Text>
            <Text className='stack' >Class</Text>
            <Text className='stack'>About</Text>
            <Text className='stack'>Blog</Text>
            <Text className='stack'>Contact</Text>
            <Button className='btn' backgroundColor="rgb(106, 252, 252)" color="black">Enroll Now</Button>
        </VStack>
            </DrawerBody>
            <DrawerFooter>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default DrawerExample