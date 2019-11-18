import React from 'react';
import styled from 'styled-components';

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

  return (
    <GalleryCont>
      <h3>Gallery - Your Saved Images</h3>
      <ImgsCont>
        <img src="https://unsplash.com/photos/4_QbgDuj8z4" alt="skateboard"/>
        <img src="https://unsplash.com/photos/bbunIoelmWc" alt="clothes pin"/>
        <img src="https://unsplash.com/photos/VSmeUNx8lnc" alt="bicycle seat"/>
      </ImgsCont>
    </GalleryCont>
  )
}

export default Gallery;