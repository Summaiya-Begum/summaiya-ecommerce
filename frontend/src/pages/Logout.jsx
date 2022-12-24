import React from 'react'
import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
function Logout() {
const isAuth = useSelector((state)=>state.user.isAuth)

    const handleLogout=()=>{

    }
    return (
        <>
            <Box color={'black'}>
                <Menu>
                    <MenuButton
                        as={Button}
                        rounded={'full'}
                        variant={'link'}
                        cursor={'pointer'}
                        minW={0}
                        bg={useColorModeValue('black', 'gray.900')}
                        color={useColorModeValue('black', 'black')}
                    >
                        <Avatar
                            size={'sm'}
                            src={'https://avatars.githubusercontent.com/u/103142498?v=4'}
                        />
                    </MenuButton>
                    <MenuList alignItems={'center'}>
                        <br />
                        <Center>
                            <Avatar
                                size={'2xl'}
                                src={'https://avatars.githubusercontent.com/u/103142498?v=4'}
                            />
                        </Center>
                        <br />
                        <Center>
                            <p>Username</p>
                        </Center>
                        <br />
                        <MenuDivider />
                        <MenuItem>Your Servers</MenuItem>
                        <MenuItem>Account Settings</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </>
    )
}

export default Logout
