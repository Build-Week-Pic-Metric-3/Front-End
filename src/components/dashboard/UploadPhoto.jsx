import React, {useState} from 'react';
import styled from 'styled-components';

import UploadModal from './UploadModal';

const UploadCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 22rem;
`

const UploadOrBrowseCont = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  background: #F7F9FA;
  width: 90%;
  border: 1px solid #C3CFD9;
  padding: 2rem;
`

const UploadChild = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 10px solid white;
  height: 15rem;
  width: 40%;
  min-width: 200px;
  background-image: url("https://images.unsplash.com/photo-1496816488620-48628a0724cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80");
  background-position: center;
  background-size: cover;
`

const BrowseChild = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #C3CFD9;
  height: 15rem;
  width: 40%;
  min-width: 200px;
  padding: 1rem;

  @media ( max-width: 600px ){
    display: none;
  }
`

const UploadButton = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  width: 10rem;
  height: 2.5rem;
  background: #D3455B;
  border-radius: 5px;
  padding: .5rem;
`

const UploadPhoto = props => {

  const [ displayModal, setDisplayModal ] = useState( false );

  const togglePopup = () => {
    setDisplayModal( !displayModal );
  }

  return (
    <UploadCont>
      <UploadOrBrowseCont>
        <UploadChild>
          <UploadButton onClick={ togglePopup }><i className="fas fa-upload"></i><p>Upload A Photo</p></UploadButton>
          <div className={ displayModal ? 'modal-visible' : 'modal-invisible' }>
            <UploadModal togglePopup={ togglePopup } history={ props.history } />
          </div>
        </UploadChild>
        <BrowseChild>
          <h4>Pic Metric 3 uses machine learning to identify the contents of your photo</h4>
          <p>Already upload photos? Browse your photos below</p>
        </BrowseChild>
      </UploadOrBrowseCont>
    </UploadCont>
  )
}

export default UploadPhoto;