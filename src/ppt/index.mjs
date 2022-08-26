// opciones
const opciones = ["Piedra", "Papel", "Tijera"];

// decisiones de Maquina
const resultMaquina = [];

function pptMaquina() {
	for (let i = 0; i < 3; i++) {
		const opcion = Math.floor(Math.random() * opciones.length);

		resultMaquina.push(opciones[opcion]);
	}

	return resultMaquina;
}

// decision de Usuario
function pptUsuario() {
	const opcionUsuario = [];

	for (let i = 0; i < 3; i++) {
		let opcion = prompt(`
    Ingresa el numero de tú opción:
    1. Piedra
    2. Papel
    3. Tijera
    `);

		if (opcion == 1 || opcion == 2 || opcion == 3) {
			opcionUsuario.push(opcion);
		} else {
			console.warn("Dato incorrecto", opcion);
		}
	}

	transformar(opcionUsuario);
}

function transformar(opcionUsuario) {
	const decisionUsuario = [];

	for (let i = 0; i < opcionUsuario.length; i++) {
		if (opcionUsuario[i] == 1) {
			decisionUsuario.push("Piedra");
		}

		if (opcionUsuario[i] == 2) {
			decisionUsuario.push("Papel");
		}

		if (opcionUsuario[i] == 3) {
			decisionUsuario.push("Tijera");
		}
	}

	comparar(decisionUsuario);
}

const resultadoFinal = [];

function comparar(decisionUsuario) {
	for (let i = 0; i < decisionUsuario.length; i++) {
		console.log(resultMaquina[i], decisionUsuario[i]);

		if (
			("Piedra" == resultMaquina[i] && "Papel" == decisionUsuario[i]) ||
			("Papel" == resultMaquina[i] && "Tijera" == decisionUsuario[i]) ||
			("Tijera" == resultMaquina[i] && "Piedra" == decisionUsuario[i])
		) {
			console.log("Ganaste");
			resultadoFinal.push(1);
		} else if (resultMaquina[i] == decisionUsuario[i]) {
			console.log("Empate");
		} else {
			console.log("Perdiste");
		}
	}

	if (resultadoFinal.length >= 2) {
		console.log("Ganaste la PARTIDA");
	} else {
		console.log("Perdiste la PARTIDA");
	}
}

// llamadas y export
function ppt() {
	pptMaquina();
	pptUsuario();
}

ppt();

export default ppt;

// opciones
// decision maquina
// decision usuario
// transformar, comparar y resultado
