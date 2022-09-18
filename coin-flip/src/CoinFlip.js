import React,{Component} from "react";
import Coin from "./Coin";
import './CoinFlip.css';

class CoinFlip extends Component{
    static defaultProps = {
        coin: [
            {side: 'heads', imgSrc: 'https://lenadesign.org/wp-content/uploads/2020/06/head.png?w=100'},
            {side: 'tails', imgSrc: 'https://lenadesign.org/wp-content/uploads/2020/06/tail.png?w=100'}
        ]
    }
    constructor(props){
        super(props);
        this.state = {
            currCoin: this.props.coin[0],
            headNum:0,
            tailNum:0,
            flipNum:0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        let temp = Math.floor(Math.random() * 2);
        const newCoin = this.props.coin[temp];
        console.log(newCoin);
        this.setState(st => {
            return{
                currCoin: newCoin,
                flipNum: st.flipNum + 1,
                tailNum: st.tailNum + (newCoin.side === 'tails' ? 1 : 0),
                headNum: st.headNum + (newCoin.side === 'heads' ? 1 : 0)
            }
        })
    }
    render(){
        return(
            <div className="container">
                {this.state.currCoin && <Coin info={this.state.currCoin}/>}
                <button onClick={this.handleClick}>Flip</button>
                <p>
                    Flip: {this.state.flipNum} times, there have been {this.state.headNum} heads
                    and {this.state.tailNum} tails.
                </p>
            </div>
        );
    }
}

export default CoinFlip;