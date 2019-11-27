import React from 'react';

import { connect } from 'react-redux';
import styled from 'styled-components';
import uuid from 'uuid';

import ImageCard   from './ImageCard';

const GalleryCont = styled.div`
  background: #F7F9FA;
  width: 90%;
  margin: auto;
`

const CardHolder = styled.div`
  width: 90%;
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  padding: 5px;
  justify-content: space-around;
  background: #e1edf2;

  .card {
    margin: 0.5rem 0.3rem 0;
    width: 200px;
    height: 200px;
    padding: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #C3CFD9;

    &:hover {
      cursor: pointer;
    }

    button {
      margin-top: 4px;
    }
  }
`

const Gallery = props => {
  return (
    <GalleryCont>
      <h3>Gallery - Your Saved Images</h3>
      <CardHolder>
        { props.photos.map( photo => {
          const key = uuid.v4();
          return (
            <ImageCard
              photo={ photo }
              key={ key }
              toggleID={ key }
            />
          )
        } ) }
      </CardHolder>
    </GalleryCont>
  )
};

const mapStateToProps = state => {
  return {
    photos:  state.user.photos
  }
};

export default connect( mapStateToProps )( Gallery );
