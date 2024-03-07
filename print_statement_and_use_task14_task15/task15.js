//task15
var guestArr = ["Hamza", "Ali", "Huzaifa", "Bilal"];
var canNotAttend = "Hamza";
var newGuest = "Osama";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
guestArr.map(function (items) { return console.log("Dear ".concat(items, ", you are invited to dinner.")); });
