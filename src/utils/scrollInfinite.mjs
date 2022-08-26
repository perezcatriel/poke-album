import { pokemonList } from "../js/pokemonList.mjs";

export function scrollInfinite(limit, offset) {
	// const cards = document.getElementById('cards');

	const home = "http://127.0.0.1:5500/index.html";

	// cards.innerHTML = '';
	if (home === window.location.href || home === 'https://perezcatriel.github.io/poke-album/') {
		pokemonList(limit, offset);
	}
}
