import { INCREASE_CARD_AMOUNT } from '../actions';

const initialState  = {
  amount: 20
};

const cardAmount = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_CARD_AMOUNT:
      return {
        ...state,
        amount: state.amount + action.payload.amount,
      };
    default:
      return state
  }
}

export default cardAmount;