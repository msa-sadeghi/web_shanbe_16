const loadingElement = document.querySelector('.loading')
const containerElement = document.querySelector('.container')
function showLoading(flag){
    if(flag){
        loadingElement.style.display = "block"
    }else{
        
        loadingElement.style.display = "none"
    }
}

async function fetchUsers() {

    showLoading(true)
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users")
        let data = await response.json()
        displayUsers(data)
    }
    catch(error){
        console.log(error)
    }
   
}

fetchUsers()

function displayUsers(allUsers){
    showLoading(false)
    allUsers.forEach(element => {
        let cardElement = document.createElement("div")
        let nameElement = document.createElement("div")
        nameElement.innerText=element.name
        nameElement.classList.add("item")
        let emailElement = document.createElement("div")
        emailElement.innerText=element.email
        cardElement.append(nameElement,emailElement)
        cardElement.classList.add("card")
        containerElement.append(cardElement)
    });
}