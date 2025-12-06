products = []

const createCounter = function(){
    let id = 0
    return function(){
        id++
        return id
    }
}

function addItem(){
    let itemInputValue = document.getElementById("itemInput").value
    let p = new Product(itemInputValue, false)
    products.push(p)
    renderItems()

}
let idGenerator = createCounter()
function Product(name, status){
    this.id = idGenerator()
    this.name = name
    this.status = status   
}



function renderItems(){
    let listSectionElement = document.getElementById("listSection")
    listSectionElement.innerHTML = ""
    products.forEach(element => {
        listSectionElement.innerHTML += `<div class="list-item">
        <span class="item-number" style="font-size:12px; margin-right:5px">
        ${element.id}
        </span>
        <span class="item-content">
        ${element.name}
        </span>
        <button class="btn-danger" onclick=addToBasket(${element.id})>Add</button>
        </div>`
    });
}

function updateStats(){
    
}


function addToBasket(p){
//
}
function clearAll(){
    products = []
    renderItems()
    document.getElementById("itemInput") = ''
}