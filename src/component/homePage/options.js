import React from 'react';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import optionIcon from '../assets/images/option-btn1.png';
import optionIcon2 from '../assets/images/option-btn2.webp';
import optionIcon3 from '../assets/images/option-btn3.png';
import optionIcon4 from '../assets/images/option-btn4.png';
import optionIcon5 from '../assets/images/option-btn5.png';

const optioncontent = {
  fontSize: '17px',
  fontWeight: '300',
  m: '0 auto',
  textAlign: 'center',
  fontStyle: 'italic',
  lineHeight: '22.85px',
};
const optionFlex = {
  minW: '600px',
  justifyContent: 'space-between',
  mb: '45px',
};

const itembtn = {
  fontSize: '19px',
  fontWeight: '700',
  p: '0',
  lineHeight: '20px',
  alignItems: 'center',
  background: 'transparent',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  m: '10 auto',
  _hover: {
    background: 'transparent',
  },
  _active: {
    background: 'transparent',
  },
};
const Options = () => {
  return (
    <>
      <Box w="100%" p="30px">
        <Box maxW="1440px" m="0 auto">
          <Heading
            color="rgb(0, 0, 0)"
            fontSize="38px"
            lineHeight="41.8px"
            mb="22px"
            fontFamily="Crimson Pro"
            fontWeight="normal"
            textAlign="center"
            letterSpacing="1px"
          >
            Options
          </Heading>
          <Box sx={optioncontent}>
            <Text mb="25px">
              Sweetness: Regular | Less | Slight | No &nbsp;Sugar
            </Text>
            <Text>Amount of Ice: Regular | Light|&nbsp;Ice-Free</Text>
          </Box>
          <Flex
            gap="135px"
            justifyContent="center"
            m="110px auto"
            flexWrap="wrap"
          >
            <Flex flexDirection="column" alignItems="center" minW="620px">
              <Flex sx={optionFlex}>
                <Button sx={itembtn}>Show all items</Button>
                <Button sx={itembtn}>
                  <img
                    style={{
                      width: '22px',
                      height: '22px',
                      marginRight: '8px',
                    }}
                    src={optionIcon}
                    alt="item icon"
                  />
                  fixed amount of ice
                </Button>
              </Flex>
              <Box mr="35px">
                <Button sx={itembtn}>
                  <img
                    style={{
                      width: '22px',
                      height: '22px',
                      marginRight: '8px',
                    }}
                    src={optionIcon4}
                    alt="item icon"
                  />
                  Recommended
                </Button>
              </Box>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <Flex sx={optionFlex}>
                <Button sx={itembtn}>
                  <img
                    style={{
                      width: '22px',
                      height: '22px',
                      marginRight: '8px',
                    }}
                    src={optionIcon2}
                    alt="item icon"
                  />
                  Fixed Sweetness
                </Button>
                <Button sx={itembtn}>
                  <img
                    style={{
                      width: '22px',
                      height: '22px',
                      marginRight: '8px',
                    }}
                    src={optionIcon3}
                    alt="item icon"
                  />
                  Hot Drink - Add 50¢ - 1 Size
                </Button>
              </Flex>
              <Box mr="35px">
                <Button sx={itembtn}>
                  <img
                    style={{
                      width: '22px',
                      height: '22px',
                      marginRight: '8px',
                    }}
                    src={optionIcon5}
                    alt="item icon"
                  />
                  served cold
                </Button>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Options;
