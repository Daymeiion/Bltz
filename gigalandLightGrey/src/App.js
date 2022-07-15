import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Navigate } from 'react-router-dom';




function App() {
  return (
    <Router>
      <div className="App">
    
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <switch> 
          <route> path ="/home4"

          </route>
        </switch>

      </div>


    </Router>
  );
}

export default App;
