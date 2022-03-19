// function numbers(num1,num2,num3){
//     if (num1<num2 && num1<num3){
//         console.log(num1)
//     }  else if(num2<num1 && num2<num3 ){
//        console.log(num2)
//     } else {
//         console.log(num3)
//     };
// }
// numbers(100,200,5);


// function numbers(num1,num2,num3){
//     if (num1>num2 && num1>num3){
//         console.log(num1)
//     }else  if (num2>num3 && num2>num1){
//         console.log(num2)
//     }else{
//         console.log(num3)
//     }
// };
// numbers(500,300,100);






// let nums = [500,300,11,233,55,44,5556,6,1];
// function numFunct(number){
//     let maxnum = number[0];
//     for (const element of number){
//         if(element>maxnum){
//             maxnum=element
//         }
//     }
//     return maxnum;
// }
// console.log(numFunct(nums));








// let nums = [500,300,11,233,55,44,5556,6,1];
// function numFunct(number){
//     let maxnum = number[0];
//     for (const element of number){
//         if(element<maxnum){
//             maxnum=element
//         }
//     }
//     return maxnum;
// }
// console.log(numFunct(nums));








// let nums = [2,5,3];
// function numsFunct (funct){
//     let num = 0;
//     for (const  arr of funct){
//         num+=arr
//     }
//     return num;
// }
// console.log(numsFunct(nums));







// let nums= [1,2,3];
// function numFucnt(Num){
//     let arr = 0;
//     for (const Numelement of Num){
//      arr+=Numelement;
//     }
//     return arr/Num.length
// };
// console.log(numFucnt(nums));










// function Nums(num){
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const NumElement of arguments){
//         if (NumElement > max){
//             max = NumElement
//         }  if (NumElement < min){
//             min = NumElement
//         }
//     }
//     console.log(max)
//     return min
// }
// console.log(Nums(1,2,3,4,5,6,7,8,9))







// function RandomNum (num){
//     let emput = [];
//     for (let  i = 0; i<num;i++){
//         emput.push(Math.floor(Math.random()*100));
//     }
//     return emput
// };
// console.log(RandomNum(11))







// function RandomNum(num,limit){
//     let empyt = [];
//     for (let i = 0;i < num; i++){
//         empyt.push(Math.round(Math.random()* limit));
//     }
//     return empyt
// }
// console.log(RandomNum(5,10))










//
// function reverse(Arr){
//     let  arr = [];
//     for (let i = arr.length-1,b=0;i>=0;i--,b++){
//         newArr[b] = newArr[i]
//     }
//     return newArr
// }
