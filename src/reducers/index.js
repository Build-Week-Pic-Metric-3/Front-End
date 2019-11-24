import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  ADD,
  ADD_FAILED,
  DELETE,
  DELETE_FAILED,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  FETCH_PHOTOS_LOADING,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILED,
  DS_LOADING,
  DS_LOAD_SUCCESS,
  DS_LOAD_FAILURE,
  LOGOUT_SUCCESS} from '../actions';

export const initialState = {
  user: {
    id:    '',
    email: '',
    photos: []
  },
  isLoggedIn: sessionStorage.getItem('token') ? true : false,
  error:      null,
  isFetching: false,
  isLoading:  false,
  trigger: 0
};

export const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case LOGIN_LOADING:
      return {
        ...state,
        isLoading:  true,
        isFetching: false,
        error:      null
      }
    case LOGIN_SUCCESS:
      sessionStorage.setItem( 'token', action.payload.token );
      return {
        ...state,
        user: { ...state.user,
          id: action.payload.id,
          email: action.payload.username
        },
        isLoading:  false,
        isLoggedIn: true,
        isFetching: false,
        error:      null
      }
    case LOGIN_FAILED:
      return {
        ...state,
        isLoading:  false,
        isFetching: false,
        error: action.payload
      }
    case LOGOUT_SUCCESS:
      sessionStorage.removeItem( 'token' );
      return {
        ...state,
        isLoading:  false,
        isFetching: false,
        error:      null
      }
    case REGISTER_LOADING:
      return {
        ...state,
        isLoading:  true,
        isFetching: false,
        error:      null
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading:  false,
        isLoggedIn: false,
        isFetching: false,
        error:      null
      }
    case REGISTER_FAILED:
      return {
        ...state,
        isLoading:  false,
        isFetching: false,
        error: action.payload
      }
    case FETCH_PHOTOS_LOADING:
      return {
        ...state,
        isLoading:  true,
        isFetching: false,
        error:      null
      }
    case FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          photos: action.payload
        },
        isLoading: false,
        isFetching: false,
        error: null
      }
    case FETCH_PHOTOS_FAILED:
      return {
        ...state,
        isLoading:  false,
        isFetching: false,
        error: action.payload
      }
    case DS_LOADING:
      return {
        ...state,
        isLoading:  true,
        isFetching: false,
        error:      null
      }
    case DS_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isFetching: false,
        error: null
      }
    case DS_LOAD_FAILURE:
      return {
        ...state,
        isLoading:  false,
        isFetching: false,
        error: action.payload
      }
    case ADD:
      const newPhoto         = {};
      newPhoto.faces_source  = action.payload.faces_source;
      newPhoto.hash          = action.payload.hash;
      newPhoto.id            = action.payload.id;
      newPhoto.original      = action.payload.original;
      newPhoto.user_id       = action.payload.user_id;
      newPhoto.resnet        = action.payload.resnet;
      newPhoto.yolov3        = action.payload.yolov3;
      newPhoto.yolov3_source = action.payload.yolov3_source;
      return {
        ...state,
        user: {
          ...state.user,
          photos: [ ...state.user.photos, newPhoto ]
        },
        error: null,
        trigger: state.trigger++
      }
    case ADD_FAILED:
      return {
        ...state,
        error: action.payload
      }
    case DELETE:
      return {
        ...state,
        user: {
          ...state.user,
          photos: state.user.photos.filter( photo => photo.id !== action.payload ),
        },
        error: null
      }
    case DELETE_FAILED:
      return {
        ...state,
        error: action.payload
      }
    default: return state;
  }
};


/* full user object layout
user: {
  id:    '',
  email: '',
  photos: [ {
    id:            '',
    user_id:       '',
    original:      '',
    hash:          '',
    faces_source:  '',
    resnet:        {},
    yolov3:        {},
    yolov3_source: ''
  } ]
}
*/