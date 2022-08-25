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

const home = window.location;
// console.log(home.href);
if (home.href === "http://127.0.0.1:5500/index.html" || home.href === "https://perezcatriel.github.io/poke-album/") {
	pokemonList((limit = 10), (offset = 0));
}

export function pokemon(pokemon) {
	let POKEMON = pokemon;

	fetch(`${URL_API}/${POKEMON}`)
		.then((response) => response.json())
		.then((data) => {
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
