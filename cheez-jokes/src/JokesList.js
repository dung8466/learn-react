import React, {Component} from 'react';
import './JokesList.css';
import Joke from './Joke';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
const API = 'https://icanhazdadjoke.com/';
class JokesList extends Component{
    static defaultProps = {
        numJokes: 10
    }
    constructor(props){
        super(props);
        this.state = {
            jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
            loading: false 
        };
        this.seenJokes = new Set(this.state.jokes.map(joke => joke.joke));
        console.log(this.seenJokes);
        this.handleClick = this.handleClick.bind(this);
    }
    handleVote(id, num){
        this.setState(st => (
            {
                jokes: st.jokes.map(joke => (
                    joke.id === id ? {...joke, votes: joke.votes + num} : joke
                ))
            }
        ),
        () => window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
        )
    }
    componentDidMount(){
        if(this.state.jokes.length === 0) this.getJokes();
    }
    async getJokes(){
        try{
            let jokes = [];
            while(jokes.length < this.props.numJokes){
                let respone = await axios.get(API, {headers: {Accept: 'application/json'}});
                if(!this.seenJokes.has(respone.data.joke)){
                    jokes.push({id: uuid(), joke: respone.data.joke, votes: 0});
                }
                else{
                    console.log("DUP");
                }
            }
            this.setState(st => ({
                loading: false,
                jokes: [...st.jokes, ...jokes]
            }),
            () => window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
            )
        }
        catch(e){
            this.setState({
                loading: false
            })
        }
    }
    handleClick(){
        this.setState({
            loading: true
        },
            this.getJokes
        )
 
    }
    render(){
        if (this.state.loading) {
            return (
              <div className='JokeList-spinner'>
                <i className='far fa-8x fa-laugh fa-spin' />
                <h1 className='JokeList-title'>Loading...</h1>
              </div>
            );
          }
          let jokes = this.state.jokes.sort((a, b) => b.votes - a.votes);
          return (
            <div className='JokeList'>
              <div className='JokeList-sidebar'>
                <h1 className='JokeList-title'>
                  <span>Dad</span> Jokes
                </h1>
                <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' alt=''/>
                <button className='JokeList-getmore' onClick={this.handleClick}>
                  Fetch Jokes
                </button>
              </div>
      
              <div className='JokeList-jokes'>
                {jokes.map(j => (
                  <Joke
                    key={j.id}
                    votes={j.votes}
                    value={j.joke}
                    upVote={() => this.handleVote(j.id, 1)}
                    downVote={() => this.handleVote(j.id, -1)}
                  />
                ))}
              </div>
            </div>
          );
    }
}

export default JokesList;