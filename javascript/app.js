

function convertTemperature(){
    let tempInput = document.getElementById('tempInput').value
    let tempFrom = document.getElementById('tempFrom').value
    let tempTo = document.getElementById('tempTo').value
    let tempResult = document.getElementById('tempResult')
    let x = Number(tempInput)
    let result
    if(tempFrom == tempTo){
        result = x
    }else if(tempFrom == 'celsius'){
         if(tempTo == 'fahrenheit'){
            result = x * 2
         }else if(tempTo ==  'kelvin'){
            result = x * 3
         }
    }
    else if(tempFrom == 'fahrenheit'){
         if(tempTo == 'celsius'){
            result = x / 2
         }else if(tempTo ==  'kelvin'){
            result = x / 3
         }
    }
    else if(tempFrom == 'kelvin'){
         if(tempTo == 'fahrenheit'){
            result = x / 2
         }else if(tempTo ==  'celsius'){
            result = x / 3
         }
    }
    tempResult.innerHTML = result
    tempResult.style.display = "block"
}



