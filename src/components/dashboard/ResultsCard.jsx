import React from 'react';
import styled from 'styled-components';

const ImgStyle = styled.img`
  width: 100%;
`

const ResultsCard = props => {

  return (
    <div className='results'>
      <ImgStyle src={ props.photoURL } alt={ `${ props.type } image` } />
      <p>{ `${ props.type } prediction: ${ props.pred }` }</p>
    </div>
  )
}

export default ResultsCard;