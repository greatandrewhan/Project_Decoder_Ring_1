// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  // 5x5 polybius square
  let square = [
    ["A", "B", "C", "D", "E"],
    ["F", "G", "H", "I/J", "K"],
    ["L", "M", "N", "O", "P"],
    ["Q", "R", "S", "T", "U"],
    ["V", "W", "X", "Y", "Z"],
  ];

  function polybius(input, encode = true) {
    // your solution code here

    let result = ""; //> result string

    // input toLowerCase
    input = input.toLowerCase();

    // encode
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        // if space, add to result (should leave spaces as is)
        if (input[i] === " ") {
          result += input[i]; // add space to result
        }

        // encode
        // for loop to find array index
        // j = row / k = column
        for (let j = 0; j < square.length; j++) {
          // for loop to find array indexP
          for (let k = 0; k < square[j].length; k++) {
            let squareLowercase = square[j][k].toLowerCase();
            if (input[i] === squareLowercase) {
              result += [k + 1] + [j + 1];
              // k + 1 to get column number
              // j + 1 to get row number
            }
            // if letter i or j and I/J to 42
            // (should translate both 'i' and 'j' to '42')
            if (
              (input[i] === "i" || input[i] === "j") &&
              square[j][k] === "I/J"
            ) {
              result += [k + 1] + [j + 1];
              // k + 1 to get column number
              // j + 1 to get row number
            }
          }
        }
      }
    }

    // decode
    else {
      // for loop to find array index
      for (let i = 0; i < input.length; i++) {
        // input slice to get two numbers
        let slice = input.slice(i, i + 2); //> slice of two numbers
        let row = slice.charAt(1) - 1; //> row
        let column = slice.charAt(0) - 1; //> column

        if (input[i] === " ") {
          //> if space
          result += input[i]; //> add space to result
        } else if (slice.length % 2 !== 0) {
          //> if length is odd
          return false; //> return false
        } else {
          //> if length is even
          result += square[row][column]; //> add to result += square[row][column]
          i++; //> increase i
        }

        result = result.toLowerCase(); //> result to lowercase
      }
    }

    return result; //> return result
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
