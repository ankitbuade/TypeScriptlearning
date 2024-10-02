// Interface are similar to types but with some extra power like if we need to pass parameter as object then we will need interface

// creating Interface

// Creating Interfaces
 
// interface Transaction {
//     payeeAcNumber: number;
//     payerAcNumber: number;
// }

// interface BankAccount {
//     name: string;
//     age: number;
//     accountNumber: number;
//     balance :number,
//     transactionDetails: Transaction[];
// }

// const transaction1: Transaction = {
//     payeeAcNumber: 254,
//     payerAcNumber: 54,
// };
// const transaction2: Transaction = {
//     payeeAcNumber: 254,
//     payerAcNumber: 54,
// };

// const bankAccountUser : BankAccount = {
//     name: "Ankit",
//     age: 22,
//     accountNumber: 53435,
//     balance : 5000,
//     transactionDetails: [transaction1,transaction2],
// };

                                     


                                     /*Extend in interface*/ 


// interface Book {
//     name: string,
//     price:number,
//     author:string
// }

// interface EBook extends Book {
//     name: string
//     price:number
//     author:string
//     fileSize : number
//     DocFormat : string
// }

// interface AudioBook extends EBook{
//     name: string
//     price:number
//     author:string
//     fileSize : number
//     DocFormat : string
//     Time : number|string
// }

// const book: AudioBook= {
//         name :"made easy",
//         price : 200,
//         author :"narsimha k.",
//         fileSize :1,
//         DocFormat :".pdf",
//         Time :"5 hour"
// }





                      /* Merging of interface */

// if we declare multiple interface with same name then Ts merge them Automatically

// interface Book {
//     name : string
//     pages :number
// }

// interface Book {
//         author:string
// }

// const book : Book= {
//         name:"abc",
//         pages:500,
//         author:"anb",
// }




                                /*Unions in TypeScript*/
//  by this pipe Sign (  |  )  We can do union in typescript
//  but if we have to applt any property which is for string then we need to do narrowing
// narrowing is process of providing ts a logic to diffrectiate between types

// type ID = number | string

// function printID(id:ID){
//     if(typeof id==="string"){
//         console.log(id.toUpperCase())
//     }else{
//         console.log(id)
//     }

// }

// printID("wow")



