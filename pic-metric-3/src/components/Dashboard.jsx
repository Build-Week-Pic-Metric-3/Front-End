import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import styled from 'styled-components';

import { Formik } from 'formik';
import * as Yup from 'yup';

import NavBar from './NavBar';

const Dashboard = props => {

  return (
    <div>
      <NavBar />
      <div>
        <h3>Welcome to Pic Metric 3!</h3>
        
      </div>
    </div>
  )
}

export default connect(state => state)(Dashboard);