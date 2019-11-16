import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

const Login = props => {
  const [ credentials, setCredentials ] = useState( { username: '', password: '' } );

  const dispatch = props.dispatch;

  const handleChange = e => {
    setCredentials( {
      ...credentials,
      [ e.target.name ]: e.target.value
    } );
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch( login( credentials.username, credentials.password, props.history ) );
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
        <button>Log in</button>
      </form>
    </div>
  );
}

export default connect( state => state )( Login );
