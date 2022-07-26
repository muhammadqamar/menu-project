import React from 'react';
import { Box, Flex, useDisclosure, Img } from '@chakra-ui/react';
import Becomevip from './becomevip';
import Toppings from './toppings';
import Options from './options';
// section
import Menus from './menus';

// images
import heroBgImage from '../assets/images/bg.png';
import ToppingModel from './modals/ToppingModel';
import LogoImage from '../assets/images/top-logo_w.png';
import Cafe_1 from '../assets/images/cafe (1).jpg';
import Cafe_2 from '../assets/images/cafe (2).jpg';
import Cafe_3 from '../assets/images/cafe (3).jpg';

import Slider from 'react-slick';

function Index() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <>
      <Box
        w="100%"
        h="710px"
        position={'relative'}
        __css={{
          // backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.8) 9.89%, rgba(0, 0, 0, 0.8) 100%), url(${heroBgImage})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Slider {...settings}>
          <Box width={'100%'} height="710px">
            <Img width={'100%'} h="710px" objectFit={'cover'} src={Cafe_1} />
          </Box>
          <Box>
            <Img width={'100%'} h="710px" objectFit={'cover'} src={Cafe_2} />
          </Box>

          <Box>
            <Img width={'100%'} h="710px" objectFit={'cover'} src={Cafe_3} />
          </Box>
        </Slider>

        <Flex
          // maxW="1440px"
          h="100%"
          width={"100%"}
          m="0 auto"
          justifyContent="center"
          alignItems="center"
          position={"absolute"}
          top="0px"
          left={"0px"}
          zIndex="99999"
                    backgroundImage= "linear-gradient(180deg, rgba(0, 0, 0, 0.8) 9.89%, rgba(0, 0, 0, 0.8) 100%)"

          

        >
          <Img src={LogoImage} />
        </Flex>
      </Box>
      <Becomevip />

      <Menus />

      <Toppings onOpen={onOpen} />
      <Options />

      {/* Topping Model Section */}
      <ToppingModel isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
}

export default Index;
