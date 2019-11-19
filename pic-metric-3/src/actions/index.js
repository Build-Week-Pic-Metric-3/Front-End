import axios from 'axios';

export const LOGIN_LOADING        = 'LOGIN_LOADING';
export const LOGIN_SUCCESS        = 'LOGIN_SUCCESS';
export const LOGIN_FAILED         = 'LOGIN_FAILED';

export const REGISTER_LOADING     = 'REGISTER_LOADING';
export const REGISTER_SUCCESS     = 'REGISTER_SUCCESS';
export const REGISTER_FAILED      = 'REGISTER_FAILED';

export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
export const FETCH_PHOTOS_LOADING = 'FETCH_PHOTOS_LOADING';
export const FETCH_PHOTOS_FAILED  = 'FETCH_PHOTOS_FAILED';

export const ADD                  = 'ADD';
export const ADD_FAILED           = 'ADD_FAILED';

export const DELETE               = 'DELETE';
export const DELETE_FAILED        = 'DELETE_FAILED';


export const registerLoading    = () => ( { type: REGISTER_LOADING     } );
export const loginLoading       = () => ( { type: LOGIN_LOADING        } );
export const fetchPhotosLoading = () => ( { type: FETCH_PHOTOS_LOADING } );

export const loginSuccess = ( data, history ) => {
  return dispatch => {
    dispatch( {
      type: LOGIN_SUCCESS,
      payload: data
    } );
    history.push( '/protected' );
  }
};

export const loginFailure = error => ( {
  type: LOGIN_FAILED,
  payload: error
} );

export const registerSuccess = ( data, history ) => {
  return dispatch => {
    dispatch( {
      type: REGISTER_SUCCESS,
      payload: data
    } );
    history.push( '/protected' );
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

export const addSuccess = data => ( {
  type: ADD,
  payload: data
} );

export const addFailure = error => ( {
  type: ADD_FAILED,
  payload: error
} );

export const deleteSuccess = data => ( {
  type: DELETE,
  payload: data
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
      .post ( 'https://pic-metric-backend.herokuapp.com/auth/login', { email: mail, password: pass } )
      .then ( res   => dispatch( loginSuccess( res.data.payload, history     ) ) )
      .catch( error => dispatch( loginFailure( error ) ) );
  }
}

export function register( mail, pass, history ) {
  return function( dispatch ) {
    dispatch( registerLoading() );

    return axios
      .post ( 'https://pic-metric-backend.herokuapp.com/auth/register', { email: mail, password: pass } )
      .then ( res   => dispatch( registerSuccess( res.data.payload, history     ) ) )
      .catch( error => dispatch( registerFailure( error ) ) );
  }
}

 //http://18.191.49.69:5000/do_data_science

export function FetchPhotos( header ) {
  return function( dispatch ) {
    dispatch( fetchPhotosLoading() );

    const authAxios = axiosWithAuth();

    return authAxios
      .get( 'https://pic-metric-backend.herokuapp.com/photos' )
      .then ( res   => dispatch( fetchPhotoSuccess( res.data ) ) )
      .catch( error => dispatch( fetchPhotoFailure( error    ) ) );
  }
}

export function AddPhoto( photo ) {
  return function( dispatch ) {

    const authAxios = axiosWithAuth();

    return authAxios
      .post ( 'https://pic-metric-backend.herokuapp.com/photos', photo   )
      .then ( res   => dispatch( addSuccess( photo    ) ) )
      .catch( error => dispatch( addFailure( error    ) ) );
  }
}

export function DeletePhoto( id ) {
  return function( dispatch ) {
    const authAxios = axiosWithAuth();

    return authAxios
      .delete( `https://pic-metric-backend.herokuapp.com/photos/${ id }`  )
      .then  ( res   => dispatch( deleteSuccess( res   ) ) )
      .catch ( error => dispatch( deleteFailure( error ) ) );
  }
}
