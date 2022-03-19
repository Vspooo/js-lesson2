

// const NumMin = (num1,num2,num3) =>{
//     if (num1<num2 && num1<num3){
//         console.log(num1)
//     } else if (num2 < num1 && num2<num3){
//         console.log(num2)
//     } else if (num3 < num1 && num3<num2){
//         console.log(num2)
//     }
// }
// NumMin(10,50,80)





// const NumMax = (num1,num2,num3) =>{
//     if (num1>num2 && num1>num3){
//         console.log(num1)
//     } else if (num2>num1 && num2>num3){
//         console.log(num2)
//     } else if (num3>num1 && num3>num2){
//         console.log(num3)
//     }
// }
// NumMax(10,50,60)


// let Nums = [1,85,2,6,78,9,62,63,5]
// const MaxNum = (array) =>{
//     let max = array[0]
//     for (const element of array){
//         if (element>max){
//             max=element
//         }
//     }
//     return max
// }
// console.log(MaxNum(Nums))



// let Nums = [1,5,6,2,8,9,100,256,42]
// const MinNum = (array) =>{
//     let min = array[0]
//     for (const element of array){
//         if (element<min){
//             min=element
//         }
//     }
//     return min
// }
// console.log(MinNum(Nums))


// let Nums = [5,10,15]
// const anynums = (array) =>{
//     let xxx = 0
//     for (const element of array){
//         xxx +=element
//
//     }
//     return xxx
// }
// console.log(anynums(Nums))



// let nums = [5,10,15]
// const anynums = (array) =>{
//   let xxx = 0
//     for (const element of array){
//         xxx+=element
//     }
//     return xxx/array.length
// }
// console.log(anynums(nums))







// const MinMax = (...arg) => {
//     let min = arg[0];
//     let max = arg[0];
//     for (const element of arg){
//         if (element>max){
//             max=element
//         }
//         if (element<min){
//             min=element
//         }
//     }
//    console.log(max)
//     return min
// }
// console.log(MinMax(10,50,60,70,89,544,65,1))







// const nums = (array) =>{
//     let xxx = []
//     for (let i = 0;i<array;i++){
//         xxx.push(Math.floor(Math.random()*100));
//     }
//     return xxx
// }
// console.log(nums(10))




// const RandomNum = (array,limit) =>{
//     let xxx = []
//     for (let i = 0;i<array;i++){
//         xxx.push(Math.round(Math.random()*limit))
//     }
//     return xxx
// }
// console.log(RandomNum(10,50))






// let nums = [1,2,3,4]
// const ReversNums = (array) =>{
//     let NewArray = []
//     for (let i = array.length-1,ri=0;i>=0;i--,ri++){
//         NewArray[ri]= array[i]
//     }
//     return NewArray
// }
// console.log(ReversNums(nums))

