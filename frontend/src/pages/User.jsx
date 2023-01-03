import React, { useEffect } from 'react'
import {
    Box,
    Flex,
    Avatar,
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
    Text,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../Redux/auth/auth.action';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'
import { FiLogIn } from 'react-icons/fi'
import { BiLogOut } from 'react-icons/bi'
import { Link } from "react-router-dom"
function User() {
    const { isAuth, token } = useSelector((state) => state.user)
    console.log(isAuth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(userLogout())
    }
    useEffect(() => {
        if (!isAuth) {
            navigate('/')
        }
    }, [])
    return (
        <>
            <Box color={useColorModeValue('black', 'white')}>
                <Menu
                    color={useColorModeValue('white', 'white')}
                    bg={useColorModeValue('white', 'gray.800')}>
                    <MenuButton
                        as={Button}
                        rounded={'full'}
                        variant={'link'}
                        cursor={'pointer'}
                        minW={0}
                        bg={useColorModeValue('white', 'gray.900')}
                        color={useColorModeValue('white', 'white')}

                    >
                        {
                            !isAuth ?
                                <Avatar
                                    size={'sm'}
                                    src={<FaUserCircle color='white' />}
                                />
                                :
                                <Avatar
                                    size={'sm'}
                                    src={'https://avatars.githubusercontent.com/u/103142498?v=4'}
                                />
                        }
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
                        <Link to={'/wishlist'}><MenuItem>Your WishList</MenuItem></Link>
                        <MenuItem>Your Servers</MenuItem>
                        <MenuItem>Account Settings</MenuItem>
                        {
                            !isAuth ?
                                (<MenuItem>
                                    <Link to='/signup'>
                                        <Flex alignItems={'center'} gap={2}>
                                            <Text>SignUp</Text>
                                            <Text><FiLogIn size={20} /></Text>
                                        </Flex>
                                    </Link>

                                </MenuItem>)
                                :
                                (<MenuItem onClick={handleLogout}>
                                    <Flex alignItems={'center'} gap={2}>
                                        <Text>Logout</Text>
                                        <Text><BiLogOut size={20} /></Text>
                                    </Flex>

                                </MenuItem>)
                        }
                    </MenuList>
                </Menu>
            </Box>
        </>
    )
}

export default User
