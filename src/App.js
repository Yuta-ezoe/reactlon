import './App.css';
import { Button } from '@material-ui/core';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>React + Electron DEMO</p>
        <Button color="primary" onClick={Click_Button}>Hello World</Button>
      </header>
    </div>
  );
}

function Click_Button() {
  console.log(window.ipcRenderer.send('message','ping'))
  window.ipcRenderer.on('asynchronous-reply', (event, arg) => {
    console.log(arg) // prints "pong"
  })
} 

export default App;