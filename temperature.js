function convertTemperature() {
    var inputTemperatureWithUnit = document.getElementById("temperature").value;

    // Extract numeric value and unit
    var match = inputTemperatureWithUnit.match(/^([-+]?\d*\.?\d+)([CFKcfk])$/);

    if (!match) {
      alert("Please enter a valid temperature value with unit (e.g., 30C, 45F).");
      return;
    }

    var numericValue = parseFloat(match[1]);
    var unit = match[2].toUpperCase();

    var celsius, fahrenheit, kelvin;

    // Convert based on the unit
    switch (unit) {
      case 'C':
        celsius = numericValue;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 273.15;
        break;
      case 'F':
        fahrenheit = numericValue;
        celsius = (fahrenheit - 32) * 5/9;
        kelvin = celsius + 273.15;
        break;
      case 'K':
        kelvin = numericValue;
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
        break;
      default:
        alert("Invalid temperature unit.");
        return;
    }

    var resultMessage = `
      <p>${celsius.toFixed(2)} Celsius</p>
      <p>${fahrenheit.toFixed(2)} Fahrenheit</p>
      <p>${kelvin.toFixed(2)} Kelvin</p>
    `;

    document.getElementById("result").innerHTML = resultMessage;
}