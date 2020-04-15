import axios from "axios";
export const GET_FACULTY_REQUEST = 'GET_FACULTY_REQUEST';
export const GET_FACULTY_SUCCESS = 'GET_FACULTY_SUCCESS';
export const GET_FACULTY_FAILURE = 'GET_FACULTY_FAILURE';

export const getFacultyRequest = () => {
  return {
    type: GET_FACULTY_REQUEST
  }
}

export const getFacultySuccess = (name) => ({
  type: GET_FACULTY_SUCCESS,
  payload: {
    name
  },
});

export const getFacultyFailure = (error) => ({
  type: GET_FACULTY_FAILURE,
  payload: {
    error,
  },
});

export const getFaculty = () => (dispatch) => {
  dispatch(getFacultyRequest());

  return axios(`https://www.potterapi.com/v1/sortingHat?key=$2a$10$yKgF8QD9Uz5dAGtiJ46VcumjgC.X2vuQhIBuIfZRtv9z45oLH.jkS`)
    .then((response) => {
      dispatch(getFacultySuccess(response.data));
    })
    .catch((err) => {
      dispatch(getFacultyFailure(err));
    });
};

export const GET_CHARACTERS_REQUEST = 'GET_CHARACTERS_REQUEST';
export const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS';
export const GET_CHARACTERS_FAILURE = 'GET_CHARACTERS_FAILURE';

export const getCharactersRequest = () => {
  return {
    type: GET_CHARACTERS_REQUEST
  }
}

export const getCharactersSuccess = (items) => ({
  type: GET_CHARACTERS_SUCCESS,
  payload: {
    items
  },
});

export const getCharactersFailure = (error) => ({
  type: GET_CHARACTERS_FAILURE,
  payload: {
    error,
  },
});

export const getCharacters = () => (dispatch) => {
  dispatch(getCharactersRequest());
  
  return axios(`https://www.potterapi.com/v1/characters?key=$2a$10$yKgF8QD9Uz5dAGtiJ46VcumjgC.X2vuQhIBuIfZRtv9z45oLH.jkS`)
    .then((response) => {
      dispatch(getCharactersSuccess(response.data));
    })
    .catch((err) => {
      dispatch(getCharactersFailure(err));
    });
};

export const INCREASE_CARD_AMOUNT = 'INCREASE_CARD_AMOUNT';

export const increaseCardAmount = (amount) => ({
  type: INCREASE_CARD_AMOUNT,
  payload: {
    amount
  },
});