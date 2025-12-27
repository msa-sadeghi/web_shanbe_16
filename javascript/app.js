let person1 = {
    name:"sara",
    age:32,
    greet(){
        console.log(`${this.name} is saying Hello`)
    }
}
let person2 = {
    name:"arash",
    age:35,
    greet(){
        console.log(`${this.name} is saying Hello`)
    }
}

person1.greet()
person2.greet()

function Person(name, age){
    this.name = name
    this.age = age
    this.greet = function(){
        console.log(`${this.name} is saying Hi`)
    }
}

let p1 = new Person("artin", 17)
p1.greet()

let p2 = new Person("mary", 19)
p2.greet()