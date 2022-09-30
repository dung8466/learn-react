import React, {Component} from "react";
import './ToDoForm.css';
import {v4 as uuid} from "uuid";
import img2 from './plus.png'
class ToDoForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            task: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    handleSubmit(evt){
        evt.preventDefault();
        this.props.createNew({...this.state, id: uuid(), checked: false});
        this.setState({
            task: ''
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit} className='formContain'>
                <label htmlFor="task">New ToDo:</label>
                <input 
                    id="task" 
                    name="task" 
                    type='text' 
                    value={this.state.task} 
                    placeholder="New ToDo"
                    onChange={this.handleChange}    
                />
                <button className="add">
                    <img src={img2} alt='Add new todo'/>
                </button>
            </form>
        );
    }
}

export default ToDoForm;