const cachedPokemon = {};
cachedPokemon[id] = pokeman;

const pokedex = document.getElementById("pokedex");

const fetchPokemon = async () => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
  const res = await fetch(url);
  const data = await res.json();

  const pokemon = data.results.map((data, index) => ({
    name: data.name,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      index + 1
    }.png`,
  }));
  displayPokemon(pokemon);
};

const selectPokemon = async (id) => {
    if (!cachedPokemon[i]){
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const pokemon = await res.json();
        displayPokemonPopup(pokemon);
    } else {
        displayPokemonPopup(cachedPokemon[id]);
    }
};

const closePopup = () => {
    const popup = document.querySelector(".popup");
    popup.parentElement.removeChild(popup);
}

const displayPokemon = (pokeman) => {
  console.log(pokeman);
  const type = pokemon.types.map((type) => type.type.name).join(", ");
  const htmlString = ` <div class="popup"> <button id="closeBtn" onclick="closePopup()">Close</button> 
                       <div class="card"> <img class="card-image" src="${pokeman.sprites["front_default"]}"/> 
                       <h2 class="card-title">${pokeman.name}</h2> 
                       <p><small>Type: ${type} | Height:</small> ${pokeman.height} | Weight: ${pokeman.weight}</p> 
                       </div> 
                       </div> `;
  pokedex.innerHTML = htmlString + pokedex.innerHTML;
};

fetchPokemon();
