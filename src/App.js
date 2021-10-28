import './App.css';
// import MyBtn from './components/MyBtn';

function App() {
  const userIsLoggedIn = true;
  return (
    <div>
      <h2>App</h2>
      <div className='controll'>
        {userIsLoggedIn === true ? <button>Go to About</button> : ''}
      </div>
    </div>
  );
}

export default App;
