import React, {FunctionComponent} from 'react';
import {Task} from '../models/tasks';

interface Props{
    task:Task,
    onDelete: (task:Task)=>void
}

export const TaskListItem:FunctionComponent<Props> = ({task, onDelete})=>{

    const onClick = () => {
        console.log("OnClick : ");
        onDelete(task);
    }

   
    return(
        <li>
            {task.name} <button onClick={onClick}>X</button>
        </li>
    );
    
}
