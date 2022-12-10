

let a = [3, "kamal", { p: 3}]

a[0] = "kamal" // working, coz onuman kore nise string or number
a[1] = 5 // working, coz onuman kore nise string or number
a[1] = true // error, coz onuman kore nise string or number na se

//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
let b:[number, string, object] = [5, "kamal", { p: 5}]
b[0] = "kamal" // error, coz its number
b[1] = "kamal" // working