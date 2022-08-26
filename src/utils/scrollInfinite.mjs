import { pokemonList } from "../js/pokemonList.mjs";

export function scrollInfinite(limit, offset) {
	// const cards = document.getElementById('cards');

	const home = "http://127.0.0.1:5500/index.html";
	const homePoduction = "https://perezcatriel.github.io/poke-album/";

	// cards.innerHTML = '';
	if (
		home === window.location.href ||
		homePoduction === "https://perezcatriel.github.io/poke-album/"
	) {
		pokemonList(limit, offset);
	}
}
