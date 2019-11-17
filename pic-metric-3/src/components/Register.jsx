import React, { useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions';

import { Formik } from 'formik';
import * as EmailValidator from 'email-validator';
import * as Yup from 'yup';

const initialData = {
  email:        '',
  password:     '',
  passwordConf: ''
}

const Register = props => {
  const dispatch = props.dispatch;

  return (
    <Formik
      initialValues = { initialData }
      onSubmit      = { ( values, { setSubmitting } ) => {
        dispatch( register( 
          values.email,
          values.password,
          props.history )
        );
      } }
      validationSchema = { Yup.object().shape ( {
        email:
          Yup.string()
            .email()
            .required( 'Required' ),
        password:
          Yup.string()
            .required( 'No password provided' )
            .min     ( 8, 'Password is too short - 8 chars minimum'    )
            .matches ( /(?=.*[0-9])/, 'Password must contain a number' ),
        passwordConf:
          Yup.string()
            .oneOf( [ Yup.ref( 'password' ), null ], 'Passwords must match' )
      } ) }
    >
      { props => {
        const {
          values, touched, errors, isSubmitting,
          handleChange, handleBlur, handleSubmit
        } = props;
        return (
          <form onSubmit = { handleSubmit }>
            <label>Email
              <input
                type        = 'text'
                name        = 'email'
                placeholder = 'example@domain.com'
                value       = { values.email }
                onChange    = { handleChange }
                onBlur      = { handleBlur   }
                className   = { errors.email && touched.email && 'error' }
              />
            </label>
            { 
              errors.email && touched.email && (
                <div className = 'input-feedback'>{ errors.email }</div>
              )
            }
            <label>Password
              <input
                type        = 'password'
                name        = 'password'
                placeholder = 'password'
                value       = { values.password }
                onChange    = { handleChange    }
                onBlur      = { handleBlur      }
                className   = { errors.password && touched.password && 'error' }
              />
            </label>
            {
              errors.password && touched.password && (
                <div className = 'input-feedback'>{ errors.password }</div>
              )
            }
            <label>Password Confirmation
              <input
                type        = 'password'
                name        = 'passwordConf'
                placeholder = 'confirm password'
                value       = { values.passwordConf }
                onChange    = { handleChange        }
                onBlur      = { handleBlur          }
                className   = { errors.passwordConf && touched.passwordConf && 'error' }
              />
            </label>
            {
              errors.password && touched.password && (
                <div className = 'input-feedback'>{ errors.password }</div>
              )
            }
            <button type = 'submit' disabled = { isSubmitting }>Register</button>
          </form>
        );
      } }
    </Formik>
  );
}

export default connect( state => state )( Register );

// const [ credentials, setCredentials ] = useState( initialData );
/* 
const handleChange = e => {
  setCredentials( {
    ...credentials,
    [ e.target.name ]: e.target.value
  } );
};

const handleSubmit = e => {
  e.preventDefault();
  dispatch( register( 
    credentials.username,
    credentials.password,
    credentials.email,
    props.history )
  );
};
 */