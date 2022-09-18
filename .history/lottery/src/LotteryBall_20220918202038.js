import React, {Componet} from "react";
import Lotto from "./Lotto";
import './Lotto.css';

class LotteryBall extends Componet{
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
            <LotteryBall nums={4}/>
        );
    }
}

export default LotteryBall;