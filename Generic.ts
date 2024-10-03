                                       /*Generics*/ 


 // Generics main funda is to provide reusable component    


//  function loganything<T> (arg: T){
//     console.log(arg)
//     return arg
//  }
 
//The above function is Generic now it will work as anything array string integer and bool   

//  loganything(true)
//  loganything([1,3,4,5])


                                        //  Generics Example 2

interface HasAge {
    age:number
}

function getOldest <T extends HasAge>(people : T[]) :T {
    return people.sort((a,b)=>b.age - a.age)[0]
}

const people : HasAge[]=[{age :30},{age :20},{age :10}]





interface Player {
    name : string
    age : number
}

const players :Player[]= [
    {name: "john", age: 30},
    {name: "jo", age: 10},
    {name: "jo", age: 50},
    {name: "joe", age: 20},
]

const person = getOldest (people) 
person.age

