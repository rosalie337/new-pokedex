import request from 'superagent';

export const getCharacter = (charId) => request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/?pokemon=${charId}`)