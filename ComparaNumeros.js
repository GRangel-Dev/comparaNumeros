function comparaNumeros(n1, n2) {
     if(!n1 || !n2) return `Defina dois números`;
	const FRASE1 = primeiraFrase(n1, n2);
	const FRASE2 = segundaFrase(n1, n2);

	return `${FRASE1} ${FRASE2}`;
}

function primeiraFrase(n1, n2) {
	let simOuNao = '';

	if (n1 !== n2) {
		simOuNao = 'não';
	}

	return `Os números ${n1} e ${n2} ${simOuNao} são iguais.`;
}

function segundaFrase(n1, n2) {
	const SOMA = n1 + n2;

	let resultDez = 'menor';
	let resultVinte = 'menor';

	if (SOMA > 10) {
		resultDez = 'maior';
	}

	if (SOMA > 20) {
		resultVinte = 'maior';
	}

	return `Sua soma é ${SOMA}, que é ${resultDez} do que 10 e ${resultVinte} do que 20.`;
}

console.log(comparaNumeros(1, 10));