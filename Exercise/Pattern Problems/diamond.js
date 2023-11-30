//Pattern:

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

let n = 5;
let string = "";
//Upside Pyramid
for (let i = 1; i <= n; i++) {
  //printing spaces
  for (let j = n; j > i; j--) {
    string += " ";
  }
  //printing star
  for (let k = 0; k < i * 2 - 1; k++) {
    string += "*";
  }
  string += "\n";
}
//Downside Pyramid
for (let i = 1; i <= n - 1; i++) {
  //printing spaces
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  //printing star
  for (let k = (n - 1) * 2 - 1; k > 0; k--) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
