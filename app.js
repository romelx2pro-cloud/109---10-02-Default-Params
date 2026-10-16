// // The old way of adding a default value:
// // function multiply(x, y) {
// //   if (typeof y === 'undefined') {
// //     y = 1;
// //   }
// //   return x * y;
// // }

// // A slightly shorter version:
// // function multiply(x, y) {
// //   y = typeof y === 'undefined' ? 1 : y
// //   return x * y;
// // }

// // The new super clean way of adding defaults!
// function multiply(x, y = 1) {
//   return x * y;
// }
// multiply(3, 4); //12
// multiply(3); //3

// // Another example!
// // const greet = (person, greeting = 'hi') => {
// //   console.log(`${greeting}, ${person}!`)
// // }

// // Default value of an array:
// // const blah = (x, y = [1, 2, 3]) => {
// //   console.log(x, y);
// // }

// // Multiple default values are possible, but rare
// // const greet = (person, greeting = 'hi', punctuation = '!') => {
// //   console.log(`${greeting}, ${person} ${punctuation}`)
// // }
function m(x, y = 1) {
  // if (typeof y === "undefined") {
  //   y = 1;
  // }
  // y = typeof y === "undefined" ? 1 : y;
  return x * y;
}
const g = (p, g = "h", pu = "!") => {
  return `${g}, ${p}${pu}`;
};
console.log(g("t"));
const b = (x, y = [1, 2, 3]) => {
  console.log(x, y);
};
// b(1, 3);
