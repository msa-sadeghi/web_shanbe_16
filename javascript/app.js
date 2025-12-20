let tasks = ["homework", "sleep", "online class", "sport"]
let itemsDiv = document.getElementById("items")
let divItems = tasks.map((item) => {
    return `<div style="color:red; margin:5px">${item}</div>`
})
console.log(divItems)
itemsDiv.innerHTML = divItems.join('')