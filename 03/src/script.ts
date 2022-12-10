let playerName = "Masrafee"; // let playerName: string

console.log(playerName); //working

playerName = 23; //error

console.log(playerName)

// ----------------------------------------------------------------
const fruits = ["banana", "Apple"]; //const fruits: string[]
fruits.push("orange")
fruits.push(23) //error

// ----------------------------------------------------------------
const numbers = [12, 13, 55]; //const numbers: number[]
numbers.push(23)
numbers.push("23") //error

// ----------------------------------------------------------------

const mixed = ["banana", 12, true, {}];
mixed.push(23)

const mixed2 = ["banana", 12, true]; //const mixed2: (string | number | boolean)[]
mixed2.push({}) //error

// ----------------------------------------------------------------

const person = {  //const person: { name: string; age: number; }
    name: "John",
    age: 34,
}
person.name = "jamal" // working
person.name = 23 // error