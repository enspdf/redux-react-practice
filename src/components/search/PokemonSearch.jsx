import React, { useState } from "react";
import { useDispatch } from "react-redux";
import fetchPokemon from "../../redux/actions/searchAction";

const PokemonSearch = () => {
    const dispatch = useDispatch();
    const [pokemonName, setPokemonName] = useState("mewtwo");

    return (
        <div className="form-group">
            <label htmlFor="pokemon_search" className="text-white"></label>
            <input type="text" id="pokemon_search" className="form-control" value={pokemonName} onChange={(event) => {
                setPokemonName(event.target.value);
            }} />
            <button className="btn btn-primary mt-3" onClick={() => {
                dispatch(fetchPokemon(pokemonName));
            }}>Enviar</button>
        </div>
    );
};

export default PokemonSearch;