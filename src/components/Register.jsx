import React from 'react';
import { connect  } from 'react-redux';
import { register } from '../actions';

import { Formik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';


const Page  = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 { text-align: center; }
`

const RegisterDiv = styled.div`
  width: 80%;
  min-width: 300px;
  max-width: 600px;
  display: flex;
  padding: 1rem;
  margin: 0 auto;
  flex-direction: column;
  align-self: center;
  justify-content: space-evenly;
  box-shadow: 0 0 12px rgba( 129, 143, 145, 0.4);

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    margin: 5px;
  }

`

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
            .label   ( 'Email'    )
            .required( 'Required' ),
        password:
          Yup.string()
            .required( 'Required' )
            .label   ( 'Password' )
            .min     ( 3, 'Password is too short - 3 chars minimum'    )
            .matches ( /(?=.*[0-9])/, 'Password must contain a number' ),
        passwordConf:
          Yup.string()
            .required( 'Passwords must match' )
            .label   ( 'Password Confirmation')
            .test    ( 'passwords-match', 'Passwords must match', function( value ) {
              return this.parent.password === value;
            } )
      } ) }
    >
      { props => {
        const {
          values, touched, errors, isSubmitting,
          handleChange, handleBlur, handleSubmit
        } = props;
        return (
          <Page>
            <h3>Welcome to Pic Metric 3!</h3>
            <RegisterDiv>
              <form onSubmit = { handleSubmit }>
                <label htmlFor='email'>Email</label>
                <input
                  type        = 'text'
                  name        = 'email'
                  placeholder = 'example@domain.com'
                  value       = { values.email }
                  onChange    = { handleChange }
                  onBlur      = { handleBlur   }
                  className   = { errors.email && touched.email && 'error' }
                />
                { 
                  errors.email && touched.email && (
                    <div className = 'input-feedback'>{ errors.email }</div>
                  )
                }
                <label htmlFor='password'>Password</label>
                <input
                  type        = 'password'
                  name        = 'password'
                  placeholder = 'password'
                  value       = { values.password }
                  onChange    = { handleChange    }
                  onBlur      = { handleBlur      }
                  className   = { errors.password && touched.password && 'error' }
                />
                {
                  errors.password && touched.password && (
                    <div className = 'input-feedback'>{ errors.password }</div>
                  )
                }
                <label htmlFor='passwordConf'>Password Confirmation</label>
                <input
                  type        = 'password'
                  name        = 'passwordConf'
                  placeholder = 'confirm password'
                  value       = { values.passwordConf }
                  onChange    = { handleChange        }
                  onBlur      = { handleBlur          }
                  className   = { errors.passwordConf && touched.passwordConf && 'error' }
                />
                {
                  errors.password && touched.password && (
                    <div className = 'input-feedback'>{ errors.password }</div>
                  )
                }
                <button type = 'submit' disabled = { isSubmitting }>Register</button>
              </form>
            </RegisterDiv>
          </Page>
        );
      } }
    </Formik>
  );
}

export default connect( state => state )( Register );
