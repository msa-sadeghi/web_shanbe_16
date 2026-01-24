let product = {
    id:1,
    name :'laptop',
    price:100
}

let div = document.createElement("div")
let product = JSON.parse(localStorage.getItem('p1'))
let span1 = document.createElement("p")
span1.innerHTML = product['id']
let span2 = document.createElement("p")
span2.innerHTML = product['name']
let span3 = document.createElement("p")
span3.innerHTML = product['price']
let img = document.createElement("img")

img.style.width="100%"
div.append(span1, span2, span3)

let img_input = document.getElementById("img")
img_input.addEventListener("input",(e)=>{
    let path = e.target.value.split("\\")
    img.src = './images/'+path[path.length-1] 
    div.append(img)
})

document.body.append(div)

let user = {
    name:"ali",
    age:25,
    email:"ali@gmail.com",
    city:'tehtarn'
}
let user2 = {
    name:"arash",
    age:25,
    email:"ali@gmail.com",
    city:'tehtarn'
}

console.log(Object.keys(user).length)


function Person(name, age){
    this.name = name
    this.age = age

    this.greet = function(){
        console.log(`hello from ${this.name}`)
    }
}

let p1 = new Person("sara", "34")
let p2 = new Person("armin", "34")
p1.greet()
p2.greet()

let div = document.querySelector("div")
div.innerHTML = p1.name


let userInput = document.querySelector("input")

userInput.addEventListener("blur", ()=>{
    let p = document.createElement("p")
    p.innerHTML = userInput.value
    document.body.append(p)
})

