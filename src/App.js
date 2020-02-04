import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import PokemonQuantity from "./components/PokemonQuantity";
import BuyPokemon from "./components/BuyPokemon";
import store from "./redux/store";

function App() {
  console.log(store.getState());

  return (
    <div className="App container">
      <div className="row">
        <div className="col-12">
          <div className="card mt-5" style={{ maxWidth: "370px" }}>
            <div className="row no-gutters">
              <div className="col-4">
                <img src={require("./img/pokemon.jpg")} alt="pokemon" className="card-img" />
              </div>
              <div className="col-8">
                <div className="card-body">
                  <div className="card-title h3 text-center">
                    <PokemonQuantity />
                  </div>
                  <BuyPokemon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
