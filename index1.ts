let num1 = [1,2,3,4,5,6,7,8,9,10]

    // let sum = num1.reduce((val1, val2)=> val1+val2,0)
    // console.log(sum);
    // let sum = 0;
    // for(let i = 0; i < num1.length; i++){
    //     sum += num1[i]
        
        

    // }
    // console.log(sum);7
    // let student ={
    //     name: "Amna",
    //     age: 30,
    //     address: "Karachi",
    //     rollNo: 1111,
    // }
    // console.log(student.name);
    // console.log(student["name"]);




// type IRollNumber = string | number | boolean
// let rollNo : IRollNumber = "5"
// console.log(rollNo);

// type ITeacher = {
//     name: string,
//     rollNo: number,
// }
// type IStudent = {
//     name: string,
//     experience: number,
// }
// type IManagement = {
//     name: string,
//     description: string,
// }
// type IPersonnel = ITeacher & IStudent & IManagement
// let personnel : IPersonnel ={
//     name: "Amna",
//     rollNo: 12345,
//     experience: 1,
//     description: "Handle students in their problems"
// }
// console.log(personnel);






let myname: unknown = "Zia";
console.log((myname as string).length);
console.log((<string> myname).length)












    
    
