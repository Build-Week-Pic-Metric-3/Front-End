import axios from 'axios';

export const LOGIN_LOADING        = 'LOGIN_LOADING';
export const LOGIN_SUCCESS        = 'LOGIN_SUCCESS';
export const LOGIN_FAILED         = 'LOGIN_FAILED';

export const ADD                  = 'ADD';
export const ADD_FAILED           = 'ADD_FAILED';

export const EDIT                 = 'EDIT';
export const EDIT_FAILED          = 'EDIT_FAILED';

export const DELETE               = 'DELETE';
export const DELETE_FAILED        = 'DELETE_FAILED';



export const loginLoading   = () => ( { type: LOGIN_LOADING } );

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


export const addSuccess = data => ( {
  type: ADD,
  payload: data
} );

export const addFailure = error => ( {
  type: ADD_FAILED,
  payload: error
} );

export const editSuccess = data => ( {
  type: EDIT,
  payload: data
} );

export const editFailure = error => ( {
  type: EDIT_FAILED,
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

export function LoginFunction( name, pass, history ) {
  return function( dispatch ) {
    dispatch( loginLoading() );

    return axios
      .post( 'http://localhost:5000/api/login', { username: name, password: pass } )
      .then ( res   => dispatch( loginSuccess( res.data.payload, history ) ) )
      .catch( error => dispatch( loginFailure( error ) ) );
  }
}

/* 
export function FetchPhotos( header ) {
  return function( dispatch ) {
    dispatch( photosLoading() );

    const authAxios = axiosWithAuth();

    return authAxios
      .get( 'http://localhost:5000/api/photos' )
      .then ( res   => dispatch( photosLoadSuccess( res.data ) ) )
      .catch( error => dispatch( photosLoadFailure( error    ) ) );
  }
} */

export function AddPhoto( color ) {
  return function( dispatch ) {

    const authAxios = axiosWithAuth();

    return authAxios
      .post( 'http://localhost:5000/api/colors', color   )
      .then ( res   => dispatch( addSuccess( color ) ) )
      .catch( error => dispatch( addFailure( error ) ) );
  }
}

export function EditPhoto( photo ) {
  return function( dispatch ) {
    const authAxios = axiosWithAuth();

    return authAxios
      .put( `http://localhost:5000/api/colors/${ photo.id }`, photo )
      .then ( res   => dispatch( editSuccess( res.data ) ) )
      .catch( error => dispatch( editFailure( error    ) ) );
  }
}

export function DeletePhoto( id ) {
  return function( dispatch ) {
    const authAxios = axiosWithAuth();
    console.log( id );

    return authAxios
      .delete( `http://localhost:5000/api/colors/${ id }` )
      .then ( res   => dispatch( deleteSuccess( res   ) ) )
      .catch( error => dispatch( deleteFailure( error ) ) );
  }
}
