import React from 'react';
import SlideInfo from '../components/slideInfo/SlideInfo';
import CardInfo from '../components/cardInfo/CardInfo';
import Banner from '../components/banner/Banner';

const Home = () => {
  return (
    <div>
        <Banner/>
        <CardInfo/>
      <SlideInfo/>
    </div>
  );
};

export default Home;
