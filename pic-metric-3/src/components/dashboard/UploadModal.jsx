import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { dsSubmit } from '../../actions';

const ModalDiv = styled.div`
  position: absolute;
  background: white;
  z-index: 100;
  height: 15rem;
  width: 15rem;
  top: calc(50% - 7.5rem);
  right: calc(50% - 7.5rem);
`

const UploadModal = props => {
  const [ photo, setPhoto ] = useState();
  const dispatch = props.dispatch;

  const fileSelectHandler = e => {
    setPhoto(e.target.files[0]);
  };

  const onSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append( 'file', photo, 'file' );
    dispatch( dsSubmit( formData ) );
  };

  return (
    <ModalDiv>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={fileSelectHandler} />
        <button type="submit">Upload Photo Here</button>
      </form>
    </ModalDiv>
  );
}

const mapDispatchToProps = {
  dsSubmit
};
export default connect( state => state )( UploadModal ); 
