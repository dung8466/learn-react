import React, {Component} from "react";
import './Button.css'
class Button extends Component{
    constructor(props){
        super(props);
        this.state = {number : 0}
        this.handleClick = this.handleClick.bind(this);
    };
    handleClick(e){
        this.setState({number : (Math.floor(Math.random() *10))});
        }
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