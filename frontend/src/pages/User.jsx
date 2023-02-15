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
    useColorModeValue,
    Center,
    Text,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout, getUser } from '../Redux/auth/auth.action';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'
import { FiLogIn } from 'react-icons/fi'
import { BiLogOut } from 'react-icons/bi'
import { Link } from "react-router-dom"
function User() {
    const { isAuth, token } = useSelector((state) => state.user);
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(userLogout())
    }

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
                        color={useColorModeValue('black', 'white')}
                    >
                        {
                            !isAuth ?
                                <Avatar
                                    size={'sm'}
                                    src={<FaUserCircle color='white' />}
                                />
                                :
                                <Text textTransform={"uppercase"} w={10} borderRadius={"50%"} py={'0.4rem'} fontSize={20} textAlign={'center'}>
                                    {user && user.firstname[0]} {user && user.lastname[0]}
                                </Text>
                        }
                    </MenuButton>
                    <MenuList alignItems={'center'}>
                        <br />
                        <Center>
                            <Avatar
                                size={'xl'}
                                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0XmmVnMfky_5fsWIgguEgDW_v5D3znnJbqw&usqp=CAU'}
                            />
                        </Center>
                        <br />
                        <Center textTransform={'uppercase'}>
                            {isAuth ? user.firstname : ""} {isAuth ? user.lastname : ""}
                        </Center>
                        <br />
                        <MenuDivider />
                        <Link to={'/wishlist'}><MenuItem>Your WishList</MenuItem></Link>
                        <MenuItem>Account Settings</MenuItem>
                        {
                            !isAuth ?
                                (
                                    <Link to='/signup'>
                                        <MenuItem>
                                            <Flex alignItems={'center'} gap={2}>
                                                <Text>SignUp</Text>
                                                <Text><FiLogIn size={20} /></Text>
                                            </Flex>
                                        </MenuItem>
                                    </Link>

                                )
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
