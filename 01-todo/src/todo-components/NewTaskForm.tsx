import React from 'react';
import {Task} from '../models/tasks';

interface Props{
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
    task: Task;
}

export class  NewTaskForm extends React.Component<Props>{
    constructor(props:Props){
        super(props);
    }
    render(){

        //const {onAdd, onChange, task} = this.props;
        return(
            <form onSubmit={this.props.onAdd}>
                <div className="box">
                    <input type="text" onChange={this.props.onChange} value={this.props.task.name} />

                </div>
                <div className="box">
                    <button className="addBTN" type="submit">Add a task</button>

                </div>
            </form>
        )
    }
}