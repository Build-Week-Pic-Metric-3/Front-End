import React from 'react';
import styled from 'styled-components';

const ImgPredCont = styled.div`
  border: 1px solid #C3CFD9;
  background: white;

`

const ImgStyle = styled.img`
  width: 20rem;
`

const ImageCard = props => {

  return (
    <div>
      <ImgStyle src={props.imageURL} alt="Image from user's profile"/>
      <p>{`Yolo Prediction: ${props.yoloPred}`}</p>
      <p>{`Resnet Predictions: ${props.resnetPred}`}</p>
    </div>
  )
}

export default ImageCard;