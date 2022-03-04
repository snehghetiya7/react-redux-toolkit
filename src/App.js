import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, addByNumber } from '../src/store/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    if (event.target.name === 'increment') {
      dispatch(increment());
    }
    else if (event.target.name === 'decrement') {
      dispatch(decrement());
    }
    else if (event.target.name === 'reset') {
      dispatch(reset());
    }
    else if (event.target.name === 'addByNumber') {
      dispatch(addByNumber(5));
    }
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button name="increment" onClick={(event) => handleClick(event)}>Increment</button>
      <button name="decrement" onClick={(event) => handleClick(event)}>Decrement</button>
      <button name="reset" onClick={(event) => handleClick(event)}>Reset</button>
      <button name="addByNumber" onClick={(event) => handleClick(event)}>Add by 5</button>
    </div>
  );
}

export default App;
