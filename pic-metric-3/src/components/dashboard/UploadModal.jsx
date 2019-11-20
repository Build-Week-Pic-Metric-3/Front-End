import React from 'react';
import styled from 'styled-components';
// import { Formik } from 'formik';
// import * as Yup from 'yup';
import ImageUploader from 'react-images-upload';
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

  const dispatch = props.dispatch;

  const onDrop = ( pictureFiles, pictureDataURLs ) => {
    console.log( pictureFiles );
    console.log( pictureDataURLs );
    // dispatch( dsSubmit( ) );
  };
  
  return (
    <ImageUploader
      withIcon = { true }
      buttonText = 'Select Image'
      onChange = { onDrop }
      imgExtension = { [ '.jpg', '.jpeg', '.png' ] }
      maxFileSize = { 5242880 }
    />
  );
}

const mapDispatchToProps = {
  dsSubmit
};
export default connect( state => state )( UploadModal ); 


/*
return (
    <Formik
      initialValues={ { file: '', url: '' } }
      onSubmit={ ( values, { setSubmitting } ) => {
        values.url ?
          dispatch( dsSubmit( values.url  ) ) :
          dispatch( dsSubmit( values.file ) )
      }}
      validationSchema={ Yup.object().shape({
        photoURL: Yup.string()
          .url( 'Invalid URL. Enter a valid URL (ex. https://google.com)' ),
        photoFile: Yup.mixed()
          .test( 'fileType', "Unsupported File Format", value => [ 'image/jpg', 'image/jpeg', 'image/gif', 'image/png' ].includes( value.type ) )
      } ) }
      >
      { props => {
        const {
          values, touched, errors, isSubmitting,
          handleChange, handleBlur, handleSubmit
        } = props;
        return (
          <ModalDiv>
            <CloseButton onClick={ props.togglePopup }>
              x
            </CloseButton>
            <form onSubmit = { handleSubmit }>
              <input
                type='url'
                name='url'
                placeholder='enter photo url'
                value = { values.photoURL }
                onChange = { handleChange }
                onBlur = { handleBlur }
                className = { errors.url && touched.url && 'error' }
              />
              {
                props.errors.photoURL && ( <p>{ props.errors.photoURL }</p> )
              }
              <input
                type='file'
                name='file'
                placeholder='Upload a Photo'
                onChange = { handleChange }
                onBlur = { handleBlur }
              />
              {
                props.errors.photoFile && ( <p>{ props.errors.photoFile }</p> )
                }
              <button type = 'submit' disabled = { isSubmitting }>Submit</button>
            </form>
          </ModalDiv>
        )
      }}
    </Formik>
  );
*/