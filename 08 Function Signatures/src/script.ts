let myFuc : (a: string, b: number) => void; // return dic clear na korle, void hisebe dore nibe
let myFuc2 : (a: string, b: number) => number;

let add : (a: number, b: number) => number;
add = (a: number, b: number) => {
    console.log( a + b)  // error, coz void return koreni, number retuen korse
}

let add2 : (a: number, b: number) => number;
add2 = (a: number, b: number) => {
    return a + b //working, coz age void return na korlew, code e return newya hoise
}

//-------------------------------------------------------------
//-------------------------------------------------------------
let calculation : (a: number, b: number, c: string) => number;

calculation = (a: number, b: number, c: string) => {
    if(c === "add"){
        return a + b
    }
    else{
        //error, coz return kora hoini kisu
    }
}
calculation(4, 3, "minus")

//-------------------------------------------------------------
//-------------------------------------------------------------
let calculation2 : (a: number, b: number, c: string) => number;

calculation2 = (a: number, b: number, c: string) => {
    if(c === "add"){
        return a + b
    }
    else{
        return a + b //working, coz return kora hoise
    }
}
calculation2(4, 3, "minus")

//--------------------------------------------------------------
//--------------------------------------------------------------
let userDetails : ( id: number | string, info: {
    name: string,
    age: number
}) => void

userDetails = (id: number | string, info: {
    name: string,
    age: number
}) => {

}

let info = {name: 'John', age: 32};
userDetails(4, info)
