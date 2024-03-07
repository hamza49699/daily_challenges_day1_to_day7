let placesTovisit : string [] = ["Canada" , "India", "America", "Italy", "Germany"];
//print in original order
console.log("Original order: ", placesTovisit);

//print in alphabetical order
console.log("Alphabetical order: ", [...placesTovisit].sort());

//print in original order again after sorting
console.log("Original order after sorting : ", placesTovisit);

//print in reverse aplphabetical order
console.log("Reverse alphabetical order: ", [...placesTovisit].sort().reverse());

//print in original order after reverse alphabetical order
console.log("Original order: ", placesTovisit);

//print Reverse the order of the list
placesTovisit.reverse();
console.log("Reversed order: ",placesTovisit);

//print Reverse the order of the list again to get back to the original order
placesTovisit.reverse();
console.log("Reversed order: ",placesTovisit);

//sort the array in alphabetical order
placesTovisit.sort();
console.log("Sorted in alphabetical order:", placesTovisit);

//sort the array in alphabetical order

placesTovisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in alphabetical order:", placesTovisit);







