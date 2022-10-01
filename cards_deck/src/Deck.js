import React, {Component} from "react";
import Card from "./Card";
import axios from 'axios';
import './Deck.css';
//deckofcardsapi not working so have to run my own server
const API_Base = 'http://127.0.0.1:8000/api/deck';
class Deck extends Component{
    constructor(props){
        super(props);
        this.state = {
            deck: null,
            drawn: [],
            done: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    async componentDidMount(){
        let respone = await axios.get(`${API_Base}/new/shuffle/?deck_count=1`);
        console.log(respone)
        this.setState({
            deck: respone.data
        })
    }
    async handleClick(){
        let deck_id = this.state.deck.deck_id;
        try{
            let draw = await axios.get(`${API_Base}/${deck_id}/draw/?count=1`);
            if(draw.data.success === false){
                throw new Error('No card left');
            }
            let cardDrawn = draw.data.cards[0];
            this.setState(st => ({
                drawn: [...st.drawn,
                    {
                        id: cardDrawn.code,
                        image: cardDrawn.image,
                        name: `${cardDrawn.value} ${cardDrawn.suit}`
                    }
                ]
            }));  
        }
        catch(err){
            this.setState({
                done: true
            })
        }
    }
    render(){
        let cards = this.state.drawn.map(card => (
            <Card key={card.id} id={card.id} value={card.id} image={card.image} name={card.name} />
        ))
        let btn;
        if(this.state.done){
            btn = <p className="out">OUT OF CARD!</p>
        }
        else{
            btn = <button onClick={this.handleClick} className='btn'>DRAW</button>
        }
        return(
            <div className="deck">
                <h1 className="header">DECK DEALER!</h1>
                {btn}
                {cards}
            </div>
        );
    }
}

export default Deck;