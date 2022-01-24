import React from 'react';
import { BACKGROUND_COLOR } from '../../commons/constants';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import { Container } from '../../components/styles';

const Home = () => {
  return (
    <>
      <Container backgroundColor={BACKGROUND_COLOR}>
        <Navigation />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
