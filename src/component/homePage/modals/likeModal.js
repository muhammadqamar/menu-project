import React, { useState } from 'react';

import { Box, Button, Flex, Image, Img, Text } from '@chakra-ui/react';

import Close from '../../assets/images/close.png';
import Cup from '../../assets/images/cup.webp';
import Heart from '../../assets/images/heart.png';
import Like from '../../assets/images/like.png';
import DisLike from '../../assets/images/dislike.png';
import Reminder from '../../assets/images/reminder.png';
import Logo from '../../assets/images/logo.png';

const LikeModal = () => {
  const [openLike, setOpenLike] = useState(false);

  const LikeNumber = {
    color: '#656565',
    width: '48px',
    fontSize: '0.8em',
    textAlign: 'center',
    mt: '2px',
  };

  const LikeButton = {
    backgroundColor: '#fff',
    w: '48px',
    h: '48px',
    borderRadius: '0',
  };

  const LikeButtonTwo = {
    backgroundColor: '#fff',
    w: '48px',
    h: '48px',
    borderRadius: '24px',
    boxShadow: '0 0 3px rgb(0 0 0 / 25%)',
  };

  return (
    <Box>
      {/* left image  box*/}
      <Box
        float="left"
        w="68%"
        p="48px 32px "
        borderRight=" 1px "
        borderRightColor=" rgba(0, 0, 0, 0.05)"
      >
        <Flex justifyContent="space-between">
          <Button
            color="white"
            padding="4px 8px"
            backgroundColor="rgba(0, 0, 0, 0.8)"
            leftIcon={<Img w="24px" h="24px" src={Close} alt="close" />}
            _hover={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
            }}
          >
            Back To Menu
          </Button>

          <Button
            color="white"
            padding="4px 8px"
            backgroundColor="rgba(0, 0, 0, 0.8)"
            leftIcon={<Img w="24px" h="24px" src={Close} alt="close" />}
          >
            PHOTO
          </Button>
        </Flex>

        <Box w="100%" h="800px">
          <Image
            boxSize="100%"
            objectFit="contain"
            src={Cup}
            alt="Dan Abramov"
          />
        </Box>
      </Box>

      {/* right box*/}

      <Box float="right" w="32%" p="32px ">
        <Flex justifyContent="space-between">
          <Button
            color=" #000000de"
            padding="6px 16px"
            boxShadow=" 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)"
            backgroundColor="#e0e0e0"
            fontSize="12.25px"
            fontWeight="500"
            lineHeight="21.4375px"
          >
            SHARE
          </Button>

          <Box>
            <Box
              minW="48px"
              h="72px"
              ml="16px"
              borderRadius="24px"
              bg="#EFEFEF"
              flexShrink="0"
              onClick={() => setOpenLike(true)}
              display={openLike === true ? 'none' : 'block'}
            >
              <Button sx={LikeButtonTwo}>
                <Img src={Heart} alt="heart" />
              </Button>
              <Text sx={LikeNumber}>87</Text>
            </Box>
            {/* */}
            {openLike && (
              <Box position="absolute" right="16px">
                <Flex flexDir="column" transition=" 100ms ease-in-out">
                  <Box
                    minW="48px"
                    h="48px"
                    ml="16px"
                    bg="#EFEFEF"
                    flexShrink="0"
                    borderTopLeftRadius="24px"
                    borderTopRightRadius="24px"
                    borderBottomRightRadius="24px"
                    boxShadow="0 0 3px rgb(0 0 0 / 25%)"
                  >
                    <Flex borderRadius="24px" bg="#fff" overflow="hidden">
                      <Button sx={LikeButton}>
                        <Img src={Heart} alt="heart" />
                      </Button>

                      <Button sx={LikeButton}>
                        <Img src={Like} alt="heart" />
                      </Button>

                      <Button sx={LikeButton}>
                        <Img src={DisLike} alt="heart" />
                      </Button>

                      <Button sx={LikeButton}>
                        <Img src={Reminder} alt="heart" />
                      </Button>
                      <Button
                        onClick={() => setOpenLike(false)}
                        sx={LikeButton}
                        transition=" 100ms ease-in-out"
                      >
                        <Img src={Close} alt="heart" />
                      </Button>
                    </Flex>
                  </Box>
                  <Flex
                    w="192px"
                    h="20px"
                    bg="#EFEFEF"
                    flexShrink="0"
                    ml="16px"
                    borderBottomLeftRadius="24px"
                    borderBottomRightRadius="24px"
                  >
                    <Text sx={LikeNumber}>87</Text>
                    <Text sx={LikeNumber}>87</Text>
                    <Text sx={LikeNumber}>87</Text>
                    <Text sx={LikeNumber}>87</Text>
                  </Flex>
                </Flex>
              </Box>
            )}
          </Box>
        </Flex>

        <Box>
          <Text
            color="rgba(11, 44, 91, 1)"
            fontSize="1rem"
            textAlign="center"
            fontWeight=" bold"
            mb="32px"
            textTransform=" uppercase"
          >
            BROWN SUGAR DEERIOCA - MENU <br /> KATY
          </Text>

          <Text
            color="#000"
            fontSize="1.5rem"
            textAlign="center"
            fontWeight=" bold"
            mb="32px"
            textTransform="capitalize"
          >
            Brown Sugar Deerioca Milk
          </Text>
          <Text
            color="#000"
            fontSize="1rem"
            textAlign="center"
            fontWeight="normal"
            lineHeight="1.5rem"
            mb="28px"
            textTransform="capitalize"
          >
            Our signature brown sugar boba paired with your choice of milk and
            our house-made sweet sea salt cream.
          </Text>

          <Flex justifyContent="center" gap="8px" mb="48px">
            <Img w="24px" h="24px" src={Logo} />
            <Img w="24px" h="24px" src={Logo} />
            <Img w="24px" h="24px" src={Logo} />
            <Img w="24px" h="24px" src={Logo} />
            <Img w="24px" h="24px" src={Logo} />
          </Flex>

          <Text
            color="rgba(11, 44, 91, 1)"
            fontSize="1rem"
            textAlign="center"
            fontWeight=" bold"
            mb="16px"
            textTransform=" uppercase"
          >
            BROWN SUGAR DEERIOCA - MENU <br /> KATY
          </Text>

          <Text
            color="#000"
            fontSize="1rem"
            textAlign="center"
            fontWeight="normal"
            lineHeight="1.5rem"
            mb="32px"
            textTransform="capitalize"
          >
            Our signature brown sugar boba paired with your choice of milk and
            our house-made sweet sea salt cream.
          </Text>
        </Box>
      </Box>
      {/* footer */}
      <Box position="fixed" width="100%" bottom="0" zIndex="3">
        <Flex
          w="100%"
          borderTop="2px solid rgba(11, 44, 91, 1)"
          textAlign="center"
          paddingTop=" 16px"
          backgroundColor="rgba(211, 212, 211, 1)"
        >
          <Box p="16px" flexGrow=" 0" maxWidth="25%" flexBasis=" 25%">
            <Button padding="8px 11px" fontSize="0.9375rem" bg="transparent">
              Share
            </Button>
          </Box>
          <Box p="16px" flexGrow=" 0" maxWidth="25%" flexBasis=" 25%">
            <Button bg="transparent">Share</Button>
          </Box>
          <Box p="16px" flexGrow=" 0" maxWidth="25%" flexBasis=" 25%">
            <Button bg="transparent">Share</Button>
          </Box>
          <Box p="16px" flexGrow=" 0" maxWidth="25%" flexBasis=" 25%">
            <Button bg="transparent">Share</Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default LikeModal;
