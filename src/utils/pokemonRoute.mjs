export function pokemonRoute(id) {
	pokemonPage(id);
}

function pokemonPage(id) {
	console.log("page ...", id);

	fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
		.then((response) => response.json())
		.then((data) => console.log(data));
}
