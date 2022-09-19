import React,{Component} from "react";
import Box from "./Box";
import './BoxContainer.css';

class BoxContainer extends Component{
    static defaultProps = {
        bkgColor : [
            'red','blue','green','yellow','orange','brown','black','purple','pink'
        ],
        boxNum : 18
    }
    // constructor(props){
    //     super(props);
    //     this.state = {bkgClr : Random(this.props.bkgColor)}
    // }
    render(){
        const boxes = Array.from({length: this.props.boxNum}).map(() =>(
            <Box colors={this.props.bkgColor}/>
        ))
        return(
            <div className="Container">
                {boxes}
            </div>
        );
    }
}

export default BoxContainer;