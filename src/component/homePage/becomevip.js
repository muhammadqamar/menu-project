import { Box, Button, Flex, Heading, Img, Link, Text } from '@chakra-ui/react';
import React from 'react';
import MainbarMenu from '../assets/images/logo.png';
import FaceBook from '../assets/images/facebook.png';
import Instagram from '../assets/images/instagram.png';
const Becomevip = () => {
  const bannerChildStyle = {
    // background: '#fff',
    // height: '80px',
    // margin: '0 50px 20px 50px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  };
  const bannerLinkStyle = {
    fontWeight: '500px',
    padding: '0px 24px',
  };
  return (
    <Box w="100%" mb="61px">
      <Flex
        maxW="1440px"
        alignItems={{ base: 'flex-end', lg: 'center' }}
        justifyContent="space-around"
        flexDirection={{ base: 'column', lg: 'inherit' }}
        // background="rgba(11, 44, 91, 1)"
        background="#fff"
        minH="64px"
        m="0 auto"
        // color="#fff"
        p="16px 32px"
        boxShadow="0px 0px 3px 3px rgb(0 0 0 / 10%)"
      >
        <Box sx={bannerChildStyle}>
          <Box mr={{base:'54px', md:"24px"}}>
            <Img src={MainbarMenu} width="40px" height="40px" />
          </Box>
          <Box>
            <Link sx={bannerLinkStyle} href="#">
              ABOUT
            </Link>
            <Link sx={bannerLinkStyle} href="#">
              QUALITY
            </Link>
            <Link sx={bannerLinkStyle} href="#">
              STORE
            </Link>
            <Link sx={bannerLinkStyle} href="#">
              CONTACT
            </Link>
            <Link sx={bannerLinkStyle} href="#">
              FRANCHISING
            </Link>
          </Box>
          
          <Box ml={{base:"54px", md:"24px"}}>
            <Flex>
              <Img src={FaceBook} width="28px" height="28px" mr={'12px'} />
              <Img src={Instagram} width="28px" height="28px" />
            </Flex>
          </Box>
        </Box>
        {/* <Flex flexDirection={{ base: 'column', lg: 'inherit' }}>
          <Heading
            fontSize="14px"
            lineHeight="32px"
            fontWeight="700"
            textTransform="uppercase"
            mr="8px"
          >
            Become a VIP
          </Heading>
          <Text fontSize="14px" lineHeight="32px">
            Be the first to receive updates on exclusive events, secret menus,
            special offers/discounts, loyalty rewards & more!
          </Text>
        </Flex>
        <Button
          w="99.31px"
          h="30px"
          background="transparent"
          fontSize="14px"
          fontWeight="700"
          textTransform="uppercase"
          border="1px solid #fff"
          borderRadius="16px"
          p="4 16px"
          _hover={{ background: 'transparent' }}
          _active={{ background: 'transparent' }}
        >
          Sign up
        </Button> */}
      </Flex>
    </Box>
  );
};

export default Becomevip;
