import React, {FunctionComponent} from 'react';
import Button from '@material-ui/core/Button';


interface Props{
    value: string,
    onClick: ()=> void
}

export const Square:FunctionComponent<Props> = (props:Props) => {
    return (
        
        <Button 
            variant="contained"
            className="ticTacButton"
            onClick={ ()=>props.onClick() }>
            {props.value}
        </Button>
    );
}

export default Square;