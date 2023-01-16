/** @format */

// import { INCREMENT, DECREMENT, RESET } from "../constant";

const initialState = {
  count: 0,
  stepValue: 1,
  maxValue: null,
  message: ``,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case `DECREMENT`:
      return {
        ...state,
        count: state.count - state.stepValue,
        message: ``,
      };
    case `INCREMENT`:
      if (
        state.maxValue !== null &&
        state.count + state.stepValue > state.maxValue
      ) {
        return {
          ...state,
          message: ` max limit exceed`,
        };
      }
      return {
        ...state,
        count: state.count + state.stepValue,
        message: ``,
      };
    case `RESET`:
      return {
        count: 0,
        stepValue: 1,
        maxValue: null,
        message: ``,
      };

    case `step`:
      return {
        ...state,
        stepValue: action.stepValue === state.stepValue ? 1 : action.stepValue,
        message: ``,
      };

    case `max`:
      return {
        ...state,
        maxValue: action.maxValue === state.maxValue ? null : action.maxValue,
        message: ``,
      };
    default:
      return state;
  }
};

export default countReducer;
