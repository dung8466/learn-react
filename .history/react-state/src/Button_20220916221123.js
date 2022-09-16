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
    };
    render(){
        return(
            <div className="Container">
                <h1>The number : {this.state.number}</h1>
                {this.state.number === 7 ? 
                    <h2>You Win</h2>   
                    : <button onClick={this.handleClick}> Click me </button>
                }
            </div>
        );
    }
}

export default Button;