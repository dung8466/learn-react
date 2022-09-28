import React, {Component} from "react";
import Box from './Box';
import NewBoxForm from "./NewBoxFrom";
class BoxList extends Component{

    constructor(props){
        super(props);
        this.state = {boxes: []};
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this)
    }
    create(newBox){
        this.setState({
            boxes: [...this.state.boxes, newBox]
        })
    }
    remove(id){
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)
        })
    }
    render(){
        let boxes = this.state.boxes.map(box => (
            <Box key={box.id} id={box.id} height={box.height} width={box.width} backgroundColor={box.backgroundColor} removeBox={this.remove}/>
        ))
        return(
            <div>
                <NewBoxForm createBox={this.create}/>
                {boxes}
            </div>
        );
    }
}

export default BoxList;