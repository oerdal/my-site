import React from 'react';

const NavBarElement = ({ text }) => {
  let h = '#' + text.toLowerCase() + '-tag';
  return (
    <a href={h} className=''>{text}</a>
  );
}

export default NavBarElement;