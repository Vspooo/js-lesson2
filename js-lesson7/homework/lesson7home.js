// Створив функцію конструктор для об'єктів User з полями id, name, surname , email, phone,status
// function User(name,surname,age,gmail,phone,status){
//     this.name=name
//     this.surname=surname
//     this.age=age
//     this.gmail=gmail
//     this.phone=phone
//     this.status=status
// }






// function User (id,name,surname,gmail,phone){
//     this.id = id
//     this.name= name
//     this.surname=surname
//     this.gmail=gmail
//     this.phone=phone
// }
// let user1 = new User(14,'Vasya','Pypkin','ghg@gmail.com',38065329875)
// let user2 = new User(21,'Petya','Kolokol','hkf@gmail.com',38032596482)
// let user3 = new User(15,'Olya','Eveliva','evelliVa@gmail.com',38635614452)
// let user4 = new User(24,'Ivan','Kovalyk','KovalIvan@gmail.com',38635569841)
// console.log(user1,user2,user3,user4)









// let Users = [
//     {name:'Vasya',age:23,id:16},
//     {name:'Olya',age:23,id:6},
//     {name:'Anton',age:23,id:41},
//     {name:'Petya',age:23,id:3},
//     {name:'Vika',age:15,id:1},
// ]
// let filter = Users.filter(user=>user.id%2 === 0)
// console.log(filter)







// let Users = [
//     {name:'Vasya',age:23,id:16},
//     {name:'Olya',age:23,id:6},
//     {name:'Anton',age:23,id:41},
//     {name:'Petya',age:23,id:3},
//     {name:'Vika',age:15,id:1},
// ]
// console.log(Users.sort((a, b) => a.id - b.id));







// class Client{
//     constructor(id, name, surname, email, phone, order) {
//         this.id=id
//         this.name=name
//         this.surname=surname
//         this.email=email
//         this.phone=phone
//         this.order=order
//     }
//
// }
// let user1 = new Client(14,'Vasya','Pypkin','ghg@gmail.com',38065329875)
// let user2 = new Client(21,'Petya','Kolokol','hkf@gmail.com',38032596482)
// let user3 = new Client(15,'Olya','Eveliva','evelliVa@gmail.com',38635614452)
// let user4 = new Client(24,'Ivan','Kovalyk','KovalIvan@gmail.com',38635569841)
// console.log(user1,user2,user3,user4)








// class Array {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id
//         this.name = name
//         this.surname = surname
//         this.email = email
//         this.phone = phone
//         this.order = order
//     }
// }
// let empyArray = [
//     new Array(1,'Vinya','Biba','dfgf@gmail.com',38065329875,['ps5','i510400f','gtx 2060','ssd550gb']),
//     new Array (4,'Vika','aa','hghgh@gmail.com',38065329456,['xbox1','ps4','gtx1050ti']),
//     new Array (11,'Vasya','Pypkov','ghjyj@gmail.com',38065329785,['ps4','gxt3060']),
// ];
// let sortArray = empyArray.sort((min,max)=>min.order.length- max.order.length)
// console.log(sortArray)