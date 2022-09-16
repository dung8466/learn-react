import React, {Component} from "react";
import './Button.css'
class Button extends Component{
    constructor(props){
        super(props);
        this.state.number = 0;
        this.state.isClicked = false;
        this.handleClick = this.handleClick.bind(this);
    };
    handleClick(e){
        this.setState({isClicked:true})
    }
    render(){
        return(
            <div className="Container">
                <p className="num">{this.state.number}</p>
                <button onClick={this.handleClick}> Click me </button>
            </div>
        );
    }
}

export default Button;