function drawRectangle(options : {width: number, length: number}){
    let width = options.width;
    let length = options.length;
}
drawRectangle({
    width: 30,
    length: 20
})

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
interface RectangleOptions {
    width: number,
    length: number
}

function drawRectangle2(options : RectangleOptions){
    let width = options.width;
    let length = options.length;
}

let threeDOption = {
    width: 30,
    length: 20,
    height: 10
}

drawRectangle2(threeDOption)

//----------------------------------------------------------
//----------------------------------------------------------
interface isPlayer{
    name: string,
    age: number,
    country: string

    play(): void;
}

class Player implements isPlayer{
    constructor(
        public name: string,
        public age: number,
        public country: string
    ){}

    play(){
        console.log(`${this.name} from ${this.country} is playing`)
    }
}

let sakib: isPlayer
sakib = new Player( "Shakib", 25, "Bangladesh");

const players: Player[] = []
players.push(sakib)
// ---------------------------------------------------
// interface + generics
interface APIResponse<T> {
    status: number,
    type: string,
    data: T
}

const response1: APIResponse<object> = {
    status: 200,
    type: "good",
    data: {
        name: "Kamal",
        something: 300
    }
}
