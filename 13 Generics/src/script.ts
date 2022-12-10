const addId = (obj: object) => {
    let id = Math.floor(Math.random() * 100);
    return {...obj, id}
}

let user = addId({
    name: "Kamal",
    age: 36,
})
//----------------------------------------------------------------------
//----------------------------------------------------------------------
//----------------------------------------------------------------------
const addId2 = <T>(obj: T) => {
    let id = Math.floor(Math.random() * 100);
    return {...obj, id}
}

// let user2 = addId2({
//     name: "Kamal",
//     age: 36,
// })

let user2 = "jamal"
//----------------------------------------------------------------------
//----------------------------------------------------------------------
//----------------------------------------------------------------------
const addId3 = <T extends object>(obj: T) => {
    let id = Math.floor(Math.random() * 100);
    return {...obj, id}
}

let user3 = addId3({
    name: "Kamal",
    age: 36,
})
//----------------------------------------------------------------------
//----------------------------------------------------------------------
//----------------------------------------------------------------------
const addId4 = <T extends {
    name: string,
    age: number
}>(obj: T) => {
    let id = Math.floor(Math.random() * 100);
    return {...obj, id}
}

let user4 = addId4({
    name: "Kamal",
    age: 36,
    country: "Bd"
})

//----------------------------------------------------------------------
//----------------------------------------------------------------------
//----------------------------------------------------------------------

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
//-----------------
interface APIResponse2<T> {
    status: number,
    type: string,
    data: T
}
const response2: APIResponse2<string> = {
    status: 200,
    type: "good",
    data: "Test"
}

