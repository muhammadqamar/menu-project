import React, { useState } from 'react';

import {
  Box,
  Button,
  Flex,
  Image,
  Img,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import LinkModel from './modals/likeModal';
// images

import Cup from '../assets/images/cup.webp';
import Logo from '../assets/images/logo.png';
import Pic from '../assets/images/picture.png';
import Chat from '../assets/images/chat.png';
import Heart from '../assets/images/heart.png';
import Like from '../assets/images/like.png';
import DisLike from '../assets/images/dislike.png';
import Reminder from '../assets/images/reminder.png';
import Close from '../assets/images/close.png';

const Menus = () => {
  const [openLike, setOpenLike] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // style
  const TopHeading = {
    fontFamily: 'Crimson Pro',
    fontSize: '38px',
    fontWeight: 'normal',
    lineHeight: '41.8px',
    letterSpacing: '1px',
    textTransform: 'capitalize',
    textAlign: 'center',
    color: '#000',
    mb: '27px',
  };

  const LabelText = {
    fontStyle: 'italic',
    fontSize: '16px',
    fontWeight: 'normal',
    lineHeight: '23px',
    letterSpacing: '1px',
    textTransform: 'capitalize',
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 1)',
    mb: '30px',
  };

  const Card = {
    w: { base: '100%', md: '638px' },
    p: '16px',
    mb: '32px',
    flexDirection: { base: 'column', md: 'inherit' },
    borderBottom: ' 4px solid #cccccc45',
    borderRadius: '10px',
    bg: ' rgba(0, 0, 0, 0.01)',
    cursor: 'pointer',
    _hover: {
      borderBottomColor: ' #D5C8A0',
      background: 'rgba(0, 0, 0, 0.03)',
      transition: '250ms',
    },
  };

  const CardHeading = {
    fontSize: '19px',
    fontWeight: 'normal',
    lineHeight: '24px',
    letterSpacing: '0.5px',
    textTransform: 'lowercase',
    textAlign: 'left',
    color: 'rgba(0, 0, 0, 1)',
    mb: '6px',
  };

  const CardDesc = {
    fontStyle: 'italic',
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: '21px',
    letterSpacing: '0.5px',
    textAlign: 'left',
    color: 'rgba(32, 32, 32, 1)',
    mb: '16px',
  };

  const MaxNumber = {
    minW: '30px',
    h: '30.97px',
    p: '4px',
    borderRadius: '4px',
    alignItems: 'center',
    gap: '8px',

    _hover: {
      background: ' rgba(0, 0, 0, 0.04)',
    },
  };

  const CliNumber = {
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '22px',
    letterSpacing: '0.5px',
    textAlign: 'left',
    color: 'rgb(32, 32, 32)',
  };

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
    <>
      <Box maxW="1440px" m="0 auto" p={{ base: '0 15px', md: '0 66px' }}>
        <Box mb="107px">
          <Text sx={TopHeading}>Brown Sugar Deerioca</Text>
          <Text sx={LabelText}>(No Tea)</Text>

          <Flex
            gap="32px"
            flexWrap={{ base: 'wrap', xl: 'nowrap' }}
            justifyContent={{ base: 'center', xl: 'space-between' }}
          >
            {/*card  1  */}
            <Flex sx={Card} position="relative">
              <Box
                w={{ base: '100%', md: '160px' }}
                h={{ base: 'auto', md: '128px' }}
                bg="white"
                flexShrink="0"
              >
                <Image
                  boxSize="100%"
                  objectFit="cover"
                  src={Cup}
                  alt="Dan Abramov"
                />
              </Box>

              <Flex flexDir="column" justifyContent="space-between" ml="29px">
                <Flex justifyContent={{ base: 'space-between', md: 'inherit' }}>
                  <Box maxW="350px">
                    <Text sx={CardHeading}>Brown Sugar Deerioca Milk</Text>
                    <Text sx={CardDesc}>
                      Our #1 Drink! Our Signature Brown Sugar Deerioca Milk
                      featuring our carefully crafted in house
                    </Text>
                  </Box>

                  {/* */}

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
                </Flex>
                <Flex gap="16px" alignItems="center">
                  <Img w="24px" h="24px" src={Logo} />
                  <Img w="24px" h="24px" src={Logo} />
                  <Img w="24px" h="24px" src={Logo} />

                  <Flex
                    sx={MaxNumber}
                    onClick={() => {
                      onOpen();
                    }}
                  >
                    <Img w="20px" h="20px" src={Pic} />
                    <Text sx={CliNumber}>565</Text>
                  </Flex>
                  <Flex
                    sx={MaxNumber}
                    onClick={() => {
                      onOpen();
                    }}
                  >
                    <Img w="20px" h="20px" src={Chat} />
                    <Text sx={CliNumber}>565 Reviews</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            {/*card  2 */}
            <Flex sx={Card} position="relative">
              <Box
                w={{ base: '100%', md: '160px' }}
                h={{ base: 'auto', md: '128px' }}
                bg="white"
                flexShrink="0"
              >
                <Image
                  boxSize="100%"
                  objectFit="cover"
                  src={Cup}
                  alt="Dan Abramov"
                />
              </Box>

              <Flex flexDir="column" justifyContent="space-between" ml="29px">
                <Flex justifyContent={{ base: 'space-between', md: 'inherit' }}>
                  <Box maxW="350px">
                    <Text sx={CardHeading}>Brown Sugar Deerioca Milk</Text>
                    <Text sx={CardDesc}>
                      Our #1 Drink! Our Signature Brown Sugar Deerioca Milk
                      featuring our carefully crafted in house
                    </Text>
                  </Box>

                  {/* */}

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
                </Flex>
                <Flex gap="16px" alignItems="center">
                  <Img w="24px" h="24px" src={Logo} />
                  <Img w="24px" h="24px" src={Logo} />
                  <Img w="24px" h="24px" src={Logo} />

                  <Flex
                    sx={MaxNumber}
                    onClick={() => {
                      onOpen();
                    }}
                  >
                    <Img w="20px" h="20px" src={Pic} />
                    <Text sx={CliNumber}>565</Text>
                  </Flex>
                  <Flex
                    sx={MaxNumber}
                    onClick={() => {
                      onOpen();
                    }}
                  >
                    <Img w="20px" h="20px" src={Chat} />
                    <Text sx={CliNumber}>565 Reviews</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>

      {/* modal*/}
      <LinkModel isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
};

export default Menus;
