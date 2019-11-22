import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
/* 
import { Formik } from 'formik';
import * as Yup from 'yup'; */

import NavBar from './NavBar';
import UploadPhoto from './UploadPhoto';
import Gallery from './Gallery';

const Welcome = styled.div`
  text-align: center;
`

const Dashboard = props => {

  return (
    <div>
      <NavBar history={ props.history } />
        <Welcome>
          <h3>Welcome to Pic Metric 3!</h3>
        </Welcome>
      <UploadPhoto history={ props.history } />
      <Gallery user={ props.user }/>
    </div>
  )
}

const mapStateToProps = state => {
  return { user: state.user }
};

export default connect(state => state)(Dashboard);