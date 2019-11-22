import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { css } from '@emotion/core';
import CircleLoader from 'react-spinners/CircleLoader';

import NavBar from './NavBar';
import UploadPhoto from './UploadPhoto';
import Gallery from './Gallery';

const Welcome = styled.div`
  text-align: center;
`

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red
`
const Dashboard = props => {
  const centerText = {
    'textAlign': 'center'
  };

  return (
    <div>
      <NavBar history={ props.history } />
      <Welcome>
        <h3>Welcome to Pic Metric 3!</h3>
      </Welcome>
      <UploadPhoto history={ props.history } />
      <CircleLoader
        css={override}
        sizeUnit={'px'}
        size={100}
        color={'#00adb5'}
        loading={ props.isLoading } />
      <h5 style={ centerText }>check the console log to see if image upload is successful,
        also need to manually reload the page after successful upload
        to refresh the gallery...   still wip</h5>
      <Gallery user={ props.user }/>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
    isLoading: state.isLoading
  }
};

export default connect(mapStateToProps)(Dashboard);