export const BUY_POKEMON = "BUY_POKEMON";
export const RETURN_POKEMON = "RETURN_POKEMON";

export const buyPokemonAction = quantity => {
  return {
    type: BUY_POKEMON,
    payload: quantity
  };
};

export const returnPokemonAction = quantity => {
  return {
    type: RETURN_POKEMON,
    payload: quantity
  };
};
