// Assignment code here
function generatePassword() {
  let numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let uppercaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let lowercaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let specialChar = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  let possibleChar = [];
  let finalPwd = '';

  let lengthOfPwd = prompt("How many characters do you want in your password? Choose between 8-128 characters.");

  if (lengthOfPwd < 8 || lengthOfPwd > 128) {
    return ("please select length more than 8 or less than 128 characters")
  } else {
    let lowChars = prompt("do you want lowerCase chars in your password,yes/no");

    if (lowChars) {
      possibleChar = possibleChar.concat(lowercaseChar)
    }
    let upperChars = prompt("do you want upper chars in your password,yes/no");

    if (upperChars) {
      possibleChar = possibleChar.concat(uppercaseChar)
    }
    let numericalChar = prompt("do you want numericals in your password,yes/no");
    if (numericalChar) {
      possibleChar = possibleChar.concat(numericChar)
    }

    let specialChars = prompt("do you want specialChars in your password,yes/no");
    if (specialChars) {
      possibleChar = possibleChar.concat(specialChar)
    }

    if ((!lowChars) && (!upperChars) && (!numericalChar) && (!specialChars)) {
      return ('please select at least one type of character to generate password')
    }

    for (let i = 0; i < lengthOfPwd; i++) {
      const charToAdd = Math.floor(Math.random() * possibleChar.length);
      finalPwd = finalPwd + possibleChar[charToAdd];
    }
    return finalPwd;
  }
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
