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
  Link,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
// import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
// import { useDispatch, useSelector } from "react-redux"
// import { getSignup } from '../Redux/auth/auth.action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useEffect } from 'react';

function NoteAdd() {
// http://localhost:8081/bookstore/create
// http://localhost:8081/bookstore

  const handleChange = () => {

  }
  const handleSubmit = () => {

  }
  return (
    <Flex
      minH={'90vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={4} mx={'auto'} maxW={'lg'} py={5} px={5} border={'1px solid green'}>
        <Stack align={'center'}>
          <Heading fontSize={'lg'} color={'black'}>
            Post Book In DataBase
          </Heading>
        </Stack>
        <Box
         rounded={'lg'}
         bg={useColorModeValue('white', 'gray.700')}
         boxShadow={'lg'}
         p={8}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>


              <FormControl id="image" isRequired>
                <FormLabel>Image Url</FormLabel>
                <Input name="image" onChange={handleChange} type="url" />
              </FormControl>


              <FormControl id="bookname" isRequired>
                <FormLabel>Book Name</FormLabel>
                <Input name="bookname" onChange={handleChange} type="text" />
              </FormControl>


              <FormControl id="author" isRequired>
                <FormLabel>Author</FormLabel>
                <Input name="author" onChange={handleChange} type="text" />
              </FormControl>


              <FormControl id="edition" isRequired>
                <FormLabel>Edition Date</FormLabel>
                <Input name="edition" onChange={handleChange} type="date" />
              </FormControl>

              <FormControl id="publisher" isRequired>
                <FormLabel>Publisher Name</FormLabel>
                <Input name="publisher" onChange={handleChange} type="text" />
              </FormControl>


              <FormControl id="price" isRequired>
                <FormLabel>Enter Cost</FormLabel>
                <Input name="price" onChange={handleChange} type="number" />
              </FormControl>

            
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
                  Submit Note
                </Button>
                <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored"
                />
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex >
  )
}

export default NoteAdd
