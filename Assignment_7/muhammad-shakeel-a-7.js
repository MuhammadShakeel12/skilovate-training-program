const getPersonInfo = function(person) {
    return `Name: ${person.name}, Age: ${person.age}`;
  };
  
console.log(getPersonInfo({ name: 'Ahsan Javed', age: 99 }));

//================== Arrow Function ===================//

const person = {
    name: 'Ahsan Javed',
    age: 99
}
const getInfo = () => {
    return `Name : ${person.name}, Age: ${person.age}`
}
console.log(getInfo(person))

//============= Implementation with Arrow function =============//

const Sum = (num1,num2) => {
   return num1 + num2
}
//console.log(Sum(3,5))

const Even_Odd = (num) => {
    if(num%2==0)
    {
       return `${num} Number is even`
    }else
    {
        return `${num} Number is odd`
    }
}
// console.log(Even_Odd(7))

const max_num = (num1,num2,num3) =>{
    return Math.max(num1,num2,num3) // here i am using Math object having static properties and methods init
}
// console.log(`${max_num(3,5,9)} is the largest number`)

const factorial = (num) =>{
    if(num == 0 || num == 1)
    {
        return 1;
    }else
    {
        return num *=factorial(num - 1);
    }
    
}

// console.log(factorial(4))

const palindrome_check = (value) => {
    let palindrome_value = value.toString().split('').reverse().join('');
    if(palindrome_value == value)
    {
        return `${value} is Plaindrome value`
    }else
    {
        return `${value} is not Palindrome value`
    }
}
// console.log(palindrome_check('aaddaa'))

const fibonacci_sequence = () =>{
    let x = 0
    let y = 1
    let sum = x + y
    console.log(x)

    while (sum < 50) {
        sum = x + y
        x = y
        y = sum
        console.log(sum)
    }
}
// fibonacci_sequence()

const prime_num = (n) =>{
    for(let i = 2; i < n; i++)
    {
        if(n % i == 0)
        {
            return `${n} is not a prime number`
        }
        else
        {
            return `${n} is a prime number`
        }
    }
}

// console.log(prime_num(3))\

const reverse_string = (value) =>{
    return value.toString().split('').reverse().join('')
}

// console.log(reverse_string('hello'))

// =============== function declaration =================//

function sum(num1,num2) {
    return num1 + num2
}
// console.log(sum(2,5))

function even_odd(num) {
    if(num%2==0)
    {
        return `${num} is even`
    }
    else
    {
        return `${num} is odd`
    }
}

// console.log(even_odd(4))

function Maximum(num1,num2,num3) {
    return Math.max(num1,num2,num3)
}

// console.log(Maximum(3,5,1))

function factorial_calculate(n) {
    if(n==0 || n==1)
    {
        return 1;
    }
    else
    {
        return n *= factorial_calculate(n - 1)
    }
}

// console.log(factorial_calculate(4))

function PalindromeCheck(value) {
    p_value = value.toString().split('').reverse().join('')
    console.log(p_value)
    if(p_value == value)
    {
        return `${value} is in palindrome sequence`
    }
    else
    {
        return `${value} is not in palindrome sequence`
    }
}

console.log(PalindromeCheck('shakeel'))

function FibonacciSequence() {
    let x = 0
    let y = 1
    let sum = x + y
    console.log(x)

    while (sum < 50) {
        sum = x + y
        x = y
        y = sum
        console.log(sum)
    }
}

// console.log(FibonacciSequence())

function prime_number(n) {
    for(let i = 2; i < n; i++)
        {
            if(n % i == 0)
            {
                return `${n} is not a prime number`
            }
            else
            {
                return `${n} is a prime number`
            }
        }
}
// console.log(prime_number(5))

function string_reversal(str) {
    return str.toString().split('').reverse().join('')
}

// console.log(string_reversal('hello'))


