import logo from './logo.svg';
import './App.css';
import Exercises from './components/Exercises/Exercises';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className='row'>
      <Exercises></Exercises>
      <Profile></Profile>
    </div>
  );
}

export default App;
