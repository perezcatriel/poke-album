import { card } from "./pokemonCard.mjs";
import { scrollInfinite } from "../utils/scrollInfinite.mjs";

const URL_API = "https://pokeapi.co/api/v2/pokemon";

let limit;
let offset;

export function pokemonList(limit, offset) {
	fetch(`${URL_API}?limit=${limit}&offset=${offset}`)
		.then((response) => response.json())
		.then((data) => {
			pokemonTotal(data);

			for (let i = offset; i <= limit; i++) {
				pokemon(i);
			}
		});
}

pokemonList((limit = 10), (offset = 0));
// console.log(data.count, data.results[0].name));

function pokemon(pokemon) {
	let POKEMON = pokemon;

	fetch(`${URL_API}/${POKEMON}`)
		.then((response) => response.json())
		.then((data) => {
			// console.log(data.id, data.name, data.types[0].type.name, data.sprites.front_default);

			card(data);
		});
}

function pokemonTotal(data) {
	const total = document.getElementById("pokemon-total");

	total.innerText = data.count;
}

window.addEventListener("scroll", () => {
	let scrollBottom = window.scrollMaxY;

	if (scrollBottom <= window.scrollY) {
		limit += 10;
		offset += 10;
		console.log(limit, offset);
		scrollInfinite(limit, offset);
	}
});
