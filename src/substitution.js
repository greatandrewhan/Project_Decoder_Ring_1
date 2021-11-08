// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    let abc = "abcdefghijklmnopqrstuvwxyz"; //> alphabet 26 letters
    let uniqueChars = []; //> array of unique characters
    let result = ""; //> result string

    // Error handling
    // if the substitution alphabet is missing
    if (!input || !alphabet || alphabet.length !== 26) {
      // if input is empty or alphabet is missing or alphabet is not 26 characters
      return false; //> return false
    }
    // should return false if the substitution alphabet does not contain unique characters
    for (let i = 0; i < alphabet.length; i++) {
      uniqueChars.push(alphabet[i]); //> push each character into the array
    }
    uniqueChars = uniqueChars.sort(); //> sort uniqueChars alphabetically
    for (let i = 0; i < uniqueChars.length; i++) {
      if (uniqueChars[i] === uniqueChars[i + 1]) {
        return false;
      }
    }

    // should preserve spaces
    for (let i = 0; i < input.length; i++) {
      let inputArray = input[i].toLowerCase(); //> convert input to lowercase
      if (inputArray === " ") {
        //> if input is a space
        result += inputArray; //> add space to result
      }

      // encode
      if (encode) {
        for (let j = 0; j < abc.length; j++) {
          //> loop through abc
          if (inputArray === abc[j]) {
            //> if inputArray is equal to abc
            result += alphabet[j]; //> add the corresponding character from the alphabet to result
          }
        }
      } else {
        //> decode
        // should decode a message by using the given substitution alphabet
        for (let j = 0; j < alphabet.length; j++) {
          //> loop through alphabet
          if (inputArray === alphabet[j]) {
            //> if inputArray is equal to alphabet
            result += abc[j]; //> add the corresponding character from abc to result
          }
        }
      }
    }
    return result; //> return result
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
