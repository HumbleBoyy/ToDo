
// Constructor function
// function Cars(name, year, price){
//     this.name = name 
//     this.year = year
//     this.price = price
// }

// const cars1 = new Cars("Bentle", "2024", "250000")
// console.log(cars1)

// Call, Apply, Bind - Objectni contextini boshqa bir object contexti bilan o'zgartiradi

// let user = {
//     name:"Tommy",
//     surname:"Jerry",
//     age:22,
//     sayName: function(job){
//         console.log(`${this.name} - ${this.surname} - ${job}`)
//     }
// }

// let user2 = {
//     name: "Jerrime",
//     surname: "Micheal",
//     age:23
// }

// user.sayName.bind(user2)("Solder")
// user.sayName.apply(user2, ["Developer"])
// user.sayName.call(user2, ["Presedent"])

//  Array destruction and object destruction is that to get important data from them

const user2 = {
    name: "Jerrime",
    surname: "Micheal",
    age:23
}

// object destruction
const {name, surname} = user2
console.log(name, surname)

// Array destruction
const arry = [1,2,34,5,6,7,8,10]
const [a,b,c,d] = arry
console.log(a,b,c)

