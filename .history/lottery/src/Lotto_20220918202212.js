import React, {Component} from "react";
import './Lotto.css';
import LotteryBall from "./LotteryBall";

class Lotto extends Component{
    static defaultProps = {
        title : Lotto,  
        numBall : 6,
        maxNum: 99
    };
    constructor(props){
        super(props);
        this.state = {nums : []}
    }
    render(){
        return(
            <LotteryBall nums={6}/>
        );        
    }
}

export default Lotto;