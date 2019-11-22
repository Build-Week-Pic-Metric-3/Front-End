import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { login   } from '../actions';
import { Formik  } from 'formik';

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

const LoginDiv = styled.div`
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

  .bottom {
    display: flex;
    justify-content: space-evenly;
  }
`

const Login = props => {
  const dispatch = props.dispatch;

  return (
    <Formik
      initialValues = { { email: '', password: '' } }
      onSubmit      = { ( values, { setSubmitting } ) => {
        dispatch(  login( values.email, values.password, props.history ) );
      } }
      validationSchema = { Yup.object().shape( {
        email:
          Yup.string().email().required( 'Required' ),
        password:
          Yup.string()
            .required( 'No password provided.' )
            .min     ( 3, 'Password is too short - 3 chars minimum'    )
            .matches ( /(?=.*[0-9])/, 'Password must contain a number' )
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
            <LoginDiv>
              <form onSubmit = { handleSubmit }>
                <label htmlFor='email'>Email</label>
                <input
                  type        = "text"
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
                  type        = 'text'
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
                <div className='bottom'>
                  <button type = 'submit' disabled = { isSubmitting }>Login</button>
                  <NavLink to={ '/register' } className='link' activeClassName='link-active'>Register</NavLink>
                </div>
              </form>
            </LoginDiv>
          </Page>
        );
      } }
    </Formik>
  );
}

export default connect( state => state )( Login );
