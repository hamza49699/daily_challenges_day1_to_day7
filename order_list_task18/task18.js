var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesTovisit = ["Canada", "India", "America", "Italy", "Germany"];
//print in original order
console.log("Original order: ", placesTovisit);
//print in alphabetical order
console.log("Alphabetical order: ", __spreadArray([], placesTovisit, true).sort());
//print in original order again after sorting
console.log("Original order after sorting : ", placesTovisit);
//print in reverse aplphabetical order
console.log("Reverse alphabetical order: ", __spreadArray([], placesTovisit, true).sort().reverse());
//print in original order after reverse alphabetical order
console.log("Original order: ", placesTovisit);
//print Reverse the order of the list
placesTovisit.reverse();
console.log("Reversed order: ", placesTovisit);
//print Reverse the order of the list again to get back to the original order
placesTovisit.reverse();
console.log("Reversed order: ", placesTovisit);
//sort the array in alphabetical order
placesTovisit.sort();
console.log("Sorted in alphabetical order:", placesTovisit);
//sort the array in alphabetical order
placesTovisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in alphabetical order:", placesTovisit);
