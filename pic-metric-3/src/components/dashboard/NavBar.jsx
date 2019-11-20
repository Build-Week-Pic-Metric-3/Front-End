import React, {useState} from 'react';
import styled from 'styled-components';
import logo from '../../../src/img/logo.png';

const NavDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 2.5rem;
width: 100%;
padding: 0 10px;
background: lightgray;
margin-top: 0;
`

const LogoCont = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 8rem;
`

const Logo = styled.img`
  height: 2rem;
`


const NavBar = props => {

  return (
    <NavDiv>
      <LogoCont>
        <Logo src={logo} alt="Pic Metric Logo"/>
        <p>Pic Metric 3</p>
      </LogoCont>
      <i className="fas fa-chevron-circle-down"></i>
    </NavDiv>
  );
};

export default NavBar;