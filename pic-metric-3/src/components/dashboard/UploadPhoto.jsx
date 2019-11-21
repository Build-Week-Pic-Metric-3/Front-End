import React, { useState } from "react";
import axios from "axios";
// import { dsSubmit } from "../../actions";
import { connect } from "react-redux";

const DS_API = " http://18.191.187.149:5000/do_data_science";

const UploadPhoto = props => {
  // const { dispatch } = props;
  const [photo, setPhoto] = useState();

  const fileSelectHandler = e => {
    setPhoto(e.target.files[0]);
  };

  const onSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", photo, "file");
    const config = {
      headers: { "content-type": "multipart/form-data" }
    };

    return axios
      .post(DS_API, formData, config)
      .then(res => {
        console.log(res);
        // set the response to state
      })
      .catch(err => console.log(err, "DS Api didnt like our request"));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={fileSelectHandler} />
        <button type="submit">Upload Photo Here</button>
      </form>
    </div>
  );
};

// const mapDispatchToProps = {
//   dsSubmit
// };

export default connect(state => state)(UploadPhoto);
