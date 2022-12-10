let a:string;
let b:number;
let p: string | number;

a = "jamal" //working
a = 12 //error
p = "jamal" //working

//--------------------------------------------------
//Array
//--------------------------------------------------
let c: string[] = [];
c.push("kamal") // working
c.push(12) //error

let d: number[] = [];
d.push(12) //working
d.push("kamal") //error

let e: ( string | number )[] = [];
e.push(12) //working
e.push(true) //error

let f: ( string | number | boolean )[] = [];
f.push(false) //working

//--------------------------------------------------
//Object
//--------------------------------------------------
let g : object;
g = {               //working
    name: "jamal" 
}


let h : {
    name: string,
    age: number,
    job: boolean
};
h = {               //working
    name: "jamal",
    age: 10,
    job: true
}

let i : object;
i = [12, 3, 5, 4]   // working, coz array certain type of object. array akta object
h = [1, 2, 3]       //error, coz h define of string, number, boolean