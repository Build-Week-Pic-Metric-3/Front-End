import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

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

const UploadModal = ({ togglePopup, values, errors, touched, status }) => {
  useEffect(() => {
    status && console.log(status) // axios.post to the backend
  }, [status])
  
  return(
    <ModalDiv>
      <CloseButton onClick={togglePopup}>
        x
      </CloseButton>
      <Form>
        <Field type='text' name='photoURL' placeholder='enter photo url'/>
        {errors.photoURL && (<p>{errors.photoURL}</p>)}
        <button type='submit'>Submit</button>
      </Form>
    </ModalDiv>
  )
}

const UploadModalWithFormik = withFormik({
  mapPropsToValues({photoURL}){
    return {
      photoURL: photoURL || ''
    }
  },
  validationSchema: Yup.object().shape({
    photoURL: Yup.string()
      .required('Enter your URL here')
      .url('Invalid URL. Enter a valid URL (ex. https://google.com)')
  }),
  handleSubmit(values, { resetForm, setSubmitting, setStatus }) {
    console.log("that's a url, nice", values)
    const {photoURL} = values
    const dsSubmission = [photoURL];
    // axios
    //   .post('https://blahblahbackend.in', dsSubmission)
    //   .then(response => {
    //     setStatus(response.data);
    //     setSubmitting();
    //     resetForm();
    //   })
    //   .catch(error => {
    //     console.log(error)
    //     setSubmitting(false);
    // });
  }
})(UploadModal);

export default UploadModalWithFormik;