import React from 'react';
import './App.css';
import Board from './components/Board'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


class App extends React.Component {

  //constructor set default state
  state = {
    history: [{
      squares: Array(9).fill("")
    }],
    stepNumber: 0,
    xIsNext: true
  }

  handleClick(i: number) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    //Check if the game is still going or check if this box had been clicked
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step: number) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  //Reset
  playAgain() {
    this.setState({
      history: [{
        squares: Array(9).fill("")
      }],
      stepNumber: 0,
      xIsNext: true
    })
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <Button
            onClick={() => this.jumpTo(move)}
            color="secondary"
            variant="outlined">{desc}</Button>
        </li>
      );
    });

    let status;

    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div>
        <div className="hello">
          <h1>Hello React!!</h1>
        </div>
        <Grid item xs={12}>
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)} />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.playAgain()}
          >Play Again</Button>
        </Grid>
        <Grid item xs={12}>
          {status}
        </Grid>
        <Grid item xs={12}>
          {moves}
        </Grid>
      </div>
    );
  }
}

function calculateWinner(squares: Array<string>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


export default App;
