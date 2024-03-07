var guests = ["Ali", "Hamza", "Hammad", "Shahzaib", "Huzaifa"];
console.log("only two people can inivited for dinner because of limited space");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry ".concat(removedGuest, ", you're no longer invited to dinner."));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are still invited to dinner"));
});
guests.pop();
guests.pop();
guests.pop();
console.log("final guest list:", guests);
