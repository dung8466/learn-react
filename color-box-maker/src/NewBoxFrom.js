import React, {Component} from "react";
// import uuid from 'uuid';
import {v4 as uuid} from "uuid";
class NewBoxForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            height: '',
            width: '',
            backgroundColor: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSubmit(evt){
        evt.preventDefault();
        const newBox = {...this.state,id: uuid()}
        this.props.createBox(newBox);
        this.setState({
            height: '',
            width: '',
            backgroundColor: ''
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="height">height</label>
                <input id='height' type='text' name="height" value={this.state.height} onChange={this.handleChange}/>
                <label htmlFor="width">width</label>
                <input id='width' type='text' name="width" value={this.state.width} onChange={this.handleChange}/>
                <label htmlFor="backgroundColor">backgroundColor</label>
                <input id='backgroundColor' type='text' name="backgroundColor" value={this.state.backgroundColor} onChange={this.handleChange}/>
                <button>Add new box!</button>
            </form>
        );
    }
}

export default NewBoxForm;