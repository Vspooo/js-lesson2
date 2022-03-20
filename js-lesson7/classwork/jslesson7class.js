


// function Cars (model,zavod,year,maxspeed,volume){
//     this.model=model
//     this.zavod=zavod
//     this.year=year
//     this.maxspeed=maxspeed
//     this.volume=volume
//     this.drive = function (){
//         console.log(`Їдемо зі швидкість ${this.maxspeed} на годину`)
//     }
//     this.info = function (){
//         for (const  key in this){
//             if (typeof this[key] !=='function') console.log(`${key} - ${this[key]}`)
//         }
//     }
//     this.newMaxSpeed =function (newSpeed){
//         this.maxspeed=this.maxspeed+newSpeed
//     }
//     this.changrYear = function (newValue){
//         this.year=newValue
//     }
//     this.addDriver = function (driver){
//         this.driver =driver
//     }
// }
// let addCar = new Cars ('BMW','Germany',2010,320,3.5)
// console.log(addCar)
// addCar.drive()
// addCar.info()
// addCar.newMaxSpeed(10)
// addCar.drive()
// addCar.changrYear(2010)
// addCar.info()
// addCar.addDriver('Volodya')
// console.log(addCar)




    // class Cars2{
    // constructor(model,producer,year,maxspeed,engineVal) {
    //     this.model = model;
    //     this.producer = producer;
    //     this.year = year;
    //     this.maxspeed = maxspeed;
    //     this.engineVal = engineVal;
    // }
    // drive(){
    //     console.log(`Їдемо зі швидкість ${this.maxspeed} на годину`);
    // }
    // info(){
    //     for (const key of this) {
    //         console.log(`${key} - ${this[key]}`)
    //
    //     }
    // }
    // newMaxspeed(newSpeed){
    //     this.maxspeed = this.maxspeed + newSpeed;
    // }
    // chargeYear(newValue){
    //  this.year = newValue
    // }
    // addDriver(driver){
    //     this.driver = driver
    // }
    // }
    // let addCar2 = new Cars2 ('BMW','Germany',2018,280,3.5)
    // console.log(addCar2)
    // addCar2.drive()
    // addCar2.info()
    // addCar2.newMaxspeed(20)
    // addCar2.drive()
    // addCar2.chargeYear(2020)
    // addCar2.info()
    // addCar2.addDriver('Vasya')
    // console.log(addCar2)




//     class Popelushka{
//     constructor(name,age,footsize) {
//         this.name = name;
//         this.age = age;
//         this.footsize = footsize;
//     }
//      }
//
//      const popelushaArray = [
//       new Popelushka('Vika',13,40),
//       new Popelushka('igor',15,42),
//       new Popelushka('Nastya',13,39),
//       new Popelushka('Vitya',14,41),
//       new Popelushka('Volodya',13,41),
//       new Popelushka('Oksana',12,39),
//       new Popelushka('Andriana',13,39),
//       new Popelushka('Solomia',14,40),
//      ];
//      console.log(popelushaArray)
//
//
//
//
// class Princ{
//     constructor(name,age,findShose) {
//         this.name = name;
//         this.age = age;
//         this.findShose = findShose;
//     }
// }
// const prince = new Princ('Vasya',45,40)
//
//
//
// const newPara = (popelushaArray,prince) =>{
//     for (const item of popelushaArray) {
//         if (item.footsize === prince.findShose){
//             return `tvoja popelushka : ${item.name}`
//         }
//
//     }
// }
// console.log(newPara(popelushaArray,prince))
//
//
//
// const emptyPrincess = popelushaArray.find((item) => item.footsize === prince.findShose);
//      console.log(emptyPrincess)