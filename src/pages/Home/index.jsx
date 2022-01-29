import React from 'react';
import {use} from 'react';
import { BACKGROUND_COLOR, PADDING_FOOTER } from '../../commons/constants';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import Copyright from '../../components/Copyright';
import { Container } from '../../components/styles';
import useWindowDimensions from '../../commons/useWindowDimensions';

const Home = () => {
  const {width, height} = useWindowDimensions();
  return (
    <>
      <Container backgroundColor={BACKGROUND_COLOR}>
        <Navigation />
      </Container>
      <Container height='327' paddingVertical='32' paddingHorizontal={(width >= 1440 && width <= 1920) ? (width - 1440)/2 + PADDING_FOOTER + 'px' : false}>
        <Footer />
      </Container>
      <Container backgroundColor={BACKGROUND_COLOR} height='33' paddingVertical='3' paddingHorizontal={(width >= 1440 && width <= 1920) ? (width - 1440)/2 + PADDING_FOOTER + 'px' : false}>
        <Copyright />
      </Container>
    </>
  );
};

export default Home;
