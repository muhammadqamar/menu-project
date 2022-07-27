import React from 'react';

import MainbarMenu from '../../assets/images/logo.png';
import FaceBook from '../../assets/images/facebook.png';
import Instagram from '../../assets/images/instagram.png';

import {
  Box,
  Flex,
  Img,
  Link,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react';
import CloseLogo from '../../assets/images/close.png';

const NavModal = ({ isOpen, onOpen, onClose }) => {
  const bannerChildStyle = {
    w: '100%',
    display: 'flex',
    justifyContent: { base: 'space-between', md: 'space-around' },
    alignItems: 'center',
  };
  const bannerLinkStyle = {
    maxW: '630px',
    fontWeight: '500px',
    padding: '0px 24px',
    mb: '25px',
    textTransform: 'uppercase',
  };
  return (
    <>
      <Drawer
        //
        // isFullHeight={true}
        // preserveScrollBarGap={false}
        // p="35% 0 30 0"
        zIndex="99"
        onClose={onClose}
        isOpen={isOpen}
        onOpen={onOpen}
        size="xl"
        placement="top"
      >
        <DrawerOverlay />
        <DrawerContent
          w="100%"
          h="100%"
          overflow="auto"
          // opacity="0.95"
          // blockScrollOnMount={true}
          // transition="0.5s ease-in-out"
          transform="translateY(556px)"
        >
          <DrawerHeader bg="#e7e7e7">
            <Box m={{ base: '0 15px 61px', lg: '0 0 61px' }}>
              <Flex
                maxW="1440px"
                alignItems={{ base: 'flex-end', lg: 'center' }}
                justifyContent="space-around"
                flexDirection={{ base: 'column', lg: 'inherit' }}
                bg="#e7e7e7"
                minH="64px"
                m="0 auto"
                p={{ base: '16px 20px', md: '16px 5px' }}
                boxShadow="0px 0px 3px 3px rgb(0 0 0 / 10%)"
              >
                <Box sx={bannerChildStyle}>
                  <Box maxW="250px" mr={{ base: '54px', md: '24px' }}>
                    <Img src={MainbarMenu} width="45px" height="45px" />
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
                        <Img
                          src={FaceBook}
                          width="28px"
                          height="28px"
                          mr={'12px'}
                        />
                        <Img src={Instagram} width="28px" height="28px" />
                      </Flex>
                      <Box
                        display={{ base: 'block', md: 'none' }}
                        onClick={() => {
                          onClose();
                        }}
                      >
                        <Img src={CloseLogo} w="34px" h="36px" />
                      </Box>
                    </Flex>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </DrawerHeader>
          <DrawerBody
            display="flex"
            alignItems="center"
            flexDirection="column"
            bg="#e7e7e7"
          >
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default NavModal;
