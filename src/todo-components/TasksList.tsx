import React from 'react';
import {Task} from '../models/tasks';

import {TaskListItem} from './TaskListItem';

interface Props{
    tasks: Task[],
    onDelete: (task:Task) => void;
}

export class TasksList extends React.Component<Props>{

    constructor(props:Props){
        super(props);
    }

    render(){
        return(
            <ul>
                {this.props.tasks.map(task =>(
                    <TaskListItem task={task} onDelete={this.props.onDelete}/>
                ))}
            </ul>
        )
    }
}
