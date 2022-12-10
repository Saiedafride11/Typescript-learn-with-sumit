const myFuc = (a: string, b: number) => {
    console.log(`Hello ${a} ${b}`)
}

myFuc( "kamal", 56)
// -----------------------------------------------------------------
const myFuc2 = (a: string, b: number, c?:number) => {
    console.log(`Hello ${a} ${b}`)
}

myFuc2( "kamal", 56)
// -----------------------------------------------------------------
const myFuc3 = (a: number, b: number, c:string) : string => {
    return a + b // error, coz return string plz
}

myFuc3( 12, 54, "kamal") 