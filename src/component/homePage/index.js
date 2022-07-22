import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

// section
import Menus from './menus';

// images
import heroBgImage from '../assets/images/bg.png';

function Index() {
  return (
    <>
      <Box
        w="100%"
        h="710px"
        __css={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.8) 9.89%, rgba(0, 0, 0, 0.8) 100%), url(${heroBgImage})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Flex
          maxW="1440px"
          h="100%"
          m="0 auto"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            fontFamily="Crimson Pro"
            fontSize="58px"
            fontWeight="normal"
            lineHeight="63.8px"
            letterSpacing="8.7px"
            textTransform="uppercase"
            color="white"
          >
            Menu
          </Text>
        </Flex>
      </Box>

      {/* section*/}

      <Menus />
    </>
  );
}

export default Index;
