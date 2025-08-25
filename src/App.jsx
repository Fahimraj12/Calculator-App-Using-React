import styles from './App.module.css'
import Display from './components/display'
import ButtonsContainer from './components/ButtonsContainer'
import { useState } from 'react'
function App() {
  const [calval, setcalval] = useState("");
  const onButtonClick = (buttonText) => {
    if(buttonText === 'AC'){
      setcalval("");
    }
    else if(buttonText === '='){
      const result = eval(calval);
      setcalval(result);
    }
    else{
      const newDisplayValue = calval + buttonText;
      setcalval(newDisplayValue);
    }
  }
  return (
    <center>
      <h1>The Calculator App Using React.</h1>
      <div className={styles.calculator}>
        <Display displayValue={calval}></Display>  
        <ButtonsContainer onButtonClick={ onButtonClick }></ButtonsContainer>
      </div>
    </center>
  )
}

export default App
