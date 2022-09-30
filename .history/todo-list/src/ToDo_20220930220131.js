import React, {Component} from 'react';
import './ToDo.css';
import img0 from './remove.png';
import img1 from './edit.png';
import { CSSTransition, TransitionGroup } from "react-transition-group";

class ToDo extends Component{
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDone = this.handleDone.bind(this);
    }
    handleRemove(){
        this.props.removeToDo(this.props.id)
    }
    handleEdit(){
        this.setState({
            isEditing: !this.state.isEditing
        })
    }
    handleSubmit(evt){
        evt.preventDefault();
        this.props.editToDo(this.props.id, this.state.task);
        this.handleEdit();
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    handleDone(){
        this.props.completeToDo(this.props.id)
    }
    render(){
        let result;
        if(this.state.isEditing){
            result = (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type='text' 
                            value={this.state.task}
                            name='task'
                            onChange={this.handleChange}
                        />
                        <button>SAVE</button>
                    </form>
                </div>
            )
        }
        else{
            result = (
                <div className='todo'>
                    <input type='checkbox' onClick={this.handleDone}/>
                    <li className={this.props.checked ? 'Todo_completed' : 'Todo'}>{this.props.task}</li>
                    <button onClick={this.handleEdit}>EDIT</button>
                    <button onClick={this.handleRemove}>DELETE</button>
                </div>
            )
        }
        return(
            result
        );
    }
}
export default ToDo;