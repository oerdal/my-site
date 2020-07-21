import React from 'react';
import NavBarElement from './NavBarElement';

const NavBar = ({ navIsLarge }) => {
  console.log(navIsLarge);
  if (navIsLarge) {
    return (
      <div id='_navbar_large' className='_navbar fixed-top py-3 '>
        <div className='d-flex w-50 mx-auto justify-content-between'>
          <NavBarElement text='ABOUT' />
          <NavBarElement text='PROJECTS' />
          <NavBarElement text='CONTACT' />
          {/* <NavBarElement text='RESUME' /> */}
        </div>
      </div>
    );
  } else {
    return (
      <div id='_navbar_small' className='_navbar fixed-top py-2'>
        <div className='d-flex w-50 mx-auto justify-content-between'>
          <NavBarElement text='ABOUT' />
          <NavBarElement text='PROJECTS' />
          <NavBarElement text='CONTACT' />
          {/* <NavBarElement text='RESUME' /> */}
        </div>
      </div>
    );
  }
}

export default NavBar;