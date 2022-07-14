import react,{useState,useEffect} from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import colors from './theming/colors'
import { Button } from './components/button';
import { Clock } from './components/clock';


function App() {

  const [running,setRunning] = useState(false)
  
  const GlobalStyle = createGlobalStyle`
    body{
      background-color:${colors.background};
      color:${colors.primary};
      text-align:center;
    }
  `

    const handleRun = ()=>{
      setRunning(true)
    }

    const handleStop = ()=>{
      setRunning(false)
    }


  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={colors}>

        <h1>Chronometer</h1>
        <Clock run={running}/>
        <Button disabled={running} onClick={handleRun}>START</Button>
        <Button disabled={!running} onClick={handleStop}>STOP</Button>
        <Button >TIMESTAMP</Button> 
        <Button >RESET</Button> 
      </ThemeProvider>
    </>
  );
}

export default App;
