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
    Radio,
    RadioGroup,
} from '@chakra-ui/react';
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from "react-redux"
import { getSignup } from '../Redux/auth/auth.action';
function Signup() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [signupData, setSignupData] = useState({
        firstname: '',
        lastname: "",
        email: "",
        password: "",
        phonenumber: "",
        gender: "male"
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(signupData)
        dispatch(getSignup(signupData))
            alert("SignUp Successfull")
            navigate('/login')
    }
    const handleChange = (e) => {
        const { value, name } = e.target
        setSignupData({
            ...signupData,
            [name]: value,
        })
    }
    // console.log(signupData)
    return (
        <Flex
            minH={'90vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={5} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'lg'} color={'black'}>
                        Create Your Account Here
                    </Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={4}>
                            <HStack>
                                <Box>
                                    <FormControl id="firstName" isRequired>
                                        <FormLabel>First Name</FormLabel>
                                        <Input name="firstname" value={signupData.firstname} onChange={handleChange} type="text" />

                                    </FormControl>
                                </Box>
                                <Box>
                                    <FormControl id="lastName" isRequired>
                                        <FormLabel>Last Name</FormLabel>
                                        <Input name="lastname" onChange={handleChange} type="text" />
                                    </FormControl>
                                </Box>
                            </HStack>
                            <FormControl id="email" isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input name="email" onChange={handleChange} type="email" />
                            </FormControl>


                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <Input name="password" onChange={handleChange} type={showPassword ? 'text' : 'password'} />
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

                            <FormControl id="phone" isRequired>
                                <FormLabel>Phone Number</FormLabel>
                                <Input name="phonenumber" onChange={handleChange} type="number" />
                            </FormControl>

                            <FormLabel as='legend'>Select Gender</FormLabel>
                            <RadioGroup defaultValue='male'>
                                <HStack spacing='24px'>
                                    <Radio name="gender" onChange={handleChange} value='male' defaultChecked >Male</Radio>
                                    <Radio name="gender" onChange={handleChange} value='female' >Female</Radio>
                                </HStack>
                            </RadioGroup>
                            <Stack spacing={5} pt={0}>
                                <Button
                                    loadingText="Submitting"
                                    size="lg"
                                    bg={'#11A5DC'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'pink.500',
                                    }}
                                    type="submit"
                                >
                                    Sign up
                                </Button>
                            </Stack>
                            <Stack pt={0}>
                                <Text align={'center'}>
                                    Already a user? <Link color={'blue.400'} to={'/login'}>Login</Link>
                                </Text>
                            </Stack>
                        </Stack>
                    </form>
                </Box>
            </Stack>
        </Flex >
    )
}

export default Signup
