const students = [
    { name: 'Saghar', age: 22, score: 45 },
    { name: 'Qamar', age: 20, score: 75 },
    { name: 'Shams', age: 23, score: 60 },
    { name: 'Maher', age: 21, score: 30 },
    { name: 'Farhan', age: 24, score: 50 },
];

//Filtering student

const filter_std = () => {
    return students.filter(x => x.score < 50)
}
// console.log(filter_std())


//Maping student

let new_array =[]
const Map_std = () => {
    let std = students.filter(x => x.score >= 50)
    return new_array.push(std.map(value => value.name))
}


// Map_std()
// console.log(new_array)

// Fetch record 

const Fetch_record = () => {
    return students[2]
}

// console.log(Fetch_record())

//student with last character 'r'

const filteredStudents = () => {
    let student= students.filter(std => std.name[std.name.length -1] == 'r')
    return student.map(student => student.name)
}
    

// console.log(filteredStudents())

// sum of all scores


const sumofScores = () => {
    let sum = 0;
    students.map(std => sum+=std.score)
    return sum
}

// console.log(sumofScores())


// composite function

const square = n => n = n**2

const double = n => n = n*2

const composite = (a,b) => n => a(b(n))

const firstsqaurethendouble = composite(double,square)

// console.log(firstsqaurethendouble(3))

// working with this keyword

const calculator = {
    value:10,
    multiply:function(n){
        const multiplyNum = () => this.value*=n
        return multiplyNum(n)
    }
}
// console.log(calculator.multiply(5))




