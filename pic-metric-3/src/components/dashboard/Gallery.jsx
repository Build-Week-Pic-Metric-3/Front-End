import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImageCard from './ImageCard';
import uuid from 'uuid';
import axios from 'axios';

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

const Img = styled.img`
  width: 30%;
`

const Gallery = props => {
  const [ userData ] = useState(props.user.photos);
  console.log(userData);

  useEffect(() =>{
    axios.get('https://pic-metric-backend.herokuapp.com/api/analysis')
    .then(response => {
      console.log(response);
    })
  }, []);
  
  return (
    <GalleryCont>
      <h3>Gallery - Your Saved Images</h3>
      <ImgsCont>
        { userData.map(photo => {
          console.log("fote",photo)
          const parsedResnet = photo.resnet ? JSON.parse(photo.resnet) : {None: null};
          const parsedYolo = photo.yolo ? JSON.parse(photo.yolo) : {None: null};
          return (
            <ImageCard 
            key={uuid.v4()}
            photoID={photo.id}
            photoURL={photo.url}
            resnetPred={Object.keys(parsedResnet)}
            yoloPred={Object.keys(parsedYolo)}
            />
            )
          })
        }
      </ImgsCont>
    </GalleryCont>
  )
}

export default Gallery;