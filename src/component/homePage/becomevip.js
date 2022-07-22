import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const Becomevip = () => {
  return (
    <Box w="100%" mb="61px">
      <Flex
        maxW="1440px"
        alignItems={{ base: 'flex-end', lg: 'center' }}
        justifyContent="space-around"
        flexDirection={{ base: 'column', lg: 'inherit' }}
        background="rgba(11, 44, 91, 1)"
        minH="64px"
        m="0 auto"
        color="#fff"
        p="16px 32px"
      >
        <Flex flexDirection={{ base: 'column', lg: 'inherit' }}>
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
        </Button>
      </Flex>
    </Box>
  );
};

export default Becomevip;
