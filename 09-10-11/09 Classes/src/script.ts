class Player  {
    name: string;
    age: number;
    country: string

    constructor(name: string, age: number, country: string) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    play(){
        console.log(`${this.name} from ${this.country} is playing`)
    }
}

const mashrafi = new Player( "Mashrafi", 26, "Bangladesh"); //working
const sakib = new Player( "Shakib", "25", "Bangladesh"); //error

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// const players: string[] = []
const players: Player[] = []
players.push(sakib)