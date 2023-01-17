import React from "react"
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useColorMode
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SunIcon,
  MoonIcon,

} from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import User from '../pages/User';
import { BsCart3 } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getCartItems } from '../Redux/cart/cart.action';
import { getData } from "../Redux/wishlist/wishlist.action";
import { getUser } from "../Redux/auth/auth.action";
export default function Navbar() {
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const { cartItems, msg } = useSelector(state => state.cart);
  const { isAuth, token } = useSelector(state => state.user);
  const { wishlistData } = useSelector(state => state.wishlist)
  const msg2 = useSelector((state) => state.wishlist.msg)
  const dispatch = useDispatch()
  const btnRef = React.useRef()
  
  useEffect(() => {
    if (isAuth) {
      dispatch(getCartItems(token))
      dispatch(getData(token));
      dispatch(getUser(token))
    }
  }, [msg, msg2]);

  return (
    <Box>
      <Flex
        bg={useColorModeValue('black', 'gray.800')}
        color={useColorModeValue('white', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -3 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 4 }} justify={{ base: 'start', md: 'start' ,sm:'start'}} >
          <Link to='/'>
            <Text 
              textAlign={useBreakpointValue({ base: 'center', md: 'left' , sm:'right' })}
              fontFamily={'heading'}
              fontSize={18}
              fontWeight={'bold'}
              color={useColorModeValue('white', 'white')} p={'0.5rem'}>
              <span style={{fontFamily:'Pacifico'}}>Summaiya Ecommerce</span> 
            </Text>
          </Link>
          <Flex display={{ base: 'none', md: 'flex' }} p={'0.5rem'} m={'auto'} fontWeight={'500'}
          >
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={0}>
          {/* Dark / Light Mode Button  */}
          <Button bg={'black'} onClick={toggleColorMode}
            _hover={{
              bg: '#E80070',
              color: "black"
            }}
          >
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>

          {/* CART SECTION COMPONENT LINK */}
          <Link to={'/cart'}>
            <Button
              ref={btnRef} colorScheme='teal' onClick={onOpen}
              fontWeight={'bold'}
              color={'white'}
              bg={'black'}
              // bg={'#E80070'}
              _hover={{
                bg: '#E80070',
                color: "black"
              }}>
              <BsCart3 position={'relative'} style={{ fontSize: "30px", marginRight: '-9px' }} _hover={{
                color: "#E80070"
              }} /><span style={{ marginTop: '-24px', color: "orange" }}  >{isAuth ? cartItems?.length : 0}</span>
            </Button>
          </Link>

          {/* USER AUTH SECTION COMPONENT */}
          <User />
          {/* USER AUTH SECTION COMPONENT */}
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('#E80070', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                to={navItem.href}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>
            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      to={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('black', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'black' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={2} onClick={children && onToggle}>
      <Flex
        py={1}
        as={Link}
        to={href}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} to={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};



const NAV_ITEMS = [
  {
    label: 'Products',
    children: [
      {
        label: 'Random Product',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'Beauty Products',
        subLabel: 'Trending Brand Cosmetic',
        href: '#',
      },
    ],
  },
  {
    label: 'Accessories',
    children: [
      {
        label: 'Job Board',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },

];



































// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Input, Box, Text, TagLabel } from '@chakra-ui/react'
// import "../Css/navbar.css"
// function Navbar() {
//   return (
//     <Box className="nav">
//       <Input type="checkbox" id="nav-check" />
//       <Box className="nav-header">
//         <Text className="nav-title">
//           <Link to="/">
//             Summaiya
//           </Link>
//         </Text>
//       </Box>
//       <Box className="nav-btn">
//         <label htmlFor='' for="nav-check">
//           <span></span>
//           <span></span>
//           <span></span>
//         </label>
//       </Box>

//       <Box className="nav-links">
//         <Link to="/" ></Link>
//         <span className="navigationSpace" />
//         <Link to="/product" >Product</Link>
//         <span className="navigationSpace" />
//         <Link to="/signup" >Sign up</Link>
//         <span className="navigationSpace" />
//         <Link to="/login" >Login</Link>
//         <span className="navigationSpace" />
//         <Link to="/cart">Cart</Link>
//         <span className="navigationSpace" />
//       </Box>

//     </Box>


//   )
// }

// export default Navbar
