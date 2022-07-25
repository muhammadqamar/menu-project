import React, { useState } from 'react';

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Img,
  Input,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';

import Close from '../../assets/images/close.png';
import Cup from '../../assets/images/cup.webp';
import Heart from '../../assets/images/heart.png';
import Like from '../../assets/images/like.png';
import DisLike from '../../assets/images/dislike.png';
import Reminder from '../../assets/images/reminder.png';
import Logo from '../../assets/images/logo.png';

import AvatarImage from '../../assets/images/avatar.PNG';
import LikeImage from '../../assets/images/like.png';

const LikeModal = ({ isOpen, onOpen, onClose, likeOpen }) => {
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

  const footerButton = {
    bg: 'transparent',
    padding: '8px 11px',
    fontSize: '0.9375rem',
    _hover: {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
  };

  return (
    <Drawer onClose={onClose} size="full" isOpen={isOpen} likeOpen={likeOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <Box>
          {/* left image  box*/}
          <Box
            position="fixed"
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
                leftIcon={
                  <span class="MuiButton-startIcon MuiButton-iconSizeLarge">
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      width="1em"
                      height="1em"
                      class="jss3828 jss4631 pop-icon"
                      color="inherit"
                    >
                      <path
                        d="M12.667 8H3.333M8 12.667L3.333 8 8 3.333"
                        stroke="currentColor"
                      ></path>
                    </svg>
                  </span>
                }
                _hover={{
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                }}
                onClick={onClose}
              >
                Back To Menu
              </Button>

              <Button
                color="white"
                padding="4px 8px"
                backgroundColor="rgba(0, 0, 0, 0.8)"
                leftIcon={
                  <span class="MuiButton-startIcon MuiButton-iconSizeLarge">
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      width="1em"
                      height="1em"
                    >
                      <g stroke="currentColor">
                        <path d="M15.333 12.667A1.334 1.334 0 0114 14H2a1.334 1.334 0 01-1.333-1.333V5.333A1.333 1.333 0 012 4h2.667L6 2h4l1.333 2H14a1.333 1.333 0 011.333 1.333v7.334z"></path>
                        <path d="M8 11.333A2.667 2.667 0 108 6a2.667 2.667 0 000 5.333z"></path>
                      </g>
                    </svg>
                  </span>
                }
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
            <Flex justifyContent="space-between" minH="75px">
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
                Our signature brown sugar boba paired with your choice of milk
                and our house-made sweet sea salt cream.
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
                Our signature brown sugar boba paired with your choice of milk
                and our house-made sweet sea salt cream.
              </Text>

              {/* */}

              <Box marginTop={'16px'}>
                <Tabs>
                  <TabList>
                    <Tab width={'100%'} textTransform="uppercase">
                      Reviews (12)
                    </Tab>
                    <Tab width={'100%'} textTransform="uppercase">
                      Book A Table
                    </Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <Box>
                        <FormControl>
                          <FormLabel>Which location did you visit?</FormLabel>
                          <Select placeholder="Select country">
                            <option>Ala Moana Center</option>
                            <option>Fountain Valley</option>
                            <option>Ala Moana Center</option>
                            <option>Irvine Spectrum</option>
                            <option>Katy</option>
                            <option>Palazzo</option>
                          </Select>
                        </FormControl>
                      </Box>
                      <Box>
                        <FormControl isRequired>
                          <FormLabel>First name</FormLabel>
                          <Input placeholder="First name" />
                        </FormControl>
                      </Box>
                      <Box mt="24px">
                        <Button
                          width="100%"
                          backgroundColor="rgba(11, 44, 91, 1)"
                          color="#fff"
                          borderRadius={'20px'}
                        >
                          Submit
                        </Button>
                      </Box>
                      <Box>
                        <Flex
                          marginTop="24px"
                          alignItems="flex-start"
                          justifyContent="space-between"
                        >
                          <Flex>
                            <Box>
                              <Img
                                src={AvatarImage}
                                width="36px"
                                height="36px"
                                borderRadius={'50%'}
                              />
                            </Box>
                            <Flex flexDirection="column" ml={'24px'}>
                              <Text
                                color="#78706D"
                                fontSize="0.8em"
                                marginBottom="8px"
                              >
                                April
                              </Text>
                              <Text
                                fontSize="0.8em"
                                fontWeight="400"
                                lineHeight=" 1.5"
                                marginBottom="8px"
                              >
                                It was delicious! I always get a peach tea
                                everywhere I go, and this one does not
                                disappoint. Their boba was chewy and good also.
                                I like my drink not too sweet with more tea
                                flavor and not the fake syrup taste, and this
                                one hits the spot. It was delicious! I always
                                get a peach tea everywhere I go, and this one
                                does not disappoint. Their boba was chewy and
                                good also. I like my drink not too sweet with
                                more tea flavor and not the fake syrup taste,
                                and this one hits the spot. It was delicious! I
                                always get a peach tea everywhere I go, and this
                                one does not disappoint. Their boba was chewy
                                and good delicious! I always get a peach tea
                                everywhere I go,
                              </Text>
                              <Img src={LikeImage} width="24px" height="24px" />
                            </Flex>
                          </Flex>
                          <Box>
                            <Text color="#78706D" fontSize="0.8em">
                              about 1 year ago
                            </Text>
                          </Box>
                        </Flex>
                      </Box>
                    </TabPanel>
                    {/* Second Tab */}
                    <TabPanel>
                      <Box textAlign="center">
                        <Text
                          fontWeight="bold"
                          color="rgba(11, 44, 91, 1)"
                          fontSize="1em"
                          text-align="center"
                          marginBottom="12px"
                          text-transform="uppercase"
                        >
                          READY TO JOIN US? GREAT!
                        </Text>
                        <Text fontSize="1em">
                          Call us to make a reservation now.
                        </Text>
                        <Text
                          fontWeight="bold"
                          color="rgba(11, 44, 91, 1)"
                          fontSize="1em"
                          text-align="center"
                          text-transform="uppercase"
                          marginTop="12px"
                        >
                          (832) 437-2421
                        </Text>
                      </Box>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
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
                <Button
                  sx={footerButton}
                  leftIcon={
                    <span class="MuiButton-label jss3709 jss4635">
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        width="1em"
                        height="1em"
                        class="jss3828 jss4636 pop-icon"
                        color="inherit"
                      >
                        <path
                          d="M12.667 8H3.333M8 12.667L3.333 8 8 3.333"
                          stroke="currentColor"
                        ></path>
                      </svg>
                    </span>
                  }
                >
                  Jasmine Green Milk Tea
                </Button>
              </Box>
              <Box p="16px" flexGrow=" 0" maxWidth="25%" flexBasis=" 25%">
                <Button
                  sx={footerButton}
                  leftIcon={
                    <span class="MuiButton-label jss3709 jss4637">
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        width="1em"
                        height="1em"
                        class="jss3828 jss4638 pop-icon"
                        color="inherit"
                      >
                        <path
                          d="M12.667 2.667H3.333C2.597 2.667 2 3.263 2 4v9.333c0 .737.597 1.333 1.333 1.333h9.334c.736 0 1.333-.596 1.333-1.333V4c0-.737-.597-1.333-1.333-1.333zm-2-1.334V4M5.333 1.333V4M2 6.667h12"
                          stroke="currentColor"
                        ></path>
                      </svg>
                    </span>
                  }
                >
                  Remind Me To Try This
                </Button>
              </Box>
              <Box p="16px" flexGrow=" 0" maxWidth="25%" flexBasis=" 25%">
                <Button
                  sx={footerButton}
                  leftIcon={
                    <span class="MuiButton-label jss3709 jss4639">
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        width="1em"
                        height="1em"
                        class="jss3828 jss4640 pop-icon"
                        color="inherit"
                      >
                        <path
                          d="M14.667 1.333L7.333 8.668m7.334-7.335L10 14.668l-2.667-6-6-2.667 13.334-4.667z"
                          stroke="currentColor"
                        ></path>
                      </svg>{' '}
                    </span>
                  }
                >
                  Share this item
                </Button>
              </Box>
              <Box p="16px" flexGrow=" 0" maxWidth="25%" flexBasis=" 25%">
                <Button
                  sx={footerButton}
                  rightIcon={
                    <span class="MuiButton-label jss3709 jss4641">
                      {' '}
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        width="1em"
                        height="1em"
                        class="jss3828 jss4642 pop-icon"
                        color="inherit"
                      >
                        <path
                          d="M3.333 8h9.334M8 3.333L12.667 8 8 12.667"
                          stroke="currentColor"
                        ></path>
                      </svg>
                    </span>
                  }
                >
                  Pear Oolong Tea
                </Button>
              </Box>
            </Flex>
          </Box>
        </Box>
      </DrawerContent>
    </Drawer>
  );
};

export default LikeModal;
