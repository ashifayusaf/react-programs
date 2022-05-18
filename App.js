import { useState } from 'react';
import './App.css';
import BmiList from './components/BmiList';
import Form from './components/Form';
import BmiScore from './components/Form';

function App() {
  const [bmi, setbmi] = useState(18)
 // let bmi=18;
  const ChangeBmi=()=>{
    setbmi(19+10)
   // bmi=19;
    console.log(bmi);

  }
  return (
    <>
    <div>bmi Calculator</div>
    <div>my bmi is {bmi}</div>
    <div>my bmi is {bmi}</div>
    <button onClick={ChangeBmi}>Click</button>
    <Form/>
    <BmiScore/>
    <BmiList/>
    </>
  );
}

export default App;
