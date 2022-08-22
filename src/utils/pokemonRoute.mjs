import { getPokemon } from "../html/index.mjs";

export function pokemonRoute(id) {
	pokemonPage(id);
}

function pokemonPage(id) {
	console.log("page ...", id);

	getPokemon(id);

	// fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
	// 	.then((response) => response.json())
	// 	.then((data) => {
	// 		// console.log(data);

	// 		// loadPokemon(data)

	// 	});
}

// function loadPokemon(data) {
// 	const cards = document.getElementById("cards");

// 	window.location.href = 'http://127.0.0.1:5500/src/html/pokemon.html'
// 	/* `<div>
// 	<h2>${data.name}</h2>
// 	<img src="${data.sprites.front_default}" style="width:200px"/>
// 	<p>id: ${data.id}</p>
// 	<p>tipo: ${data.types[0].type.name}</p>
// 	<p>abilidad: ${data.abilities[0].ability.name}</p>
// 	<p>slot: ${data.abilities[0].slot}</p>
// </div>
// 	`; */
// }
