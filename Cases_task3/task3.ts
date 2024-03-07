let personName: string = "Hamza Javed";

//In lowerCase
console.log("lowercase:", personName.toLowerCase());

//In upperCase
console.log("Uppercase:", personName.toUpperCase());

//In TitleCase
console.log("titleCase:", personName.replace(/\b\w/g,c=> c.toUpperCase()));
