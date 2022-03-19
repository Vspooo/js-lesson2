



// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
// let name = (string,symvol) =>{
//     let newArr = [];
//     if (string.includes(symvol)){
//         let a = string.split(symvol)
//         a.forEach((item) =>{
//             if (item) newArr.push(item);
//         })
//         console.log(newArr.join(''))
//     }
// }
// name(n3,'..','---','_')


// let random = (length, num) => {
//     let emptyArray = [];
//     for (let i = 0; i < length; i++) {
//         emptyArray.push(Math.floor(Math.random() * num));
//     }
//     return emptyArray;
// };
// let result = random(10, 100);
// console.log(result);



// let randomnums = (length,num) =>{
//     let Arr = []
//     for (let i =0;i<length;i++){
//         Arr.push(Math.floor(Math.random()*num))
//     }
//     return Arr
// }
// let result = randomnums(20,35);
// console.log(result)



// let randomnums = (lenght,nums) =>{
//     let Arr = []
//     for (let i = 0;i<lenght;i++){
//         Arr.push(Math.floor(Math.random()*nums))
//     }
//     return Arr
// }
// let result = randomnums(50,35)
// console.log(result)
// result.sort((a,b) => a-b)
// console.log(result)
// result.sort((a,b) => b-a);
// console.log(result)











// let fucntion = (lenght,nums) =>{
//     let arr = []
//     for (let i=0;i<lenght;i++){
//         arr.push(Math.floor(Math.random()*nums))
//     }
//     return arr.filter(value => value %2 === 0)
// }
// console.log(fucntion(10,50))









// let Array = (lenght,nums) =>{
//     let emptyarr = []
//     for (let i = 0;i<lenght;i++){
//         emptyarr.push(Math.floor(Math.random()*nums))
//     }
//     return emptyarr.map(value => value.toString())
// }
// console.log(Array(10,30))





// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//
// let sortNums = (arr, direction) => {
//     if (direction === 'asc') return arr.sort((a, b) => a - b);
//     if (direction === 'desc') return arr.sort((a, b) => b - a);
// };
// console.log(sortNums([1, 56, 9, -20, 2345, 34, 98, 5], 'desc') );




// let nums = [11,22,2]
// let sortNums = (arr,direct) =>{
//     if (direct === 'asc') return arr.sort((a,b) => a-b)
//     if (direct === 'des') return arr.sort ((a,b) => b-a)
// }
// sortNums('asc')
// sortNums('des')
// console.log(sortNums([1,2,3,6,8,9,50,3], 'des'))




//від більшого до меншого
// let  nums = [11,55,33]
// let sortNums = (arr,direct) =>{
//     if (direct === 'asc') return arr.sort((a,b) => a-b)
//     if (direct === 'des') return arr.sort((a,b) => b-a)
// }
// sortNums('asc')
// sortNums('des')
// console.log(sortNums(nums,'des'))




// від меншого до більшого
// let  nums = [11,55,33]
// let sortNums = (arr,direct) =>{
//     if (direct === 'asc') return arr.sort((a,b) => b-a)
//     if (direct === 'des') return arr.sort((a,b) => a-b)
// }
// sortNums('asc')
// sortNums('des')
// console.log(sortNums(nums,'des'))












// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let newFilter = coursesAndDurationArray.filter(value => {
//     return value.monthDuration > 5
// })
// console.log(newFilter)




