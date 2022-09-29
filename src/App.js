import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile/Profile';
import { useState } from 'react';
import Club from './components/Club/Club';
import QuestionAnswer from './components/QuestionAnswer/QuestionAnswer';

function App() {

  
  return (
    <div>
      <Club></Club>
      <QuestionAnswer></QuestionAnswer>
    </div>
  );
}

export default App;
