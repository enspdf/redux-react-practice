import React from "react";

const PokemonSearch = () => {
    return (
        <div className="form-group">
            <label htmlFor="pokemon_search" className="text-white"></label>
            <input type="text" id="pokemon_search" className="form-control" value="pikachu" />
            <button className="btn btn-primary mt-3">Enviar</button>
        </div>
    );
};

export default PokemonSearch;