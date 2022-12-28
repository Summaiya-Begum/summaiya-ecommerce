import {
  Box,
  Button,
  Divider,
  Heading,
  List,
  Select,
  Stack,
  ListItem,
  HStack,
  useColorModeValue,
  Image,
  Flex,
  Spacer,
  SimpleGrid,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons'
import OrderSummary from './OrderSummary';
import { FiGift } from 'react-icons/fi'
import { Link } from "react-router-dom"
import ArrowUp from '../ArrowUp';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCartItems } from '../../Redux/cart/cart.action';


const PackageTier = ({ item ,quantity}) => {


  return (
    <>
      <Stack spacing="10" width="full" textAlign={'start'} direction={{ base: 'column', md: 'row' }}>
        <Image
          rounded="lg"
          width="150px"
          height="150px"
          fit="cover"
          src={item.category.image}
          alt={'cart'}
          draggable="false"
          loading="lazy"
          margin={'auto'}
        />
        <Box pt="4">
          <Stack spacing="0.5">
            <Text fontWeight="medium">Title: {item.title}</Text>
            <Text fontWeight="medium">Category: {item.category.name}</Text>
            <Text color={('gray.600', 'gray.400')} fontSize="sm">
              Description: {item.description}
            </Text>
          </Stack>

          <HStack spacing="1" mt="3" color={('gray.600', 'gray.400')}>
            <Icon as={FiGift} boxSize="4" />
            <Link fontSize="sm" textDecoration="underline">
              Add gift wrapping
            </Link>
          </HStack>
        </Box>
        <Box display='flex' alignItems='center' justifyContent={'center'} gap={2}>
          <Button>+</Button>
          <Box as='span'>
            {quantity}
          </Box>
          <Button>-</Button>
        </Box>
        <Stack justifyContent={'center'} textAlign={'center'}>
          <Heading size={'1xl'}>₹{item.price*quantity}</Heading>
        </Stack>
        <Stack justifyContent={'center'}>
          <Button
            size="md"
            color={useColorModeValue('black', 'white')}
            bg={useColorModeValue('white', 'gray.800')}>
            <CloseIcon />
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

const Cart = () => {
  const dispatch = useDispatch()
  const { cartItems, quantity } = useSelector(state => state.cart)



  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  return (
    <>
      <Flex
        border={'2px solid orange'}
        py={{
          lg: '5rem',
          md: '2rem'
        }}
        px={{
          lg: '1rem',
          md: '2rem'
        }}
        justifyContent={{
          base: 'flex-start',
          md: 'space-between',
          lg: 'space-arround',
        }}
        direction={{
          base: 'column',
          md: 'row',
        }}
        gap={15}
        m={'auto'}
      >

        <SimpleGrid
          direction={['row', 'column']}
          cursor={'pointer'} >
          <Stack spacing={4} width={'auto'} direction={'column'}>
            <VStack
              justifyContent={{
                base: 'flex-start',
                md: 'space-between',
              }}
              direction={{
                base: 'column',
                md: 'row',
              }}
              alignItems={'start'}
            >
              <Stack>
                <Heading size={'lg'}>
                  Cart  Items:  <span style={{ color: "#E80070" }}>{quantity.length}</span>
                </Heading>
              </Stack>
            </VStack>
            {/* Passing data props */}
            {
              cartItems.map((el, i) => {
                // console.log(el)
                return <PackageTier item={el} quantity={quantity[i]} />
              })
            }
          </Stack>
          <Divider />
        </SimpleGrid>

        <Flex direction="column" align="center" flex="1"  >
          <OrderSummary />
          <HStack fontWeight="semibold">
            <p>or</p>
            <Link color={('blue.500', 'blue.200')}>Continue shopping</Link>
          </HStack>
        </Flex>
      </Flex>
      <ArrowUp />
    </>
  );
};

export default Cart;