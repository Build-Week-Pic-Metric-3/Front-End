import React, { useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions';

const initialData = {
  username:     '',
  password:     '',
  passwordConf: '',
  email: ''
}

const Register = props => {
  const [ credentials, setCredentials ] = useState( initialData );

  const dispatch = props.dispatch;

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

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          name="username"
          placeholder='username'
          value={ credentials.username }
          onChange={ handleChange }
        />
        <input
          type="password"
          name="password"
          placeholder='password'
          value={ credentials.password }
          onChange={ handleChange }
        />
        <input
          type="passwordConf"
          name="passwordConf"
          placeholder='password'
          value={ credentials.passwordConf }
          onChange={ handleChange }
        />
        <input
          type="email"
          name="email"
          placeholder='email'
          value={ credentials.email }
          onChange={ handleChange }
        />
        <button>Register</button>
      </form>
    </div>
  );
}

export default connect( state => state )( Register );
