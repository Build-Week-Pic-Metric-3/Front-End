import React from 'react';
import styled from 'styled-components';

const ImgStyle = styled.img`
  width: 100%;
`

const ResultsCard = props => {

  return (
    <div className='results'>
      <ImgStyle src={ props.photoURL } alt={ `${ props.type } image` } />
      <h3>{ `${ props.type } prediction: ${ props.pred }` }</h3>
    </div>
  )
}

export default ResultsCard;