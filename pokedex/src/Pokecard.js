import React, { Component } from 'react';
import "./Pokecard.css"

const pokeAPI = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
let padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num);
class Pokecard extends Component{   
    render(){ 
        let imgSrc = `${pokeAPI}${padToThree(this.props.id)}.png`
        return(
            <div className='Pokecard'>
                <h1 className='PokeName'>
                    {this.props.name}
                </h1>
                <div className='PokeImg'>
                    <img src={imgSrc} alt={this.props.name}/>
                </div>
                <div className='PokeType'>
                    Type: {this.props.type}
                </div>
                <div className='PokeExp'>
                    EXP: {this.props.exp}
                </div>
            </div>
        );
    }
}

export default Pokecard;