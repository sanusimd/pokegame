import React, { Component } from "react";
import "./Pokecard.css";

const Poke_Api = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

class Pokecard extends Component {
  render() {
    let padToThree = number =>
      number <= 999 ? `00${number}`.slice(-3) : number;

    let imgSrc = `${Poke_Api}${padToThree(this.props.id)}.png`;

    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <div className="Pokecard-image">
          <img src={imgSrc} alt={this.props.name} />
        </div>
        <p className="Pokecard-data">Type: {this.props.type}</p>
        <p className="Pokecard-data">EXP: {this.props.exp}</p>
      </div>
    );
  }
}

export default Pokecard;
