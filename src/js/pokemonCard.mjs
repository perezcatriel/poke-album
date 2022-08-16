import { getColorPokemon } from "../utils/pokemonColors.mjs";

export function card(data, index) {
	// console.log(data.name, data);
	const cards = document.getElementById("cards");


	const card = document.createElement("div");
	card.id = "data.id";

	card.style.width = "150px";
	card.style.margin = "10px";
	card.style.borderRadius = "10px";
	card.style.padding = "10px";
	card.style.boxShadow = "0 0 10px black";
	card.style.backgroundColor = getColorPokemon(data.types[0].type.name);
	// card.className = getColorPokemon(data.types[0].type.name);
	console.log(getColorPokemon(data.types[0].type.name));

	const number = document.createElement("p");
	number.className = "number";
	number.innerText = `#${data.id}`;
	number.style.textShadow = "0 0 5px black";

	const img = document.createElement("img");
	img.src = data.sprites.front_default;
	img.style.width = "100px";
	img.style.height = "100px";
	img.style.margin = "auto 20px";
	img.alt = "pokemon";

	const name = document.createElement("p");
	name.innerText = data.name;
	name.style.textShadow = "0 0 5px black";

	card.append(number);
	card.append(img);
	card.append(name);

	cards.append(card);
}
