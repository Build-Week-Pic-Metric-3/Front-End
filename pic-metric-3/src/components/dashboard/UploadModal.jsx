import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { dsSubmit } from '../../actions';

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
    <div>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={fileSelectHandler} />
        <button type="submit">Upload Photo Here</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = {
  dsSubmit
};
export default connect( state => state )( UploadModal ); 
