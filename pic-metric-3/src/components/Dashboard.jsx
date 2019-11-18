import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import styled from 'styled-components';

import { Formik } from 'formik';
import * as Yup from 'yup';

import NavBar from './NavBar';
import UploadPhoto from './UploadPhoto'

const Welcome = styled.h3`
  text-align: center;
`

const Dashboard = props => {

  return (
    <div>
      <NavBar />
      <Welcome>
        <h3>Welcome to Pic Metric 3!</h3>

      </Welcome>
      <UploadPhoto />
    </div>
  )
}

export default connect(state => state)(Dashboard);