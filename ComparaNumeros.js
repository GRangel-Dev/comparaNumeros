function comparaNumeros(n1, n2) {
     if(!n1 || !n2) return `Defina dois números`;
	const frase1 = PRIMEIRA_FRASE(n1, n2);
	const frase2 = SEGUNDA_FRASE(n1, n2);

	return `${frase1} ${frase2}`;
}

function PRIMEIRA_FRASE(n1, n2) {
	let simOuNao = '';

	if (n1 !== n2) {
		simOuNao = 'não';
	}

	return `Os números ${n1} e ${n2} ${simOuNao} são iguais.`;
}

function SEGUNDA_FRASE(n1, n2) {
	const soma = n1 + n2;

	let resultDez = 'menor';
	let resultVinte = 'menor';

	if (soma > 10) {
		resultDez = 'maior';
	}

	if (soma > 20) {
		resultVinte = 'maior';
	}

	return `Sua soma é ${soma}, que é ${resultDez} do que 10 e ${resultVinte} do que 20.`;
}

console.log(comparaNumeros(1, 10));