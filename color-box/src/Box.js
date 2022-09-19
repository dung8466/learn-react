import React,{Component} from "react";
import './Box.css';
import Random from './Random';
class Box extends Component{
    constructor(props){
        super(props);
        this.state = {
            bgClr : Random(this.props.colors)
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        let newClr;
        do{
            newClr = Random(this.props.colors);
        } while(newClr === this.props.bgClr)
        this.setState({bgClr : newClr})
    }
    render(){
        return(
            <div className="box" 
            style={{backgroundColor: this.state.bgClr}}
            onClick={this.handleClick}/>
        );
    }
}

export default Box;