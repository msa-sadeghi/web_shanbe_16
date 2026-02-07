const urlParams = new URLSearchParams(window.location.search)
const userId = urlParams.get('userId')
console.log(userId)