import React, {Component} from "react";

class Button extends Component{
    constructor(props){
        super(props);
        this.state = {isClicked : false}
    };
    handleClick(e){
        this.setState({isClicked:true})
    }
    render(){
        return(
            <button onClick={}
        );
    }
}