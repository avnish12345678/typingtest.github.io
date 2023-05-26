export const START_TYPING = 'START_TYPING';
export const UPDATE_INPUT = 'UPDATE_INPUT';
export const FINISH_TYPING = 'FINISH_TYPING';

export const startTyping = () => ({
  type: START_TYPING,
});

export const updateInput = (input) => ({
  type: UPDATE_INPUT,
  payload: input,
});

export const finishTyping = () => ({
  type: FINISH_TYPING,
});
