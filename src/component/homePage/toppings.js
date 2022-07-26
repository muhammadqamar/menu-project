import React from 'react';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';

const links = {
  w: { base: '100%', md: '446px' },
  color: 'rgba(15, 15, 15, 1)',
  p: '16px',
  flexDirection: { base: 'row', md: 'column' },
  flexwrap: { base: 'wrap', md: 'nowrap' },
  justifyContent: { base: 'center', md: 'inherit' },
};
const linkbtn = {
  background: 'transparent',
  p: '12px',
  mb: '25px',
  justifyContent: 'flexSart',
  fontSize: '22px',
  lineHeight: '61.45px',
  fontWeight: '300',
  _hover: {
    background: 'transparent',
  },
  _active: {
    background: 'transparent',
  },
};
const Toppings = ({ onOpen, setisMenuOpen }) => {
  return (
    <Box w="100%" minH="322px" p="30px">
      <Box maxW="1440px" m="0 auto">
        <Heading
          fontSize="38px"
          lineHeight="32px"
          fontWeight="normal"
          letterSpacing="1px"
          color="rgb(0, 0, 0)"
          textAlign="center"
          fontFamily="Crimson Pro"
          mb="30px"
        >
          Toppings
        </Heading>
        <Flex
          justifyContent="space-between"
          flexDirection={{ base: 'column', md: 'inherit' }}
          gap="15px"
        >
          <Flex sx={links}>
            <Button
              sx={linkbtn}
              onClick={() => {
                setisMenuOpen(false);
                onOpen();
              }}
            >
              boba
            </Button>
            <Button
              sx={linkbtn}
              onClick={() => {
                setisMenuOpen(false);
                onOpen();
              }}
            >
              aloe vera
            </Button>
          </Flex>
          <Flex sx={links}>
            <Button
              sx={linkbtn}
              onClick={() => {
                setisMenuOpen(false);
                onOpen();
              }}
            >
              coconut jelly
            </Button>
            <Button
              sx={linkbtn}
              onClick={() => {
                setisMenuOpen(false);
                onOpen();
              }}
            >
              crystal deerioca
            </Button>
          </Flex>
          <Flex sx={links}>
            <Button
              sx={linkbtn}
              onClick={() => {
                setisMenuOpen(false);
                onOpen();
              }}
            >
              konjac jelly
            </Button>
            <Button
              sx={linkbtn}
              onClick={() => {
                setisMenuOpen(false);
                onOpen();
              }}
            >
              brûlée
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Toppings;
