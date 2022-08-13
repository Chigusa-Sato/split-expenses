import { COUNTPLUS, COUNTMINUS } from '../actions';

const initialState = { val: 0 };
const counter = (state = initialState, action) => {
  switch (action.type) {
    case COUNTPLUS:
      return { val: state.val + 1 };
    case COUNTMINUS:
      return { val: state.val - 1 };
    default:
      return state;
  }
};

export default counter;
