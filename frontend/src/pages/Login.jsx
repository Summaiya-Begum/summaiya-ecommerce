import React from 'react'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { getLogin, getUser } from '../Redux/auth/auth.action';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom"
import { useEffect } from 'react';
import { getCartItems } from '../Redux/cart/cart.action';
import { getData } from '../Redux/wishlist/wishlist.action';
function Login() {
    const { msg, isAuth, token } = useSelector((state) => state.user)
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loginData, setLoginData] = useState({
        firstname: '',
        email: '',
        password: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(loginData)
        dispatch(getLogin(loginData))

    }
    const handleChange = (e) => {
        const { value, name } = e.target
        // console.log(e.target.value);
        setLoginData({ ...loginData, [name]: value })
    }
    useEffect(() => {
        if (isAuth) {
            alert(msg)
            dispatch(getUser(token))
            dispatch(getCartItems(token))
            dispatch(getData(token))
            navigate('/')
        }
    }, [isAuth])


    return (
        <Flex
            minH={'90vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={4} mx={'auto'} maxW={'lg'} py={5} px={5}>
                <Stack align={'center'}>
                    <Heading fontSize={'lg'} color={'gray.600'}>
                        Login Your Account
                    </Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>

                    <form onSubmit={handleSubmit}>
                        <Stack spacing={4}>

                            <FormControl id="firstName" isRequired>
                                <FormLabel>First Name</FormLabel>
                                <Input name="firstname" onChange={handleChange} type="text" />
                            </FormControl>

                            <FormControl id="email" isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input name="email" onChange={handleChange} type="email" />
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <Input name="password" onChange={handleChange}
                                        type={showPassword ? 'text' : 'password'} />
                                    <InputRightElement h={'full'}>
                                        <Button
                                            variant={'ghost'}
                                            onClick={() =>
                                                setShowPassword((showPassword) => !showPassword)
                                            }>
                                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Stack spacing={10} pt={2}>
                                <Button
                                    loadingText="Submitting"
                                    size="lg"
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'pink.500',
                                    }}
                                    type="submit"
                                >
                                    Login
                                </Button>
                            </Stack>
                            <Stack pt={6}>
                                <Text align={'center'}>
                                    Already a user? <Link color={'blue.400'} to={'/signup'}>Sign Up</Link>
                                </Text>
                            </Stack>
                        </Stack>
                    </form>
                </Box>
            </Stack>
        </Flex>
    )
}

export default Login
