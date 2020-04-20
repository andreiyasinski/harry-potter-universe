import axios from "axios";
export const GET_FACULTY_REQUEST = "GET_FACULTY_REQUEST";
export const GET_FACULTY_SUCCESS = "GET_FACULTY_SUCCESS";
export const GET_FACULTY_FAILURE = "GET_FACULTY_FAILURE";

export const getFacultyRequest = () => {
  return {
    type: GET_FACULTY_REQUEST,
  };
};

export const getFacultySuccess = (name) => ({
  type: GET_FACULTY_SUCCESS,
  payload: {
    name,
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

  return axios(
    `https://www.potterapi.com/v1/sortingHat?key=$2a$10$yKgF8QD9Uz5dAGtiJ46VcumjgC.X2vuQhIBuIfZRtv9z45oLH.jkS`
  )
    .then((response) => {
      dispatch(getFacultySuccess(response.data));
    })
    .catch((err) => {
      dispatch(getFacultyFailure(err));
    });
};
