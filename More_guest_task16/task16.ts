// task16
let guestArr : string [] = ["Hamza", "Ali", "Huzaifa", "Bilal"];

let canNotAttend : string = "Hamza";
let newGuest : string = "Osama";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
// guestArr.map((items) => console.log(`Dear ${items}, I found a bigger dinner table so I'm inviting more peoples.`));

//beginning
let guestBeg : string = "Hammad";
guestArr.unshift(guestBeg);
console.log(guestArr);

//Middle
let middleguest : string = "Faizan";
let middleIndex = guestArr.length/3;
guestArr.splice(middleIndex,0,middleguest);
console.log(guestArr);

//append
guestArr.push("Shahzaib");
console.log(guestArr);
//new invitation
guestArr.map((items) => console.log (`Dear ${items}, you are invited in the more people list for dinner`));

