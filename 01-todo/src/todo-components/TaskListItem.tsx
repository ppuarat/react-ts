import React, {FunctionComponent} from 'react';
import {Task} from '../models/tasks';

interface Props{
    task:Task,
    onDelete: (task:Task)=>void
}
//TypeScript Class is now working with this code
export const TaskListItem:FunctionComponent<Props> = ({task, onDelete})=>{

    //TypeScript class has a ploblem when calling this(undefined) in onClick method
    const onClick = () => {
        onDelete(task);
    }

   
    return(
        <li>
            {task.name} <button onClick={onClick}>X</button>
        </li>
    );
    
}
