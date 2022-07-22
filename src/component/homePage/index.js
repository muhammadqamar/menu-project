import React from 'react';
import { Box, Text, Link } from '@chakra-ui/react';
import Becomevip from './becomevip';
import Toppings from './toppings';
import Options from './options';

function Index() {
  return (
    <Box>
      <Text color="#000">Menu Project</Text>
      <Link
        color="teal.500"
        href="https://chakra-ui.com"
        fontSize="2xl"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Chakra
      </Link>
      <Becomevip />
      <Toppings />
      <Options />
    </Box>
  );
}

export default Index;
