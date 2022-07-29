import { React, useState, useEffect } from 'react';

import { Box, Flex, Img, Link } from '@chakra-ui/react';
import MainbarMenu from '../assets/images/logo.png';
import MenuIcon from '../assets/images/menu.png';
import FaceBook from '../assets/images/facebook.png';
import Instagram from '../assets/images/instagram.png';
const Becomevip = ({ onOpen, setisMenuOpen }) => {
  const [navBecome, setnavBecome] = useState(false);

  const ScrollDown = () => {
    if (window.scrollY >= 710) {
      setnavBecome(true);
    } else {
      setnavBecome(false);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', ScrollDown);
    }
  }, []);

  const becomesection = {
    w: '100%',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '1',
  };
  const becomesection1 = { maxW: '1440px' };
  const bannerChildStyle = {
    w: '100%',
    display: 'flex',
    justifyContent: { base: 'space-between', md: 'space-around' },
    alignItems: 'center',
  };
  const bannerLinkStyle = {
    fontWeight: '500px',
    padding: '0px 24px',
  };
  return (
    <Box m={{ base: '0 15px 61px', lg: '0 0 61px' }}>
      <Flex
        sx={navBecome ? becomesection : becomesection1}
        alignItems={{ base: 'flex-end', lg: 'center' }}
        justifyContent="space-around"
        flexDirection={{ base: 'column', lg: 'inherit' }}
        background="#fff"
        minH="64px"
        m="0 auto"
        p={{ base: '16px 20px', md: '16px 5px' }}
        boxShadow="0px 0px 3px 3px rgb(0 0 0 / 10%)"
      >
        <Box sx={bannerChildStyle}>
          <Box maxW="250px" mr={{ base: '54px', md: '24px' }}>
            <Img src={MainbarMenu} width="45px" height="45px" />
          </Box>
          <Box maxW="630px" display={{ base: 'none', md: 'block' }}>
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

          <Box
            w={{ base: '134px', sm: '200px', md: '102px' }}
            ml={{ base: '0', sm: '54px', md: '24px' }}
          >
            <Flex
              alignItems={{ base: 'center', md: 'inherit' }}
              justifyContent={{
                base: 'space-between',
                sm: 'space-around',
                md: 'inherit',
              }}
            >
              <Flex>
                <Img src={FaceBook} width="28px" height="28px" mr={'12px'} />
                <Img src={Instagram} width="28px" height="28px" />
              </Flex>
              <Box
                display={{ base: 'block', md: 'none' }}
                cursor={{ base: 'pointer', md: 'inherit' }}
                onClick={() => {
                  setisMenuOpen(true);
                  onOpen();
                }}
              >
                <Img src={MenuIcon} width="34px" height="36px" />
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Becomevip;
