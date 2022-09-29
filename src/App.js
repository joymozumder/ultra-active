import logo from './logo.svg';
import './App.css';
import Exercises from './components/Exercises/Exercises';
import Profile from './components/Profile/Profile';
import { useState } from 'react';
import Club from './components/Club/Club';

function App() {

  const [list, setList] = useState([]);

  const handleAddToList = (exercise) => {
    console.log(exercise);
      const newList = [...list, exercise];
        setList(newList);
    };
  return (
    <div>
      <Club></Club>
    </div>
  );
}

export default App;
