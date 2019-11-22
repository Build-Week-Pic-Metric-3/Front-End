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
`

const ModalDiv = styled.div`
  position: absolute;
  background: white;
  z-index: 100;
  height: 15rem;
  width: 15rem;
  top: calc(50% - 7.5rem);
  right: calc(50% - 7.5rem);
`

const CloseButton = styled.div`
  position: absolute;
  right: 5%;
  top: 5%;
  font-size: 40px;
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
        <CloseButton onClick={ props.togglePopup }>X</CloseButton>
        <form onSubmit={onSubmit}>
          <input  type="file" onChange={fileSelectHandler} />
          <button type="submit">Submit</button>
        </form>
      </ModalDiv>
    </Background>
  );
}

const mapDispatchToProps = {
  dsSubmit
};

export default connect( state => state )( UploadModal ); 
