
// creating an Alias

type User ={
        firstname :string;
        lastname? : string;
        age : number;

}

// using Alias

const user : User ={
    firstname : "ankit",
    lastname : "buade",
    age :10
}


function login (userData:User):User{
    return userData
}

console.log(login({firstname :"ankit buade", age : 20}))

