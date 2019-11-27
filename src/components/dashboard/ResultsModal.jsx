import React from 'react';
import styled from 'styled-components';
import ResultsCard from './ResultsCard';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-around;
  top: 0;
  left: 0;
  background-color: rgba( 33,33,33, 0.9 );
`

const CardHolder = styled.div`
  max-width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 5px;
  justify-content: space-evenly;
  background: #e1edf2;
  position: relative;
  z-index: 1;
  overflow: hidden;

  .results {
    min-width: 300px;
    margin: 1.5rem 0.5rem 0;
    flex: 1;
  }
`

const CloseButton = styled.div`
  position: absolute;
  right: 0.4rem;
  top: -0.4rem;
  color: #611510;
  font-size: 2rem;
  font-family: none;
  cursor: pointer;
`

const ResultsModal = props => {

  return (
    <Background>
      <CardHolder>
        <ResultsCard
          type='resnet'
          photoURL={ props.original}
          pred={ props.parsedResnet }
        />
        <ResultsCard
          type='yolo'
          photoURL={ props.yolov3_source }
          pred={ props.parsedYolo }
        />
        <CloseButton onClick={ () => props.toggleModal( props.key ) }>x</CloseButton>
      </CardHolder>
      
    </Background>
  );
}

export default ResultsModal;
