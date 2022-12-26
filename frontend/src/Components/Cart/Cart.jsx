import {
  Box,
  Button,
  Divider,
  Heading,
  List,
  Select,
  Stack,
  ListItem,
  Text,
  useColorModeValue,
  Image,
  Flex,
  Spacer
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons'
import OrderSummary from './OrderSummary';
const PackageTier = ({ }) => {


  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: 'flex-start',
        md: 'space-around',
      }}
      direction={{
        base: 'column',
        md: 'row',
      }}
      alignItems={{ md: 'center' }}>

      <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYRUbq3qBYUhxNDVtJgR3E3lpB-eNGCdA2FR9cqDuFcA&s"} />

      <List spacing={3} textAlign="start">
        <ListItem >Title : abc</ListItem>
        <ListItem >Description: cbsuydfviud</ListItem>
        <ListItem >Price: 5646</ListItem>
      </List>
      <Stack>
        <Select placeholder='Select option'>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
      </Stack>
      <Heading size={'xl'}>$50.00</Heading>
      <Stack>
        <Button
          size="md"
          color={useColorModeValue('black', 'white')}
          bg={useColorModeValue('white', 'gray.800')}>
          <CloseIcon />
        </Button>
      </Stack>
    </Stack>
  );
};
const Cart = () => {
  return (
    <>
      <Flex minWidth='max-content' alignItems='center' gap='2'direction={['column','row']}  >
        <Box py={6} px={5} min={'100vh'}>
          <Stack spacing={4} width={'100%'} direction={'column'}>
            <Stack
              p={5}
              alignItems={'center'}
              justifyContent={{
                base: 'flex-start',
                md: 'space-around',
              }}
              direction={{
                base: 'column',
                md: 'row',
              }}>
              <Stack
                width={{
                  base: '100%',
                  md: '40%',
                }}
                textAlign={'center'}>
                <Heading size={'lg'}>
                  Cart  Items:  <Text color="purple.400">5</Text>
                </Heading>
              </Stack>
            </Stack>
            {/* Passing data props */}
            <PackageTier />
          </Stack>
          <Divider />
        </Box>
        <Spacer />
        <OrderSummary />
      </Flex>

    </>
  );
};

export default Cart;