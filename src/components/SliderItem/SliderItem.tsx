import React from 'react';
import './styles.scss';

export const SliderItem = () => {
  return (
    <div className='slider__item'>
      <div className='slider__item-content'>
        <h2 className='slider__title'>The Power of Simplicity</h2>
        <p className='slider__subtitle'>
          Instead of spending time searching for the right app, our AI will
          bring the right app to you.
        </p>
        <button className='slider__btn'>Learn</button>
      </div>
    </div>
  );
};
