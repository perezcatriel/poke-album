const POKEMON_TYPE_COLORS = {
	normal: "#ABAb78",
	fighting: "#c03028",
	flying: "#ab90f0",
	poison: "#a040a0",
	ground: "#e0c068",
	rock: "#b8a038",
	bug: "#a8b820",
	ghost: "#705898",
	steel: "#b8b8d0",
	fire: "#fa6c6c",
	water: "#6890f0f0",
	grass: "#48cfb2",
	electric: "#ffce4b",
	psychic: "#f85888",
	ice: "#98d8d8",
	dragons: "#7038f8",
	dark: "#705848",
	fairy: "#ee99ac",
};

export function getColorPokemon(color) {
	return POKEMON_TYPE_COLORS[color];
}
