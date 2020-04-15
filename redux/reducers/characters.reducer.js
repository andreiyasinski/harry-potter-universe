import { GET_CHARACTERS_REQUEST, GET_CHARACTERS_SUCCESS, GET_CHARACTERS_FAILURE} from '../actions';

const initialState  = {
  items: [],
  isFetching: false,
  error: null,
};

const characters = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.payload.items,
      };
    case GET_CHARACTERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };
    default:
      return state
  }
}

export default characters;