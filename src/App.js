import './App.css';

import MyBtn from './components/MyBtn';

function App() {
  // state - to kompnento busenos duomenys
  const myArr = ['green', 'blue', 'red'];
  console.log('App.js componentas');
  return (
    <div>
      <h2>App</h2>
      <ul>
        {myArr.map((c, idx) => (
          <li key={idx}>{c}</li>
        ))}
      </ul>
      <MyBtn />
    </div>
  );
}

export default App;
