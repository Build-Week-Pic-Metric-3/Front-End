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

const Img = styled.img`
  width: 30%;
`

const Gallery = props => {

  return (
    <GalleryCont>
      <h3>Gallery - Your Saved Images</h3>
      <ImgsCont>
        <Img src="https://images.unsplash.com/photo-1466074395296-41cba23ce4f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1068&q=80" alt="skateboard"/>
        <Img src="https://images.unsplash.com/photo-1485828877394-d0e861d7d16e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="clothes pin"/>
        <Img src="https://images.unsplash.com/photo-1464796147878-5d2c9706db89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="bicycle seat"/>
      </ImgsCont>
    </GalleryCont>
  )
}

export default Gallery;