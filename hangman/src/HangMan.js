import React,{Component} from 'react';
import { randomWord } from './Word';
import './HangMan.css';
import img0 from './0.png'
import img1 from './1.png'
import img2 from './2.png'
import img3 from './3.png'
import img4 from './4.png'
import img5 from './5.png'
import img6 from './6.png'

class HangMan extends Component{
    static defaultProps = {
        maxWrong: 6,
        images: [img0,img1,img2,img3,img4,img5,img6]
    }
    constructor(props) {
        super(props);
        this.state = { nWrong: 0, guessed: new Set(), answer: randomWord() };
        this.handleGuess = this.handleGuess.bind(this);
        this.playAgain = this.playAgain.bind(this);
      }
      guessedWord(){
        return this.state.answer
            .split("")
            .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
      }
      handleGuess(evt){
        let ltr = evt.target.value;
        this.setState(st => ({
            guessed: st.guessed.add(ltr),
            nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 :1)
        })) 
      }
      generateButtons(){
        return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
            <button
              key={ltr}
              value={ltr}
              onClick={this.handleGuess}
              disabled={this.state.guessed.has(ltr)}
            >
              {ltr}
            </button>
          ));
      }
      playAgain(){
        this.setState({
            nWrong: 0, guessed: new Set(), answer: randomWord()
        })
      }
    render(){
        const gameOver = this.state.nWrong >= this.props.maxWrong;
        const isWinner = this.guessedWord().join('') === this.state.answer;
        let altText = `${this.state.nWrong / this.props.maxWrong} guesses`;
        let gameState = this.generateButtons();
        if(isWinner) gameState = 'You Win!';
        if(gameOver) gameState = 'You Lose!';
        return(
            <div className='container'>
                <div className='imageContainer'>
                    <img src={this.props.images[this.state.nWrong]} alt={altText}></img>
                    <div className='guess'>
                    {!gameOver ? this.guessedWord() : this.state.answer}
                </div>
                </div>
                
                <p>Guessed wrong: {this.state.nWrong}</p>
                <div className='btn'>
                    {gameState} 
                </div>
                <button className='rstBtn' onClick={this.playAgain}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ai ai-ArrowClockwise"><path d="M19.734 16.06a8.923 8.923 0 0 1-3.915 3.978 8.706 8.706 0 0 1-5.471.832 8.795 8.795 0 0 1-4.887-2.64 9.067 9.067 0 0 1-2.388-5.079 9.136 9.136 0 0 1 1.044-5.53 8.904 8.904 0 0 1 4.069-3.815 8.7 8.7 0 0 1 5.5-.608c1.85.401 3.366 1.313 4.62 2.755.151.16.735.806 1.22 1.781"/><path d="M15.069 7.813l5.04.907L21 3.59"/></svg>
                </button>
            </div>
        );
    }
}

export default HangMan;