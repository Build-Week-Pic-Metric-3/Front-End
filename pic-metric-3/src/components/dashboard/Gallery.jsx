import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImageCard from './ImageCard';
import axios from 'axios';
import uuid from 'uuid';

const GalleryCont = styled.div`
  background: #F7F9FA;
  width: 90%;
  margin: auto;
`

const ImgsCont = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
` 

const Gallery = props => {
  const [ userData ] = useState([
    {
      faces_source:
        "http://picmetric3.s3.amazonaws.com/93cc62cb0b79f774037c6980052d60f1_faces.png",
      hash: "07020d585b1e4fec65838eb462f58562",
      original:
        "http://picmetric3.s3.amazonaws.com/07020d585b1e4fec65838eb462f58562.png",
      resnet:
        '{"sunglasses": "0.6676245", "sunglass": "0.3276029", "bolo_tie": "0.00093378656"}',
      yolov3: '{"person": "99.90501403808594"}',
      yolov3_source:
        "http://picmetric3.s3.amazonaws.com/93cc62cb0b79f774037c6980052d60f1_yolov3.png"
    },
    {
      faces_source:
        "http://picmetric3.s3.amazonaws.com/93cc62cb0b79f774037c6980052d60f1_faces.png",
      hash: "07020d585b1e4fec65838eb462f58562",
      original:
        "http://picmetric3.s3.amazonaws.com/07020d585b1e4fec65838eb462f58562.png",
      resnet:
        '{"sunglasses": "0.6676245", "sunglass": "0.3276029", "bolo_tie": "0.00093378656"}',
      yolov3: '{"person": "99.90501403808594"}',
      yolov3_source:
        "http://picmetric3.s3.amazonaws.com/93cc62cb0b79f774037c6980052d60f1_yolov3.png"
    },
    {
      faces_source:
        "http://picmetric3.s3.amazonaws.com/93cc62cb0b79f774037c6980052d60f1_faces.png",
      hash: "07020d585b1e4fec65838eb462f58562",
      original:
        "http://picmetric3.s3.amazonaws.com/07020d585b1e4fec65838eb462f58562.png",
      resnet:
        '{"sunglasses": "0.6676245", "sunglass": "0.3276029", "bolo_tie": "0.00093378656"}',
      yolov3: '{"person": "99.90501403808594"}',
      yolov3_source:
        "http://picmetric3.s3.amazonaws.com/93cc62cb0b79f774037c6980052d60f1_yolov3.png"
    }
  ]);
  
  console.log(userData);

  return (
    <GalleryCont>
      <h3>Gallery - Your Saved Images</h3>
      <ImgsCont>
        {userData.map(userPhoto => {
          const parsedResnet = JSON.parse(userPhoto.resnet)
          const parsedYolo = JSON.parse(userPhoto.yolov3)
          console.log(Object.keys(parsedResnet))
          return <ImageCard 
            imageURL={userPhoto.yolov3_source}
            resnetPred={Object.keys(parsedResnet)}
            yoloPred={Object.keys(parsedYolo)}
          />
          }
        )}
      </ImgsCont>
    </GalleryCont>
  )
}

export default Gallery;

// { userData.map(photo => {
//   console.log(photo);
//   return (
//     <ImageCard 
//     key={uuid.v4()}
//     photoID={photo.id}
//     photoURL={photo.url}
//     photoPred={photo.pred}
//     />
//     )
//   })
// }