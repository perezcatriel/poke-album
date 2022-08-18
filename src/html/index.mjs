import { getColorPokemon } from "../utils/pokemonColors.mjs";

export function getPokemon(id) {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  console.log(url)

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			pokemon(data);
		});
}

function pokemon(data) {
	const card = document.querySelector(".pokemon");

	card.style.backgroundColor = getColorPokemon(data.types[0].type.name);

	console.log(data);

	card.innerHTML = `
  <div>
  <h1>${data.name}</h1>
  <p>${data.id}</p>
  <img src="${data.sprites.front_default}">
  <p>${data.types[0].type.name}</p>
  <p>${data.abilities[0].ability.name}</p>
  <p>${data.abilities[1].ability.name}</p>
  </div>
    `;
}
