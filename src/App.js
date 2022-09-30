import logo from './logo.svg';
import './App.css';

import Club from './components/Club/Club';
import QuestionAnswer from './components/QuestionAnswer/QuestionAnswer';

function App() {

  
  return (
    <div className='container-fluid'>
      <Club></Club>
      <QuestionAnswer></QuestionAnswer>
    </div>
  );
}

export default App;
