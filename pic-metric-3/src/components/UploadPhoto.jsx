import React from 'react';
import styled from 'styled-components';

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
`

const UploadOrBrowseChildren = styled.div`
  border: 2px solid black;
  height: 15rem;
  width: 15rem;

`

const UploadPhoto = props => {

  return (
    <UploadCont>
      <h3>Upload A Photo</h3>
      <UploadOrBrowseCont>
        <UploadOrBrowseChildren>
          New Photo
        </UploadOrBrowseChildren>
        <UploadOrBrowseChildren>
          Browse Existing Photos
        </UploadOrBrowseChildren>
      </UploadOrBrowseCont>
    </UploadCont>
  )
}

export default UploadPhoto;