let guests : string[] = ["Ali", "Hamza", "Hammad", "Shahzaib", "Huzaifa"];

console.log("only two people can inivited for dinner because of limited space");

while (guests.length > 2) {
    const removedGuest = guests.pop();
    console.log(`Sorry ${removedGuest}, you're no longer invited to dinner.`);

 }
guests.forEach((guest) => {
    console.log(`Dear ${guest}, you are still invited to dinner`);


 });
guests.pop();
guests.pop();
guests.pop();

console.log("final guest list:", guests);

