import React from 'react';
import { Box, Text, Link } from '@chakra-ui/react';
import Main from './main';

function Index() {
  return (
    <Box>
      <Text>Menu Project</Text>
      <Link
        color="teal.500"
        href="https://chakra-ui.com"
        fontSize="2xl"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Chakra
      </Link>
      <Main />
    </Box>
  );
}

export default Index;
