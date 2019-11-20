import React from 'react';

const ImageCard = props => {

  return (
    <div>
      <img src={props.photoURL} alt="Image from user's saved photos"/>
      <p>{`Photo ID: ${props.photoID}`}</p>
    </div>
  )
}

export default ImageCard;