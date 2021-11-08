// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = "abcdefghijklmnopqrstuvwxyz"; // Alphabet consists of 26 letters

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift == 0 || shift < -25 || shift > 25) {
      return false;
    } // if shift is not a number or is not between -25 and 25, return false

    // Decoding
    if (!encode) shift = shift * -1; // if encode is false, shift is negative so multiply by -1

    const input_lower = input.toLowerCase(); // convert to lowercase
    let result = ""; // initialize result string

    for (let i in input_lower) {
      // indexOf() - index of will return just the first matching occurrence in the index that referring to
      let index = alphabet.indexOf(input_lower[i]); // get index of current letter in alphabet

      if (index === -1) {
        // -1 means letter is not in alphabet
        result += input_lower[i]; // if not in alphabet, add to result
      } else {
        // if in alphabet
        let new_index = index + shift; // get new index
        if (new_index > 25) {
          new_index = new_index - 26; // if new index is greater than 25, subtract 26
        } else if (new_index < 0) {
          new_index = 26 + new_index; // if new index is less than 0, add 26
        }
        result += alphabet[new_index]; // add new letter to result
      }
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
