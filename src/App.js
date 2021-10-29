import './App.css';
import Counter from './components/Counter/Counter';

// import MyBtn from './components/MyBtn';

function App() {
  // state - to kompnento busenos duomenys
  const myArr = ['green', 'blue', 'red'];
  console.log('App.js componentas');
  return (
    <div>
      <h2>App</h2>
      <Counter />
    </div>
  );
}

export default App;
