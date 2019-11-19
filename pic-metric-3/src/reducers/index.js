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
  REGISTER_FAILED} from '../actions';

export const initialState = {
  user: {
    id: '',
    photos: [ {
      id: '',
      url: '',
      pred: [ {
        id: 'resnet',
        data: {}
      } ]
    } ]
  },
  isLoggedIn: sessionStorage.getItem('token') ? true : false,
  error: null,
  isFetching: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        isFetching: false,
        error: null
      }
    case LOGIN_SUCCESS:
      sessionStorage.setItem('token', action.payload);
      return {
        ...state,
        isLoggedIn: true,
        isFetching: false,
        error: null
      }
    case LOGIN_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case REGISTER_LOADING:
      return {
        ...state,
        isFetching: false,
        error: null
      }
    case REGISTER_SUCCESS:
      sessionStorage.setItem('token', action.payload);
      return {
        ...state,
        isLoggedIn: true,
        isFetching: false,
        error: null
      }
    case REGISTER_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case ADD:
      return {
        ...state,
        photos: [...state.photos, action.payload],
        error: null
      }
    case ADD_FAILED:
      return {
        ...state,
        error: action.payload
      }
    case DELETE:
      return {
        ...state,
        photos: state.photos.filter(photo => photo.id !== action.payload.data),
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
