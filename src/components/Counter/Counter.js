import { useState } from 'react';
function Counter() {
  const [counterValue, setCounterValue] = useState(10);
  const onIncrement = () => {
    console.log('onIncrement');
    setCounterValue(counterValue + 1);
  };
  const onDecrement = () => {
    console.log('onDecrement');
    setCounterValue(counterValue - 1);
  };

  return (
    <article className='counter-container'>
      <h2>Counter 1</h2>
      <h3>{counterValue}</h3>
      <button onClick={onIncrement}>Increase</button>
      <button onClick={onDecrement}>Decrease</button>
    </article>
  );
}
export default Counter;
