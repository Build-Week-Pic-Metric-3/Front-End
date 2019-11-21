import React, { useState } from 'react';
import styled from 'styled-components';
// import { Formik } from 'formik';
// import * as Yup from 'yup';
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


/*
{data: {…}, status: 200, statusText: "OK", headers: {…}, config: {…}, …}
config: {url: "http://18.191.187.149:5000/do_data_science", method: "post", data: FormData, headers: {…}, transformRequest: Array(1), …}
data:
error: ""
hash: "1b2b54c265edf1a4d243ba8a14ad958d"
original: "http://picmetric3.s3.amazonaws.com/1b2b54c265edf1a4d243ba8a14ad958d.png"
resnet: "{"kelpie": "0.4179342", "miniature_pinscher": "0.15857351", "Doberman": "0.09986181"}"
source: "http://picmetric3.s3.amazonaws.com/f149b876e73c888d613ecbe66b234e58_yolov3.png"
yolov3: "{"dog": "98.83676767349243"}"
__proto__: Object
headers: {content-length: "383", content-type: "application/json"}
request: XMLHttpRequest {readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}
status: 200
statusText: "OK"
__proto__: Object
*/