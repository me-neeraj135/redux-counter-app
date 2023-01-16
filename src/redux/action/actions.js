/** @format */

export const decrement = () => {
  return {
    type: `DECREMENT`,
  };
};

export const increment = () => {
  return {
    type: `INCREMENT`,
  };
};

export const reset = () => {
  return {
    type: `RESET`,
  };
};

export const step = (stepValue = 1) => {
  return {
    type: `step`,
    stepValue,
  };
};

export const max = (maxValue = null) => {
  return {
    type: `max`,
    maxValue: maxValue,
  };
};
