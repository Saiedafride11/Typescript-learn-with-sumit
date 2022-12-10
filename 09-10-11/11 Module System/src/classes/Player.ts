export class Player  {
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