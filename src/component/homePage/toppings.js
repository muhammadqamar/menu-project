import React from 'react';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';

const links = {
  w: '446px',
  color: 'rgba(15, 15, 15, 1)',
  p: '16px',
  flexDirection: 'column',
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
const Toppings = ({onOpen}) => {
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
        <Flex justifyContent="space-between" gap="15px">
          <Flex sx={links}>
            <Button sx={linkbtn} onClick={()=>{onOpen()}}>boba</Button>
            <Button sx={linkbtn} onClick={()=>{onOpen()}}>aloe vera</Button>
          </Flex>
          <Flex sx={links}>
            <Button sx={linkbtn} onClick={()=>{onOpen()}}>coconut jelly</Button>
            <Button sx={linkbtn} onClick={()=>{onOpen()}}>crystal deerioca</Button>
          </Flex>
          <Flex sx={links}>
            <Button sx={linkbtn} onClick={()=>{onOpen()}}>konjac jelly</Button>
            <Button sx={linkbtn} onClick={()=>{onOpen()}}>brûlée</Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Toppings;
