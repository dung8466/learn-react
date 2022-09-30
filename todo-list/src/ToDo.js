import React, {Component} from 'react';
import './ToDo.css';
import img0 from './remove.png';
import img1 from './edit.png';
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import img3 from './floppy-disk.png'
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
                    <form onSubmit={this.handleSubmit} className='editForm'>
                        <input 
                            type='text' 
                            value={this.state.task}
                            name='task'
                            onChange={this.handleChange}
                        />
                        <button className='save'>
                            <img src={img3} alt='Save to list'/>
                        </button>
                    </form>
                </div>
            )
        }
        else{
            result = (
                <div className='todo'>
                    <input type='checkbox' onClick={this.handleDone}/>
                    <li className={this.props.checked ? 'Todo_completed' : 'Todo'}>
                        <p>
                            {this.props.task}
                        </p>
                    </li>
                     <div className='btn'>
                        <button onClick={this.handleEdit} className={this.props.checked ? 'noEdit' : 'edit'}>
                            <img src={img1} alt='Edit ToDo'/>
                        </button>
                        <button onClick={this.handleRemove} className='delete'>
                            <img src={img0} alt='Delete ToDo'/>
                        </button>
                    </div> 
                </div>
            )
        }
        return(
            result
        );
    }
}
export default ToDo;