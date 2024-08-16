const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

var result =[]
function calculator(num1,num2){
    //addition
    let addition = num1 + num2;
    
    result.push(addition)

    //subtraction
    let subtraction = num1 -num2

    result.push(subtraction)

    //multiplication
    let multiplication = num1 * num2

    result.push(multiplication)

    //division{validating user input}
    if(num2 ==0){
        console.log("Division by 0 is not allowed.")
    }
    else{
        let division = num1 / num2
        result.push(division)
    }
    

    

}

rl.question("Enter number 1:",(num1)=>{
    
   rl.question("Enter number 2:",(num2) =>{
    num1 = parseInt(num1)

    num2 = parseInt(num2)
   
    calculator(num1,num2)

    for(let value of result){

        console.log(value)

    }
    rl.close()
   })
})





