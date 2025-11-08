let messageDiv = document.getElementById("t")

function showWelcome(){
    let userName =  prompt("اسمت رو بگو لطفا")
    messageDiv.textContent = `سلام ${userName} خوبی؟`
    messageDiv.style.display = "block"

    // let x = Number(prompt("enter the number"))
    // let y = Number(prompt("enter the number"))
    // let x = +prompt("enter the number")
    // let y = +prompt("enter the number")
    // console.log(x + y)
}

/*

*/

// const x = 12


// var y = 12
// y = 14

// var y

// let z = 15
// z = 16


// // let z
// // let w = 12
// // console.log(w)



// const person = {
//     name:  "sara",
//     age :  30
// }

// console.log(person.name)
// console.log(person.age)
// console.log(person["name"])
// console.log(person["age"])


// for(let i = 0; i <= 5; i++){
//     console.log(`number ${i}`)
// }

// let s1 = "salaam"
// let s2 = 'salaam'
// let s3 = `salaam`
// console.log(s1[0])
// console.log(s1.length)

// let x5 = true
// console.log(1 == 1)
// console.log(1 >= 1)
// console.log(1 <= 1)
// console.log(1 != 1)


// let string = "salaam"
// for(let i = 0; i < string.length; i++){
//     console.log(string[i])
// }



let x = "12"
let y = Number(x)
console.log(typeof y)

let z = 15
let v = z.toString()
console.log(typeof v)

let num2 = parseInt("123.5")
console.log(Number.isInteger(num2))
console.log(num2)
let num3 = parseFloat("123.4")
console.log(num3)

// and   or  not       &&    ||     !


let  count = 0
while(count < 5){
    console.log(`item# ${count}`)
    count++
}

let values = [0,1 ,2 ,3 ,4 ,5]
let sum =  0
values.forEach(function(num){
    console.log(num * 2)
    sum += num
})
console.log(`sum of all numbers : ${sum}`)
let names = ["artin", "armin", "arman", "sara", "matin", "arash"]
names.forEach(function(x){
    console.log(x[0])
})