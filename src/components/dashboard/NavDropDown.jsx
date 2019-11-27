import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { logout  } from '../../actions';

const DropDown = styled.div`
  position: absolute;
  right: 7px;
  top: 2.1rem;
  height: 10rem;
  width: 10rem;
  display: flex;
  background: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #C3CFD9;
  
  p:hover {
    cursor: pointer;
  }
`

const DropDownSegment = styled.div`
  border-top: 1px solid #C3CFD9;
  height: .25px;
  width: 10rem;
`

const NavDropDown = props => {

  const dispatch = props.dispatch;

  const leave = () => {
    dispatch( logout( props.history ) );
  }
  
  return (
    <DropDown>
      <p onClick={ leave }>Logout</p>
      <DropDownSegment />
      <p>Browse Images</p>
      <DropDownSegment />
      <p onClick={ () => localStorage.removeItem( 'persist:root' ) }>Delete Local Storage</p>
    </DropDown>
  )
}

export default connect()( NavDropDown );