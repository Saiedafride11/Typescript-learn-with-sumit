class Player  {
    private name: string;
    readonly age: number;
    public country: string

    constructor(name: string, age: number, country: string) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    play(){
        console.log(`${this.name} from ${this.country} is playing`)
    }
}

const mashrafi = new Player( "Mashrafi", 26, "Bangladesh");
const sakib = new Player( "Shakib", 25, "Bangladesh");

sakib.name = "Change Name Sakib" // no access, coz private
sakib.age = 59 // no access, coz readonly
console.log(sakib.name)

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// const players: string[] = []
const players: Player[] = []
players.push(sakib)