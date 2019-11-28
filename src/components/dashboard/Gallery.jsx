import React from 'react';

import { connect } from 'react-redux';
import styled from 'styled-components';
import uuid from 'uuid';

import ImageCard   from './ImageCard';

const GalleryCont = styled.div`
  background: #F7F9FA;
  width: 90%;
  margin: 2rem auto;
  border: 1px solid #C3CFD9;

  h3 {
    padding-left: 1rem;
  }
`

const CardHolder = styled.div`
  width: 98%;
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  margin-bottom: 1rem;
  padding: 5px;
  justify-content: space-around;

  .card {
    margin: 0.5rem 0.3rem;
    width: 200px;
    height: 200px;
    padding: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: #C3CFD9;

    &:hover {
      box-shadow: 0 0 8px rgba( 64, 77, 82, 0.8 );

      button {
        display: block;
      }
    }

    button {
      margin-top: 4px;
      background: #F7F9FA;
      border: none;
      border-radius: 0.2rem;
      display: none;

      &:hover {
        background: #e1edf2;
        cursor: pointer;
        box-shadow: 0 0 4px rgba( 64, 77, 82, 0.8 );
      }
    }
  }
`

const Gallery = props => {
  return (
    <GalleryCont>
      <h3>Gallery - Your Saved Images (click image to see analysis results)</h3>
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
