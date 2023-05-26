import { combineReducers } from 'redux';
import {
  START_TYPING,
  UPDATE_INPUT,
  FINISH_TYPING,
} from './actions';

const initialState = {
  expectedKeys: 'asdfjkl;',
  input: '',
  count: 0,
  accuracy: 100,
  finished: false,
};

const typingReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TYPING:
      return {
        ...state,
        count: 0,
        accuracy: 100,
        finished: false,
      };
    case UPDATE_INPUT:
      return {
        ...state,
        input: action.payload,
        count: state.count + 1,
      };
    case FINISH_TYPING:
      const accuracy = calculateAccuracy(
        state.input,
        state.expectedKeys,
        state.count
      );
      return {
        ...state,
        accuracy,
        finished: true,
      };
    default:
      return state;
  }
};

const calculateAccuracy = (input, expectedKeys, count) => {
  let errors = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== expectedKeys[i]) {
      errors++;
    }
  }
  return ((count - errors) / count) * 100;
};

export default combineReducers({
  typing: typingReducer,
});
