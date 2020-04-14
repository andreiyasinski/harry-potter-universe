import { GET_FACULTY_REQUEST, GET_FACULTY_SUCCESS, GET_FACULTY_FAILURE } from '../actions';

const initialState  = {
  name: '',
  isFetching: false,
  error: null,
};

const faculty = (state = initialState, action) => {
  switch (action.type) {
    case GET_FACULTY_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_FACULTY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        name: action.payload.name,
      };
    case GET_FACULTY_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };
    default:
      return state
  }
}

export default faculty;