import React from 'react';
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg'
import './styles.scss'

export const Header = () => {
  return (
    <div className='header'>
      <a href='https://www.apple.com/' className='header__logo'><LogoIcon /></a>
      <nav className='header__nav'>
        <a href='https://www.apple.com/environment/' className='header__nav-link'>Features</a>
        <a href='https://investor.apple.com/investor-relations/default.aspx' className='header__nav-link'>Partners</a>
        <a href='https://www.apple.com/diversity/' className='header__nav-link'>Stories</a>
      </nav>
      <button className='header__button'>Download for free</button>
    </div>
  );
};
