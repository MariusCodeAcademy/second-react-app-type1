import { useState } from 'react';
function Counter(props) {
  const [counterValue, setCounterValue] = useState(0);
  const onIncrement = () => {
    console.log('onIncrement');
    setCounterValue(counterValue + 1);
  };
  const onDecrement = () => {
    console.log('onDecrement');
    setCounterValue(counterValue - 1);
  };

  const counterClasses = () => {
    let totalClasses = 'counter-container ';
    if (counterValue < 0) {
      totalClasses += 'counter-negative ';
    }
    // prideti 'counter-positive' kai counteris didesnis uz 0
    return totalClasses;
  };

  return (
    <article className={counterClasses()}>
      <h2 className='counter__title'>
        <span>Counter</span>
        {props.title}
      </h2>
      <h3>{counterValue}</h3>
      <button onClick={onIncrement}>Increase</button>
      <button onClick={onDecrement}>Decrease</button>
    </article>
  );
}
export default Counter;
