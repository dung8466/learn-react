import React, {Component} from "react";
import Lotto from "./Lotto";
import './Lotto.css';

class LotteryBall extends Component{
    render(){
        return(
            <div className="ball">{this.props.nums}</div>
        );
    }
}

export default LotteryBall;