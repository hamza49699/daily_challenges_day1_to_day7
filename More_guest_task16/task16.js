// task16
var guestArr = ["Hamza", "Ali", "Huzaifa", "Bilal"];
var canNotAttend = "Hamza";
var newGuest = "Osama";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
// guestArr.map((items) => console.log(`Dear ${items}, I found a bigger dinner table so I'm inviting more peoples.`));
//beginning
var guestBeg = "Hammad";
guestArr.unshift(guestBeg);
console.log(guestArr);
//Middle
var middleguest = "Faizan";
var middleIndex = guestArr.length / 3;
guestArr.splice(middleIndex, 0, middleguest);
console.log(guestArr);
//append
guestArr.push("Shahzaib");
console.log(guestArr);
//new invitation
guestArr.map(function (items) { return console.log("Dear ".concat(items, ", you are invited in the more people list for dinner")); });
