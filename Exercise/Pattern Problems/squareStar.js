// 1. Pattern:
// *****
// *****
// *****
// *****
// *****

let n = 5; //rows or column count

string = ""; //Define an empty string
//External loop
for (let i = 0; i < n; i++) {
  //Internal loop
  for (let j = 0; j < n; j++) {
    string += "*";
  }
  string += "\n"; //newline after each row
}
console.log(string);
