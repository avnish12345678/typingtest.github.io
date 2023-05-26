import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { startTyping, updateInput, finishTyping } from './actions';

const App = ({ expectedKeys, input, count, accuracy, startTyping, updateInput, finishTyping, finished }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    startTyping();
    inputRef.current.focus();
  }, [startTyping]);

  useEffect(() => {
    if (!finished) return;

    finishTyping();
  }, [finished, finishTyping]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    updateInput(value);
  };

  return (
    <div>
      <h1>Touch Typing Practice</h1>
      <div>
        <h2>Type the following keys:</h2>
        <p>{expectedKeys}</p>
      </div>
      <div>
        <h2>Your input:</h2>
        <input type="text" value={input} onChange={handleInputChange} ref={inputRef} />
      </div>
      <div>
        <h2>Keys pressed: {count}</h2>
        <h2>Accuracy: {accuracy.toFixed(2)}%</h2>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  expectedKeys: state.typing.expectedKeys,
  input: state.typing.input,
  count: state.typing.count,
  accuracy: state.typing.accuracy,
  finished: state.typing.finished,
});

const mapDispatchToProps = {
  startTyping,
  updateInput,
  finishTyping,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

