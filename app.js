const celsiusInput = document.querySelector('#celsius > input'); // query.Selector é como se fossem as Tagas de div id="" do HTML
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');


function roundNum(num){
	return Math.round(num*100)/100; // arredonda o número, ex:  35652232306352 para 356
}

// Função Celsius: Aqui eu digo qual é o valor de Celsius e qual é a conta que ele precisa calcular para converter seu resultado em Kelvin e Fahrenheit.
function celsiusToFahrenheitAndKelvin() {  // Criando uma função
	const cTemp = parseFloat(celsiusInput.value); 
	const fTemp = (cTemp * (9 / 5)) + 32;
	const kTemp = cTemp + 273.15;
	fahrenheitInput.value = roundNum(fTemp);
	kelvinInput.value = roundNum(kTemp);
}
// Função Fahrenheit: Aqui eu digo qual é o valor de Fahrenheit e qual é a conta que ele precisa calcular para converter seu resultado em Kelvin e Celsius.
function fahrenheitToCelsiusAndKelvin() {
	const fTemp = parseFloat(fahrenheitInput.value);
	const cTemp = (fTemp - 32) * (5 / 9);
	const kTemp = (fTemp + 459.67) * 5 / 9;
	celsiusInput.value = roundNum(cTemp);
	kelvinInput.value = roundNum(kTemp);
}
// Função Kelvin: Aqui eu digo qual é o valor de Kelvin e qual é a conta que ele precisa calcular para converter seu resultado em Fahrenheit e Celsius.
function kelvinToCelsiusAndFahrenheit() {
	const kTemp = parseFloat(kelvinInput.value);
	const cTemp = kTemp-273.15;
	const fTemp = 9/5-(kTemp-273)+32;
	celsiusInput.value = roundNum(cTemp);
	fahrenheitInput.value = roundNum(fTemp);
}

// Assinando eventos (addEvent - Adiciona uma função que será disparada quando ocorrer determinado evento no objeto.) 
celsiusInput.addEventListener('input', celsiusToFahrenheitAndKelvin, true);
fahrenheitInput.addEventListener('input', fahrenheitToCelsiusAndKelvin, true);
kelvinInput.addEventListener('input', kelvinToCelsiusAndFahrenheit, true);