import React from 'react';
import { SliderItem } from '../SliderItem/SliderItem';
import './styles.scss';

export const Slider = () => {
  return (
    <div className='slider'>
      <ul className='slider__list'>
        <SliderItem />
      </ul>
      <ul className='slider__dots'>
        <li className='slider__dot'></li>
        <li className='slider__dot'></li>
        <li className='slider__dot active'></li>
        <li className='slider__dot'></li>
        <li className='slider__dot'></li>
      </ul>
    </div>
  );
};
