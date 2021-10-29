import './App.css';
import CounterList from './components/Counter/CounterList';

// import MyBtn from './components/MyBtn';

function App() {
  // state - to kompnento busenos duomenys
  const myArr = ['green', 'blue', 'red'];
  console.log('App.js componentas');
  return (
    <div>
      <h2>App</h2>
      <CounterList />
    </div>
  );
}

export default App;
