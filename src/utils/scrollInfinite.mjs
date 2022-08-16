import { pokemonList } from "../js/pokemonList.mjs";

export function scrollInfinite(limit, offset) {
	// const cards = document.getElementById('cards');

	// cards.innerHTML = '';

	pokemonList(limit, offset);
}
