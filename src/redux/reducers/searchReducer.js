import {
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE
} from "../actions/searchAction";

const initialState = {
  loading: false,
  pokemon: [],
  error: ""
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMON_REQUEST:
      return {
        ...action,
        loading: true
      };
    case FETCH_POKEMON_SUCCESS:
      return {
        loading: false,
        pokemon: action.payload,
        error: ""
      };
    case FETCH_POKEMON_FAILURE:
      return {
        loading: false,
        pokemon: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default search;
