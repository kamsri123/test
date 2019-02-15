import React, { Component } from 'react'
import './App.css'
import ListOfPokemon from './ListOfPokemon';
import Mypokedex from './Mypokedex';

const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b"
}
class App extends Component {
    state = {
    add: false,
    list: []
  }
  addPokemon = (val) =>{
    this.setState({
      add: val
    })
  }
  getData = (list) =>{
    this.setState({
      list: list
    })
  }
  render() {
    console.log(this.state.add)
    return (
      <div className="App">
      <button onClick={() => this.addPokemon('true')}>ADD</button>
        {(this.state.add) ? <ListOfPokemon colors={COLORS} getData={this.getData}/>  : <Mypokedex list={this.state.list}/>}
      </div>
    )
  }
}

export default App
