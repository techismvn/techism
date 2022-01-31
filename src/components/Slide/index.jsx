import React from 'react';
import { Carousel } from 'antd';
import data from '../Slide/data';

const Slide = () => {
  return (
    <Carousel autoplay>
      {data.map((item) => (
        <div key={item.id}>
          <img
            src={`${item.slide}`}
            alt=""
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Slide;
