import React, {Component} from "react";
import './Button.css'
class Button extends Component{
    constructor(props){
        super(props);
        this.state = {number : 0, isClicked : false}
        this.handleClick = this.handleClick.bind(this);
    };
    handleClick(e){
        this.setState({isClicked:true})
    }
    render(){
        return(
            <div className="Container">
                <p className="num">The number : {this.state.number}</p>
                <button onClick={this.handleClick}> Click me </button>
            </div>
        );
    }
}

export default Button;