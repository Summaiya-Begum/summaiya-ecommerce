
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

export default function OrderSummary() {
    return (
        <Box py={12} >
            <VStack spacing={2} textAlign="center">
                <Heading as="h1" fontSize="4xl">
                   Order Summary
                </Heading>
                <Text fontSize="lg" color={'gray.500'}>
                    Start with 14-day free trial. No credit card needed. 
                </Text>
            </VStack>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                textAlign="center"
                justify="center"
                spacing={{ base: 4, lg: 10 }}
                py={10}>
                    <Box position="relative" boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
                        <Box
                            position="absolute"
                            top="-16px"
                            left="50%"
                            style={{ transform: 'translate(-50%)' }}>
                            <Text
                                textTransform="uppercase"
                                bg={useColorModeValue('red.300', 'red.700')}
                                px={1}
                                py={1}
                                color={useColorModeValue('gray.900', 'gray.300')}
                                fontSize="sm"
                                fontWeight="600"
                                rounded="xl">
                                Order Summary
                            </Text>
                        </Box>
                        <Box py={4} px={12}>
                            <HStack>
                                <Text fontWeight="500" fontSize="2xl">
                                    Growth
                                </Text>

                            </HStack>
                            <HStack justifyContent="center">
                                <Text fontSize="3xl" color="gray.500">
                                    Total
                                </Text>
                                <Text fontSize="3xl" fontWeight="600">
                                    $
                                </Text>
                                <Text fontSize="5xl" fontWeight="900">
                                    149
                                </Text>

                            </HStack>
                            <HStack justifyContent="center">
                                <Text fontSize="3xl" color="gray.500">
                                    Total
                                </Text>
                                <Text fontSize="3xl" fontWeight="600">
                                    $
                                </Text>
                                <Text fontSize="5xl" fontWeight="900">
                                    149
                                </Text>

                            </HStack>
                            <HStack justifyContent="center">
                                <Text fontSize="3xl" color="gray.500">
                                    Total
                                </Text>
                                <Text fontSize="3xl" fontWeight="600">
                                    $
                                </Text>
                                <Text fontSize="5xl" fontWeight="900">
                                    149
                                </Text>

                            </HStack>
                        </Box>
                        <VStack
                            bg={useColorModeValue('gray.50', 'gray.700')}
                            py={4}
                            borderBottomRadius={'xl'}>
                            <Box w="80%" pt={7}>
                                <Button w="full" colorScheme="red">
                                    Checkout
                                </Button>
                            </Box>
                        </VStack>
                    </Box>
            </Stack>
        </Box>
    );
}

