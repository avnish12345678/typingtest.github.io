import { put, takeEvery, delay } from 'redux-saga/effects';
import { START_TYPING } from './actions';
import { finishTyping } from './actions';

function* typingSaga() {
  yield takeEvery(START_TYPING, startTimer);
}

function* startTimer() {
  yield delay(300000); // 5 minutes delay
  yield put(finishTyping());
}

export default function* rootSaga() {
  yield typingSaga();
}
