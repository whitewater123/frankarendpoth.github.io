/*var fetchPokemon = function() {

    let url = "https://pokeapi.co/api/v2/pokemon?limit=151";

    fetch("url")
    .then(response => response.json());
    then(function(pokeData) {
        console.log(pokeData);
    });
}*/

function getJSON(url) {
    return fetch(url)
      .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
            return response.json();
            }
  })
  .catch(function(error) {
    console.log(error);
  });
  }
  function getPokemon(url) {
    return getJSON(url);
  }

  function showPokemon(url) {
    getPokemon(url).then(function (data) {
      console.log(data);
      const results = data.results;
      return (data.results);
    })};

    //showPokemon();