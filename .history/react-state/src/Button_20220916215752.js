import React, {Component} from "react";
import './Button.css'
class Button extends Component{
    constructor(props){
        super(props);
        this.state = {isClicked : false};
        this.handleClick = this.handleClick.bind(this);
    };
    handleClick(e){
        this.setState({isClicked:true})
    }
    render(){
        return(
            <button onClick={this.handleClick}> Click me </button>
        );
    }
}

export default Button;