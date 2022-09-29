import logo from './logo.svg';
import './App.css';
import Exercises from './components/Exercises/Exercises';
import Profile from './components/Profile/Profile';
import { useState } from 'react';

function App() {

  const [list, setList] = useState([]);

  const handleAddToList = (exercise) => {
    console.log(exercise);
      const newList = [...list, exercise];
        setList(newList);
    };
  return (
    <div className="row">
      <Exercises handleAddToList={handleAddToList}></Exercises>
      <Profile list = {list}></Profile>
    </div>
  );
}

export default App;
