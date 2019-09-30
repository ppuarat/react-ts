import React from 'react';
import './App.css';
import Board from './components/Board'

class App extends React.Component {


  render() {
    return (
      <div>
        <div className="hello">
          <h1>Hello React!!</h1>
        </div>
        <div className="gameBoard">
          <Board />
        </div>
      </div>
    );
  }
}

export default App;
