import React from 'react';
import Square from './Square';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';



interface State {
    squares: Array<string>,
    xIsNext: boolean
}

export class Board extends React.Component<{}, State>{

    state = {
        squares: Array(9).fill(""),
        xIsNext: true
    }

    handleClick(i: number) {
        const squares = this.state.squares.slice();
        //Check if the game is still going or check if this box had been clicked
        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';

        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });
    }
    //Reset
    playAgain() {
        this.setState({
            squares: Array(9).fill(""),
            xIsNext: true
        })
    }

    renderSquare(i: number) {
        //let i = 0;
        if ((i + 1) % 3 === 1) {
            return <Grid 
            item xs={12} 
            key={i}
            className="paddingTB0">
                <Square
                    key={i}
                    value={this.state.squares[i]}
                    onClick={() => this.handleClick(i)} />
                {this.renderSquare(i + 1)}
                {this.renderSquare(i + 2)}
            </Grid>
        } else if (i <= 8) {
            return <Square
                key={i}
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)} />
        }
    }

    render() {
        const winner = calculateWinner(this.state.squares)
        let status: string;
        if (winner) {
            status = "Winner: " + winner;
        } else {
            status = "Next Plater: " + (this.state.xIsNext ? "X" : "O");
        }
        return (
            <Grid container spacing={3}>
                <Grid item xs={12}>{status}</Grid>
                {/* render game table */}
                <Paper>

                {[0, 3, 6].map(val => this.renderSquare(val))}
                </Paper>
                {/* reset button  */}
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => this.playAgain()}
                    >Play Again</Button>
                </Grid>

            </Grid>
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

export default Board;