import axios from 'axios';

export const LOGIN_LOADING        = 'LOGIN_LOADING';
export const LOGIN_SUCCESS        = 'LOGIN_SUCCESS';
export const LOGIN_FAILED         = 'LOGIN_FAILED';

export const LOGOUT_SUCCESS       = 'LOGOUT_SUCCESS';

export const REGISTER_LOADING     = 'REGISTER_LOADING';
export const REGISTER_SUCCESS     = 'REGISTER_SUCCESS';
export const REGISTER_FAILED      = 'REGISTER_FAILED';

export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
export const FETCH_PHOTOS_LOADING = 'FETCH_PHOTOS_LOADING';
export const FETCH_PHOTOS_FAILED  = 'FETCH_PHOTOS_FAILED';

export const DS_LOADING           = 'DS_LOADING';
export const DS_LOAD_SUCCESS      = 'DS_LOAD_SUCCESS';
export const DS_LOAD_FAILURE      = 'DS_LOAD_FAILURE';

export const ADD                  = 'ADD';
export const ADD_FAILED           = 'ADD_FAILED';

export const DELETE               = 'DELETE';
export const DELETE_FAILED        = 'DELETE_FAILED';


export const registerLoading    = () => ( { type: REGISTER_LOADING     } );
export const loginLoading       = () => ( { type: LOGIN_LOADING        } );
export const fetchPhotosLoading = () => ( { type: FETCH_PHOTOS_LOADING } );
export const dsLoading          = () => ( { type: DS_LOADING           } );

export const loginSuccess = ( data, history ) => {
  return dispatch => {
    dispatch( {
      type: LOGIN_SUCCESS,
      payload: data
    } );
    history.push( '/protected' );
    dispatch( FetchPhotos() );
  }
};

export const loginFailure = error => ( {
  type: LOGIN_FAILED,
  payload: error
} );

export const logout = ( history ) => {
  return dispatch => {
    dispatch( {
      type: LOGOUT_SUCCESS,
      payload: null
    } );
    history.push( '/' );
  }
};

export const registerSuccess = ( data, pass, history ) => {
  return dispatch => {
    dispatch( {
      type: REGISTER_SUCCESS,
      payload: data
    } );
    dispatch( login( data.username, pass, history ) );
  }
};

export const registerFailure = error => ( {
  type: REGISTER_FAILED,
  payload: error
} );

export const fetchPhotosSuccess = data => ( {
  type: FETCH_PHOTOS_SUCCESS,
  payload: data
} );

export const fetchPhotosFailure = error => ( {
  type: FETCH_PHOTOS_FAILED,
  payload: error
} );

export const dsSubmitSuccess = data => {
  return dispatch => {
    dispatch( {
      type: DS_LOAD_SUCCESS,
      payload: null
    } );
    dispatch( AddPhoto( data ) );
  }
};

export const dsSubmitFailure = error => ( {
  type: DS_LOAD_FAILURE,
  payload: error
} );

export const addSuccess = data => ( {
  type: ADD,
  payload: data
} );

export const addFailure = error => ( {
  type: ADD_FAILED,
  payload: error
} );

export const deleteSuccess = id => ( {
  type: DELETE,
  payload: id
} );

export const deleteFailure = error => ( {
  type: DELETE_FAILED,
  payload: error
} );

const axiosWithAuth = () => {
  return axios.create( {
    headers: {
      authorization: sessionStorage.getItem( 'token' )
    }
  } );
};

export function login( mail, pass, history ) {
  return function( dispatch ) {
    dispatch( loginLoading() );

    return axios
      .post ( 'https://pic-metric-backend.herokuapp.com/api/auth/login', { username: mail, password: pass } )
      .then ( res   => dispatch( loginSuccess( res.data, history ) ) )
      .catch( error => dispatch( loginFailure( error ) ) );
  }
}

export function register( mail, pass, history ) {
  return function( dispatch ) {
    dispatch( registerLoading() );

    return axios
      .post ( 'https://pic-metric-backend.herokuapp.com/api/auth/register', { username: mail, password: pass } )
      .then ( res   => dispatch( registerSuccess( res.data, pass, history ) ) )
      .catch( error => dispatch( registerFailure( error ) ) );
  }
}

export function FetchPhotos() {
  return function( dispatch ) {
    dispatch( fetchPhotosLoading() );

    const authAxios = axiosWithAuth();

    return authAxios
      .get  ( 'https://pic-metric-backend.herokuapp.com/api/analysis' )
      .then ( res   => dispatch( fetchPhotosSuccess( res.data ) ) )
      .catch( error => dispatch( fetchPhotosFailure( error    ) ) );
  }
}

export function AddPhoto( photo ) {
  return function( dispatch ) {

    const authAxios = axiosWithAuth();

    return authAxios
      .post ( 'https://pic-metric-backend.herokuapp.com/api/analysis', photo   )
      .then ( res   => dispatch( addSuccess( res.data ) ) )
      .catch( error => dispatch( addFailure( error    ) ) );
  }
}

export function DeletePhoto( id ) {
  return function( dispatch ) {
    const authAxios = axiosWithAuth();

    return authAxios
      .delete( `https://pic-metric-backend.herokuapp.com/api/photos/${ id }`  )
      .then  ( res   => dispatch( deleteSuccess( id    ) ) )
      .catch ( error => dispatch( deleteFailure( error ) ) );
  }
}

export function dsSubmit ( pic ) {
  return function( dispatch ) {
    dispatch( dsLoading );
  
    return axios
      .post( 'http://18.191.187.149:5000/do_data_science', pic, { headers: { 'content-type': 'multipart/form-data', timeout: 45000 } } )
      .then ( res   => dispatch( dsSubmitSuccess ( res.data ) ) )
      .catch( error => dispatch( dsSubmitFailure ( error    ) ) );
  }
}
