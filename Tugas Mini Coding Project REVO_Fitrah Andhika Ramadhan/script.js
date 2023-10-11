function convertAndDisplay() {
    // Get the Celsius input value
    let celsiusInput = document.getElementById("celsius");
    let celsiusValue = parseFloat(celsiusInput.value);

    // Check if the input is a valid number
    if (isNaN(celsiusValue)) {
        alert("Please enter a valid number for Celsius.");
        return;
    }

    // Perform the conversion
    let fahrenheitValue = (celsiusValue * 9 / 5) + 32;

    // Display the result
    let fahrenheitInput = document.getElementById("fahrenheit");
    fahrenheitInput.value = fahrenheitValue.toFixed(2) + "°F";

    // Display the calculation explanation
    displayCalculationExplanation(celsiusValue, fahrenheitValue);
}

function reverseConversion() {
    // Get the Fahrenheit input value
    let fahrenheitInput = document.getElementById("fahrenheit");
    let fahrenheitValue = parseFloat(fahrenheitInput.value);

    // Check if the input is a valid number
    if (isNaN(fahrenheitValue)) {
        alert("Please enter a valid number for Fahrenheit.");
        return;
    }

    // Perform the reverse conversion
    let celsiusValue = (fahrenheitValue - 32) * 5 / 9;

    // Display the result
    let celsiusInput = document.getElementById("celsius");
    celsiusInput.value = celsiusValue.toFixed(2);

    // Display the calculation explanation
    displayCalculationExplanation(fahrenheitValue, celsiusValue);
}

function resetForm() {
    // Clear input and output fields
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";

    // Clear calculation explanation
    clearCalculationExplanation();
}

function displayCalculationExplanation(inputValue, outputValue) {
    let explanationInput = document.getElementById("explanation");
    explanationInput.value = ` ${inputValue} ${getUnit(inputValue)} * 9/5 + 32 = ${outputValue.toFixed(2)} ${getUnit(outputValue)}`;
}

function clearCalculationExplanation() {
    let explanationInput = document.getElementById("explanation");
    explanationInput.value = "";
}

function getUnit(value) {
    return value >= 0 ? "°C" : "°F";
}
