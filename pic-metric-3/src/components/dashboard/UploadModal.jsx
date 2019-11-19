import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';


const UploadModal = ({ errors, touched, status }) => {
  useEffects(() => {
    console.log(status)
    status && status // axios.post to the backend
  }, [status])
  
  return(
    <div>
      <Form>
        <Field type='text' name='photoURL' placeholder='enter photo url'/>
        {errors.name && (<p>{errors.name}</p>)}
      </Form>
    </div>
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
      .url('Enter a valid URL')
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting, setStatus }) {
    axios
      .post('https://blahblahbackend.in', values)
      .then(response => {
        setStatus(response.data);
        setSubmitting();
        resetForm();
      })
      .catch(error => {
        setSubmitting(false);
    });
  }
})(UploadModal);

export default UploadModal;