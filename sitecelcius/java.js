const celsiusButton = document.getElementById("convert-to-celsius");
const fahrenheitButton = document.getElementById("convert-to-fahrenheit");
const temperatureInput = document.getElementById("temperature-input");
const resultElement = document.getElementById("result");

celsiusButton.addEventListener("click", () => {
    const temperature = parseFloat(temperatureInput.value);
    if (!isNaN(temperature)) {
        const celsius = (temperature - 32) * 5/9;
        resultElement.innerText = `${temperature} Fahrenheit = ${celsius.toFixed(2)} Celsius`;
    }
});

fahrenheitButton.addEventListener("click", () => {
    const temperature = parseFloat(temperatureInput.value);
    if (!isNaN(temperature)) {
        const fahrenheit = (temperature * 9/5) + 32;
        resultElement.innerText = `${temperature} Celsius = ${fahrenheit.toFixed(2)} Fahrenheit`;
    }
});