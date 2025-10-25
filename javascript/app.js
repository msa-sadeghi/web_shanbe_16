let messageDiv = document.getElementById("welcomeMessage")

function showWelcome(){
    let userName =  prompt("اسمت رو بگو لطفا")
    messageDiv.textContent = `سلام ${userName} خوبی؟`
    messageDiv.style.display = "block"
 
}