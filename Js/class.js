
// const userName = 'vasya';
// function getUserName(userName1) {
//     if(userName1.length != 0){
//         alert('Привет' + ' ' + userName1)
//     }
//     if(userName1.length == 0){
//         alert('Привет, гость!')
//     }
//       return; 
// }
// console.log(getUserName(userName));

// let pow = (a,b=1) => a**b;
// console.log(pow(3));
// console.log(pow(3,4));
/* задачка из презентации*/

// let a = "Stroka";
// let b = 5;

// function stroka (a, b) {
//    let c = "";
//    for (let i = 1; i <= b; i++) {
//       c = c + a;      
//    }
//    return c;
// }

// console.log(stroka(a, b));

let userName = 'nikita';

function toUpperFirstLetter(params) {
    return params[0].toUpperCase() + params.slice(1);
    
}console.log(toUpperFirstLetter(userName));
