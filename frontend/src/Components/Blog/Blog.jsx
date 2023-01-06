import React from 'react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useEffect } from 'react';

function Blog() {
  // http://localhost:8081/blog/create
  // http://localhost:8081/blog

  const handleChange = () => {

  }
  const handleSubmit = () => {

  }
  return (
    <Flex
      minH={'50vh'}
      align={'center'}
      justify={'center'}
      maxW={'xl'}
      m={'auto'}
      p={'3rem'}
      color={useColorModeValue('black', 'white')}
      bg={useColorModeValue('white', 'gray.800')}>
      <Stack spacing={4} mx={'auto'} maxW={'xl'} py={5} px={5} >
        <Stack align={'center'}          color={useColorModeValue('white', 'white')}
            bg={useColorModeValue('white', 'gray.800')}>
          <Heading fontSize={'lg'} color={'black'}>
            Post You Blog
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
          w={[200, 400, 500]}
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>


              <FormControl id="image" isRequired>
                <FormLabel>Image Url</FormLabel>
                <Input name="image" onChange={handleChange} type="url" />
              </FormControl>


              <FormControl id="title" isRequired>
                <FormLabel>Title Name</FormLabel>
                <Input name="title" onChange={handleChange} type="text" />
              </FormControl>


              <FormControl id="description" isRequired>
                <FormLabel>Discription</FormLabel>
                <Input name="description" onChange={handleChange} type="text" />
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

export default Blog