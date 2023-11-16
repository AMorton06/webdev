const myName = "Aidan"

let favColor = "Blue"

favColor = "Red"

let age = 17

mainPerson = {
    name: "Aidan",
    age: 17,
    favColor: "Blue"
}

favFoods = ["steak", "ice cream", "potatoes"]

favThings = [2, "movies"]

const isAlive = true;

function describePerson (person) {
    alert ("MISSING PERSON ALERT: " + person.name);
    alert (`MISSING PERSON ALERT: ${person.name} missing since 2022, wearing tattered overalls.`)
}

describePerson(mainPerson)

if (age > 17 && age < 30){
    alert("your no your way to 18.")
} else if(age < 17) {
    alert("you're a baby.")
}

document.getElementById("title").innerHTML = `hello ${myName}`

const para = document.createElement("p")
para.innerHTML = "im the paragraph you just made."
document.getElementById("body").appendChild(para)