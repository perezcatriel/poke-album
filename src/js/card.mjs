export function card(data, index) {
	console.log(data.name, data);
	const cards = document.getElementById("cards");

	const card = document.createElement("div");
	card.id = "data.id";
	card.style.width = "200px";
	card.style.margin = "20px";
	card.style.backgroundColor = "red";
	card.className = data.types[0].type.name;

	const number = document.createElement("p");
	number.innerText = data.id;

	const img = document.createElement("img");
	// img.src = "";
	img.alt = "pokemon";

	const name = document.createElement("p");
	name.innerText = data.name;

	card.append(number);
	card.append(img);
	card.append(name);

	cards.append(card);
}
