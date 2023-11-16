function calculateDogAge() {
    puppyAge = document.getElementById("dog-age").value;
    dogAge = puppyAge * 7;
    document.getElementById(
    "age"
).innerHTML = `Your doggie is ${dogAge} years old in dog years!`;
}

function calculateSupply(age, amountPerDay) {
    age = document.getElementById("current-age").value;
    amountPerDay = document.getElementById("amount-per-day").value;

    maxAge = 80;
    amountPerYear = amountPerDay * 365.25;
    totalAmount =(maxAge - age) * amountPerYear;
    document.getElementById(
        "supply"
    ).innerHTML = `You will need ${totalAmount} to last you until the ripe old age of ${maxAge}`
}

function calcCircumference (raduis) {
    raduis = document.getElementById("radius").value;
    circumference = 2 * Math.PI * radius;
    document.getElementById(
        "circumference"
    ).innerHTML = `The circumference is ${circumference}`;
}

function celsiusToFarenheit () {
    celsius = document.getElementById("celsius").value;
    farentheit = (celsius * 9) / 5 + 32;
    document.getElementById('farenheit').innerHTML = `${celsius}degrees C is ${farenheit} degrees F`
}