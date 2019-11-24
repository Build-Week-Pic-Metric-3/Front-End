import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ImageCard from './ImageCard';
import uuid from 'uuid';

const GalleryCont = styled.div`
  background: #F7F9FA;
  width: 90%;
  margin: auto;
`
const ImgsCont = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: flex-start;
` 
const CardHolder = styled.div`
  width: 90%;
  display: flex;
  margin: 0 auto;
  padding: 5px;
  justify-content: space-evenly;
  background: #e1edf2;

  .card {
    width: 40%;
  }
`;

const Gallery = props => {
  const [ userData ] = useState( props.photos );

  // create a state variable to manipulate and trigger component re-render
  const [ trigger ] = useState( props.trigger );
  
  return (
    <GalleryCont>
      <h3>Gallery - Your Saved Images</h3>
      <ImgsCont>
        { userData.map(photo => {
          const parsedResnet = photo.resnet ? JSON.parse( photo.resnet ) : { None: null };
          const parsedYolo   = photo.yolov3 ? JSON.parse( photo.yolov3 ) : { None: null };
          return (
            <CardHolder key={ uuid.v4() }>
              <ImageCard
                key={ uuid.v4() }
                type='resnet'
                photoURL={ photo.original}
                pred={ Object.keys( parsedResnet ) }
              />
              <ImageCard
                key={ uuid.v4() }
                type='yolo'
                photoURL={ photo.yolov3_source }
                pred={ Object.keys( parsedYolo ) }
              />
            </CardHolder>
            )
          })
        }
      </ImgsCont>
    </GalleryCont>
  )
}

const mapStateToProps = state => {
  return {
    photos:  state.user.photos,
    trigger: state.trigger
  }
};

export default connect( mapStateToProps )( Gallery );