import React, {useState} from 'react';
import styled from 'styled-components';

import UploadModalWithFormik from './UploadModal';

const UploadCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 27rem;
`

const UploadOrBrowseCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #F7F9FA;
  width: 90%;
  height: 20rem;
  margin-bottom: 2rem;
`

const UploadOrBrowseChildren = styled.div`
  border: 2px solid black;
  height: 15rem;
  width: 15rem;

`

const UploadPhoto = props => {

  const [displayModal, setDisplayModal] = useState(false);

  const togglePopup = () => {
    setDisplayModal(!displayModal);
  }

  return (
    <UploadCont>
      <h3>Upload A Photo</h3>
      <UploadOrBrowseCont>
        <UploadOrBrowseChildren>
          <h3>New Photo</h3>
          <button onClick={togglePopup}>Upload</button>
          <div className={displayModal ? 'modal-visible' : 'modal-invisible'}>
            <UploadModalWithFormik togglePopup={togglePopup} />
          </div>
        </UploadOrBrowseChildren>
        <UploadOrBrowseChildren>
          Browse Existing Photos
        </UploadOrBrowseChildren>
      </UploadOrBrowseCont>
    </UploadCont>
  )
}

export default UploadPhoto;