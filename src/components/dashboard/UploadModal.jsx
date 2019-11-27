import React, { useState } from 'react';
import styled from 'styled-components';
import { connect  } from 'react-redux';
import { dsSubmit } from '../../actions';


const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba( 33,33,33, 0.9 );
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const ModalDiv = styled.div`
  position: relative;
  background: white;
  z-index: 1;
  height: 5rem;
  width: 20rem;
  overflow: hidden;

  form {
    margin: 4px;
    display: flex;
    flex-direction: column;
    
    input {
      margin-top: 1.5rem;
      margin-bottom: 0.4rem;
    }
  }
`

const CloseButton = styled.div`
  position: absolute;
  right: 0.4rem;
  top: -0.3rem;
  color: #611510;
  font-size: 2rem;
  font-family: none;
  cursor: pointer;
`

const UploadModal = props => {
  const [ photo, setPhoto ] = useState();
  const dispatch = props.dispatch;

  const fileSelectHandler = e => {
    e.preventDefault();
    setPhoto(e.target.files[0]);
  };

  const onSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append( 'file', photo, 'file' );
    dispatch( dsSubmit( formData, props.history ) );
    props.togglePopup();
  };

  return (
    <Background>
      <ModalDiv>
        <CloseButton onClick={ props.togglePopup }>x</CloseButton>
        <form onSubmit={onSubmit}>
          <input  type="file" onChange={fileSelectHandler} />
          <button type="submit">Submit</button>
        </form>
      </ModalDiv>
    </Background>
  );
}

export default connect()( UploadModal ); 
