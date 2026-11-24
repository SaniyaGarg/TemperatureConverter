
function convertTemperature() {

    let temperature = document.getElementById("temperature").value;
    let unit = document.getElementById("unit").value;

    let celsius, fahrenheit, kelvin;


    if (temperature === "") {
        document.getElementById("error").innerText =
            "Please enter a temperature!";
        return;
    }

    temperature = Number(temperature);

    
    if (!Number.isFinite(temperature)) {
        document.getElementById("error").innerText =
            "Please enter a valid number!";
        return;
    }

    
    if (unit === "C") {
        celsius = temperature;
    }
    else if (unit === "F") {
        celsius = (temperature - 32) * 5 / 9;
    }
    else {
        celsius = temperature - 273.15;
    }


    if (celsius < -273.15) {
        document.getElementById("error").innerText =
            "Temperature cannot be below absolute zero!";
        return;
    }


    fahrenheit = (celsius * 9 / 5) + 32;
    kelvin = celsius + 273.15;

    document.getElementById("error").innerText = "";

    document.getElementById("celsius").innerText =
        "Celsius: " + celsius.toFixed(2) + " °C";

    document.getElementById("fahrenheit").innerText =
        "Fahrenheit: " + fahrenheit.toFixed(2) + " °F";

    document.getElementById("kelvin").innerText =
        "Kelvin: " + kelvin.toFixed(2) + " K";
}



function resetConverter() {

    document.getElementById("temperature").value = "";

    document.getElementById("unit").value = "C";

    document.getElementById("celsius").innerText = "Celsius: --";

    document.getElementById("fahrenheit").innerText = "Fahrenheit: --";

    document.getElementById("kelvin").innerText = "Kelvin: --";

    document.getElementById("error").innerText = "";
}
