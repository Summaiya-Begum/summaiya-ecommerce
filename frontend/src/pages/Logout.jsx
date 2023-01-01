import React, { useEffect } from 'react'
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
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../Redux/auth/auth.action';
import { useNavigate } from 'react-router-dom';
function Logout() {
    const { isAuth, token } = useSelector((state) => state.user)
    console.log(isAuth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(userLogout())
    }
    useEffect(()=>{
        if(!isAuth){
            navigate('/')
        }
    },[])
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
