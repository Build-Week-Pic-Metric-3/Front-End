import React, { useState } from 'react';
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
  justify-content: space-evenly;
  align-items: flex-start;
` 

const Gallery = props => {
  const [ userData ] = useState(props.user.photos);
  console.log(userData);
  
  return (
    <GalleryCont>
      <h3>Gallery - Your Saved Images</h3>
      <ImgsCont>
        { userData.map(photo => {
          console.log("fote",photo)
          const parsedResnet = photo.resnet ? JSON.parse(photo.resnet) : {None: null};
          const parsedYolo = photo.yolov3 ? JSON.parse(photo.yolov3) : {None: null};
          // const parsedYoloImg = photo.yolov3_source ? JSON.parse(photo.yolov3_source) : {None: null};
          return (
            <>
              <ImageCard 
                key={uuid.v4()}
                type='resnet'
                photoURL={photo.original}
                pred={Object.keys(parsedResnet)}
              />
              <ImageCard
                key={uuid.v4()}
                type='yolo'
                photoURL={photo.yolov3_source}
                pred={Object.keys(parsedYolo)}
              />
            </>
            )
          })
        }
      </ImgsCont>
    </GalleryCont>
  )
}

export default Gallery;