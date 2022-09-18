import React, {Componet} from "react";
import Lotto from "./Lotto";
import './Lotto.css';

class LotteryBall extends Componet{
    render(){
        return(
            <div className="ball">{this.props.nums}</div>
        );
    }
}

export default LotteryBall;