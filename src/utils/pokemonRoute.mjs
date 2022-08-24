import { getPokemon } from "../html/index.mjs";
import { getColorPokemon } from "./pokemonColors.mjs";

export function pokemonRoute(id) {
	pokemonPage(id);
}

function pokemonPage(id) {
	// console.log("page ...", id);

	pokemon(id);

	history.pushState({}, "pokemon", id);
}

function pokemon(id) {
	// console.log(id)

	fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);

			const container = document.querySelector(".container");
			// container.style.background = "gray";
			container.style.height = "100vh";

			const card = document.getElementById("cards");
			card.style.backgroundColor = getColorPokemon(data.types[0].type.name);
			card.style.width = "300px";
			card.style.height = "600px";
			card.style.borderRadius = "20px";
			card.style.margin = "auto";
			card.style.padding = "20px";

			console.log(data.types[0].type.name);

			const pokemon = document.createElement("div");
			const count = document.createElement("p");
			count.innerText = data.id;
			count.style.textAlign = "right";
			const name = document.createElement("p");
			name.innerText = data.name;
			name.style.fontSize = "50px";
			const img = document.createElement("img");
			img.src = data.sprites.front_default;
			img.style.scale = "2";
			img.style.margin = "50px 0px ";
			const title = document.createElement("p");
			title.innerText = "Bases stats";
			title.style.width = "100vw";
			title.style.fontSize = "20px";
			title.style.paddingLeft = "0";

			pokemon.append(count);
			// pokemon.append(name)
			pokemon.append(img);
			pokemon.append(title);
			card.innerHTML = data.name;
			card.style.fontSize = "30px";
			card.append(pokemon);

			// loadPokemon(data)

			console.log(data.sprites.front_default);
		});
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
