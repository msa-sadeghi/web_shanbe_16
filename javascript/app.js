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
        let usersResponse = await fetch(`https://jsonplaceholder.typicode.com/users`)
        let postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        let usersData = await usersResponse.json()
        let postsData = await postsResponse.json()
        displayUsers(usersData, postsData)
    }
    catch(error){
        console.log(error)
    }
   
}

fetchUsers()

function displayUsers(allUsers, allPosts){
    showLoading(false)
    allUsers.forEach(element => {
        let cardElement = document.createElement("div")
        let nameElement = document.createElement("div")
        nameElement.innerText=element.name
        nameElement.classList.add("item")
        let emailElement = document.createElement("div")
        emailElement.innerText=element.email
        let a = document.createElement("a")
        a.innerText = "show posts"
        a.style = "cursor:pointer"
        a.addEventListener('click', () =>  {
                const filteredPosts =  allPosts.filter(p=>p.userId === element.id)
                location.href = "posts.html?userId="+element.id
                console.log(filteredPosts)
        })
        cardElement.append(nameElement,emailElement, a)
        cardElement.classList.add("card")
        containerElement.append(cardElement)
    });
}