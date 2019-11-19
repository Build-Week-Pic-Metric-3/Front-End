import React, {useState} from 'react';
import styled from 'styled-components';

const NavDiv = styled.div`
height: 2.5rem;
width: 100%;
background: lightgray;
margin-top: 0;
`


const NavBar = props => {

  return (
    <NavDiv>
      <p>Navbar</p>
    </NavDiv>
  );
};

export default NavBar;