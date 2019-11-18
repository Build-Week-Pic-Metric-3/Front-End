import React from 'react';
import styled from 'styled-components';

const UploadPhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const NewExistingPhotoContainer = styled.div`
  display: flex;
  
`

const UploadPhoto = props => {

  return (
    <UploadPhotoContainer>
      <h3>Upload A Photo</h3>
      <div>
        <div>
          New Photo
        </div>
        <div>
          Browse Existing Photos
        </div>
      </div>
    </UploadPhotoContainer>
  )
}

export default UploadPhoto;