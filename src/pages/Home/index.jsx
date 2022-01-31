import React from 'react';
import * as constants from '../../commons/constants';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import Copyright from '../../components/Copyright';
import CustomerComment from '../../components/CustomerComment';
import SampleProduct from '../../components/SampleProduct';
import { Container } from '../../components/styles';
import useWindowDimensions from '../../commons/useWindowDimensions';
import CommentBg from '../../assets/images/comment_bg.svg';

const Home = () => {
  const {width, height} = useWindowDimensions();
  const paddingByWidth = width >= 1440 ? (width - 1440)/2 : 0;
  return (
    <>
      <Container backgroundColor={constants.BACKGROUND_COLOR}>
        <Navigation />
      </Container>
      <Container paddingVertical='75' paddingHorizontal={paddingByWidth + constants.PADDING_SAMPLE_PRODUCT + 'px'}>
        <SampleProduct />
      </Container>
      <Container backgroundImage={CommentBg} height='580' paddingVertical='102' paddingHorizontal={paddingByWidth + constants.PADDING_CUS_COMMENT+ 'px'}>
        <CustomerComment />
      </Container>
      <Container paddingVertical='32' paddingHorizontal={paddingByWidth + constants.PADDING_FOOTER + 'px'}>
        <Footer />
      </Container>
      <Container backgroundColor={constants.BACKGROUND_COLOR} height='33' paddingVertical='3' paddingHorizontal={paddingByWidth + constants.PADDING_FOOTER+ 'px'}>
        <Copyright />
      </Container>
    </>
  );
};

export default Home;
