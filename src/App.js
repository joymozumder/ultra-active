import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile/Profile';
import { useState } from 'react';
import Club from './components/Club/Club';
import QuestionAnswer from './components/QuestionAnswer/QuestionAnswer';

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
      <QuestionAnswer></QuestionAnswer>
    </div>
  );
}

export default App;
