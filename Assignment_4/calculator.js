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
    num1 = parseInt(num1) // converting String into number

    num2 = parseInt(num2)
   
    calculator(num1,num2) // Running function on user input
    
    let sum =0
   
    for(let value of result){ //filtering arrays value 

        console.log(value)
        sum+=value
    
    }
    let avg = sum / result.length  //Finding average of all values 
    
    console.log(`Average :${avg} `)

    rl.close()
   })
})




