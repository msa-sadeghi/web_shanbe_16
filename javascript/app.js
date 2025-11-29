//function createCounter(){
//    let counter = 0
//    return {
//        increment: function(){
//        counter++
//        return counter
//        },
//        decrement:function(){
//        counter--
//        return counter
//        },
//        getCount: function(){
//            return counter
//        }
//    }
//}
//
//const counter1 = createCounter()
//console.log(counter1.increment())
//console.log(counter1.increment())
//console.log(counter1.increment())
//console.log(counter1.decrement())
//console.log("----------------")
//const counter2 = createCounter()
//console.log(counter2.increment())
//console.log(counter2.increment())


//let students = ["ali", "sara", "matin"]
//students.shift()
//console.log(`first array length: ${students.length}`)
//students.forEach(item => console.log(item))
//let arr1 = new Array("apple", "banana")
//arr1.pop()
//console.log(`second array length: ${arr1.length}`)
//
//arr1.forEach(item => console.log(item))
//let  arr2 = new Array(5)
//console.log(`third array length: ${arr2.length}`)
//
//arr2[0] = 12
//arr2[1] = 17
//arr2[2] = 16
//arr2[3] = 17
//arr2[4] = 18
//arr2.push(1000)
//arr2.unshift(999,888)
//arr2.forEach(item => console.log(item))

let grades = [100, 90, 89, 78, 98]
for(let i = 0; i < grades.length; i++){
    console.log(grades[i])
}

for(let item of grades){
console.log(item)
}

for(let i in grades){
    console.log(i)
    console.log(grades[i])
}

grades.forEach(x => console.log(x))