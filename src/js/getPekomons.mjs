import { card } from "./card.mjs";

const URL_API = "https://pokeapi.co/api/v2/";
let pokemonPage = "pokemon?limit=10&offset=0";

export const pokemons = fetch(`${URL_API}${pokemonPage}`)
	.then((response) => response.json())
	.then((data) => {
		for (let i = 1; i <= data.results.length; i++) {
			pokemon(i);
		}
	});
// console.log(data.count, data.results[0].name));

export function pokemon(pokemon) {
	let POKEMON = pokemon;

	fetch(`${URL_API}pokemon/${POKEMON}`)
		.then((response) => response.json())
		.then((data) => {
			// console.log(data.id, data.name, data.types[0].type.name, data.sprites.front_default);

			card(data)
		});
}
