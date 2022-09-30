import React, {Component} from "react";
import './ToDoList.css';
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class ToDoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos: []
        };
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.edit = this.edit.bind(this);
        this.done = this.done.bind(this);
    }
    create(newToDo){
        this.setState({
            todos: [...this.state.todos, newToDo]
        })
    }
    remove(id){
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }
    edit(id, newTask){
        const newToDo = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, task: newTask}
            }
            return todo;
        });
        this.setState({
            todos: newToDo
        })
    }
    done(id){
        const newToDo = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, checked: !todo.checked}
            }
            return todo;
        });
        this.setState({
            todos: newToDo
        })
    }
    render(){
        let todos = this.state.todos.map(todo => {
            return <ToDo 
                        task={todo.task} 
                        key={todo.id} 
                        id={todo.id}
                        checked={todo.checked}
                        removeToDo={this.remove}
                        editToDo={this.edit} 
                        completeToDo={this.done}
                    />
        })
        return(
            <div className="Container">
                <h1> 
                    ToDo List!
                    <span>Just do it!</span>
                </h1>
                <ToDoForm createNew={this.create}/>
                <ul>
                    {todos}
                </ul>
                
            </div>
        );
    }
}
export default ToDoList;