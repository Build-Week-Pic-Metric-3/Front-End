import React from 'react';
import styled from 'styled-components';

import ResultsModal from './ResultsModal';
import { DeletePhoto } from '../../actions';
import { connect } from 'react-redux';

const ImgStyle = styled.img`
  max-width: 100%;
  max-height: 88%;
  
  &:hover {
    cursor: pointer;
  }
`

class ImageCard extends React.Component {
  state = {
    opened: false,
    selected: '',
  }

  toggleModal = id => {
    this.setState( { opened: !this.state.opened, selected: id } );
  };

  render() {
    const parsedResnet = this.props.photo.resnet ? JSON.parse( this.props.photo.resnet ) : { None: null };
    const parsedYolo   = this.props.photo.yolov3 ? JSON.parse( this.props.photo.yolov3 ) : { None: null };
    
    return (
      <div className='card'>
        <ImgStyle src={ this.props.photo.original } alt='base image' onClick={ () => this.toggleModal( this.props.toggleID ) } />
        { 
          this.state.opened && this.state.selected === this.props.toggleID && 
            <ResultsModal
              parsedResnet={ Object.keys( parsedResnet ) }
              parsedYolo={ Object.keys( parsedYolo ) }
              original={ this.props.photo.original }
              yolov3_source={ this.props.photo.yolov3_source }
              toggleModal={ this.toggleModal }
              toggleID={ this.props.toggleID }
            />
        }
        <button onClick={ () => this.props.dispatch( DeletePhoto( this.props.photo.id ) ) }>Delete</button>
      </div>
    )
  }
}

export default connect()( ImageCard );
