import React from 'react';
import Square from './Square';
import Grid from '@material-ui/core/Grid';

interface Props {
    squares: Array<string>,
    onClick: (i:number)=> void
}

interface State {
    squares: Array<string>,
    xIsNext: boolean
}

export class Board extends React.Component<Props, State>{

    state = {
        squares: Array(9).fill(""),
        xIsNext: true
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
                    value={this.props.squares[i]}
                    onClick={() => this.props.onClick(i)} />
                {this.renderSquare(i + 1)}
                {this.renderSquare(i + 2)}
            </Grid>
        } else if (i <= 8) {
            return <Square
                key={i}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)} />
        }
    }

    render() {
        
        return (
            <div >
                <Grid item xs={12}></Grid>
                {/* render game table */}
                {[0, 3, 6].map(val => this.renderSquare(val))}
                {/* reset button  */}
                

            </div>
        );
    }

}

export default Board;