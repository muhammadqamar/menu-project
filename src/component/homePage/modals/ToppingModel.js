import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Flex,
  Text,
  Img,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  FormControl,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';

import React from 'react';
import Heart from '../../assets/images/heart.png';
import ArrowImage from '../../assets/images/icons8-left-arrow-48.png';
import AvatarImage from '../../assets/images/avatar.PNG';
import LikeImage from '../../assets/images/like.png';

const LikeNumber = {
  color: '#656565',
  width: '48px',
  fontSize: '0.8em',
  textAlign: 'center',
  mt: '2px',
};
const ToppingModel = ({ isOpen, onOpen, onClose }) => {
  // const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Flex
              maxW="600px"
              h="100%"
              m="0 auto"
              justifyContent="space-between"
              alignItems="center"
            >
              <Flex cursor="pointer" onClick={onClose}>
                <Img src={ArrowImage} width="18px" mr="8px" />
                <Text
                  fontSize="sm"
                  fontWeight="500"
                  lineHeight="1.75"
                  color="rgba(11, 44, 91, 1)"
                >
                  Back To
                </Text>
              </Flex>

              {/* Form */}
            </Flex>
            <Box maxW="600px" h="100%" m="0 auto">
              <Box textAlign="center">
                <Text
                  fontWeight="bold"
                  color="rgba(11, 44, 91, 1)"
                  fontSize="1em"
                  text-align="center"
                  marginBottom="32px"
                  textTransform="uppercase"
                >
                  TOPPINGS - MENU <br />
                  KATY{' '}
                </Text>
                <Text
                  fontSize="1.5em"
                  fontWeight="bold"
                  marginTop="24px"
                  marginBottom="32px"
                >
                  Boba
                </Text>
                <Text
                  fontWeight="bold"
                  color="rgba(11, 44, 91, 1)"
                  fontSize="1em"
                  text-align="center"
                  textTransform="uppercase"
                >
                  HAVE YOU TRIED THIS ITEM?
                </Text>
                <Text fontSize="1em" marginTop="16px">
                  Add your review below to help others know what to expect.
                </Text>
              </Box>

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
                                text
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
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ToppingModel;
