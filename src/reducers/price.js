import { PRICE } from '../actions/price';

const initialState = { val: 20200 };
const price = (state = initialState, action) => {
  switch (action.type) {
    case PRICE:
      return { val: state.val + 1 };
    default:
      return state;
  }
};

export default price;
