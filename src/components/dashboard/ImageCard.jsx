import React from 'react';
import styled from 'styled-components';

const ImgStyle = styled.img`
  width: 20rem;
`

const ImageCard = props => {

  return (
    <div>
      <ImgStyle src={props.photoURL} alt="Image from user's saved photos"/>
      <p>{`${props.type} prediction: ${props.pred}`}</p>
    </div>
  )
}

export default ImageCard;