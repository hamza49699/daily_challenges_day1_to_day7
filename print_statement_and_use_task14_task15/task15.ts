//task15
let guestArr : string [] = ["Hamza", "Ali", "Huzaifa", "Bilal"];
let canNotAttend : string = "Hamza";

let newGuest : string = "Osama"
guestArr [guestArr.indexOf(canNotAttend)] = newGuest;

guestArr.map((items) => console.log(`Dear ${items}, you are invited to dinner.`))
