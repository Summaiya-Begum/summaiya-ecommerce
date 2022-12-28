import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button
} from '@chakra-ui/react'
import { BsCart3 } from "react-icons/bs"
import { useSelector } from 'react-redux'
function DrawerCart() {
    const { cartItems, quantity } = useSelector(state => state.cart)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}
                display={{ base: 'none', md: 'inline-flex' }}
                fontWeight={'bold'}
                color={'white'}
                bg={'#E80070'}
                _hover={{
                    bg: 'pink.400',
                    color: "white"
                }}>
                <BsCart3 position={'relative'} style={{ fontSize: "30px", color: "black", marginRight: '-9px' }} /><span style={{ marginTop: '-24px', }} >{quantity.length}</span>
            </Button>
            <Drawer onClose={onClose} isOpen={isOpen} size={'md'}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Cart Products</DrawerHeader>
                    <DrawerBody>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Consequat nisl vel pretium lectus quam id. Semper quis lectus
                            nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
                            quis varius quam quisque. Massa ultricies mi quis hendrerit dolor
                            magna eget est lorem. Erat imperdiet sed euismod nisi porta.
                            Lectus vestibulum mattis ullamcorper velit.
                        </p>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default DrawerCart
