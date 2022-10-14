let student = [1, 'Somayeh', 41]

// let studentID = student[0]
// let studentName = student[1]
// let studentAge = student[2]

/////////// Array dest

 let [studentID, studentName, studentAge] = student

console.log('Id:', studentID );
console.log('Name:', studentName );
console.log('Age:', studentAge );


const showNumbers =()=> [1, 2, 3, 4, 5, 6]

// let [fNum, sNum, tNum] = showNumbers()//1 2 3
let [fNum, , , sNum, tNum] = showNumbers()//1 4 5

console.log('fnum:', fNum );
console.log('snum:', sNum );
console.log('tnum:', tNum );

// example3

let user = [1, 'Neda', 31, 'Tehran']

// let [userId, userName, userAge] = user
let [userId, userName, userAge, userCity='Rasht'] = user


console.log('Id:', userId );
console.log('Name:', userName );
console.log('Age:', userAge );
console.log('city:', userCity );  //undefined   // Rasht   //Tehran



/////////////// Object dest


let member = {
    id:1,
    name:'Sara',
    age: 42
}

// let id = member.id
// let name = member.name
// let age = member.age

// let {id, name, age} = member


let {id: userID, name = 'Leili', age} = member

// console.log(id);
console.log(userID);
console.log(name);  //Leili    //Sara
console.log(age);


/////////example 4


let customers = [
    {id:1, name:'Tohid', age:30, email:'tohid@gmail.com'},
    {id:2, name:'mehdi', age:38, email:'mehdi@gmail.com'},
    {id:3, name:'Ali', age:32, email:'ali@gmail.com'}
]

const getCustomer = customerID=>{ 
    let mainCustomer = customers.find( customers => customers.id = customerID)
    return mainCustomer

}

console.log(getCustomer(1)); //  {id:1, name:'Tohid', age:30, email:'tohid@gmail.com'},


let {name: customerName, email: customerEmail} = getCustomer(1)


console.log('customername:', customerName ); //Tohid
console.log('customeremail:', customerEmail ); //tohid@gmail.com
