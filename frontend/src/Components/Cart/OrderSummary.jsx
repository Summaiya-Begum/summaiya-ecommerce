
import {
    Box,
    Stack,
    HStack,
    Heading,
    Text,
    VStack,
    useColorModeValue,
    Button,
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function OrderSummary() {
const { cartItems} = useSelector(state => state.cart)
const navigate = useNavigate()
    const subtotal =  cartItems?.reduce((acc,el,i)=>{
        return acc+= el.price*el.quantity
    },0)
// console.log(subtotal)

const discount = (subtotal-(subtotal*62)/100)
// console.log(discount)


const handleProceed=()=>{
    navigate('/')
}
    return (
        <Box p={{lg:'0.5rem', md:'2rem'}}>
            <VStack spacing={1} textAlign="center">
                <Heading as="h1" fontSize="4xl">
                    Order Summary
                </Heading>
                <Text fontSize="lg" color={'gray.500'}p={{lg:'2rem', md:'2rem',sm:'2rem'}}>
                    Start with 14-day free trial. No credit card needed.
                </Text>
            </VStack>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                textAlign="center"
                justify="center"
                spacing={{ base: 4, lg: 5 }}
              >
                <Box position="relative" boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
                    <Box
                        position="absolute"
                        top="-16px"
                        left="50%"
                        style={{ transform: 'translate(-50%)' }}>
                        <Text
                            textTransform="uppercase"
                            bg={useColorModeValue('#E80070', 'pink.700')}
                            px={2}
                            py={2}
                            color={useColorModeValue('gray.900', 'gray.300')}
                            fontSize="sm"
                            fontWeight="600"
                            rounded="xl">
                            Order Summary
                        </Text>
                    </Box>
                    <Box boxSize={["sm",]} h={{lg:60}} py={8} px={5}
                        width={{
                            base: '100%',
                            lg: '350px',
                            md: '500px',
                        }}
                    >
                        <HStack justifyContent="space-between" py={5}>
                            <Text fontSize="1xl" color="#E80070">
                                Subtotal
                            </Text>
                            <Text fontSize="1xl" fontWeight="500">
                            ₹ {subtotal}
                            </Text>

                        </HStack>
                        <HStack justifyContent="space-between"
                            py={5}
                        >
                            <Text fontSize="1xl" color="#E80070">
                              Discount Coupon Code 
                            </Text>
                            <Text fontSize="1xl" fontWeight="500">
                               62% off
                            </Text>
                        </HStack>
                        <HStack justifyContent="space-between" py={5}>
                            <Text fontSize="1xl" color="#E80070">
                                Total
                            </Text>
                            <Text fontSize="1xl" fontWeight="500">
                            ₹ {(discount).toFixed(2)}
                            </Text>
                        </HStack>
                    </Box>
                    <VStack
                        bg={useColorModeValue('gray.50', 'gray.700')}
                        borderBottomRadius={'xl'} p={{lg:'0.5rem', md:'3rem',sm:'1rem'}}>
                        <Box w="80%" >
                            <Button onClick={handleProceed} colorScheme="blue" size="lg" fontSize="md" rightIcon={<FaArrowRight />}>
                                Checkout
                            </Button>
                        </Box>
                    </VStack>
                </Box>
            </Stack>
        </Box>
    );
}

