// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

function getPasswordOptions() {
  var characterCount = prompt('How many characters would you like your password to contain?');
  
  while (characterCount < 8 || characterCount > 128) {
    alert('Password must be between 8 and 128 characters');
    characterCount = prompt('How many characters would you like your password to contain?');
  } 

  if (characterCount >= 8 && characterCount <= 128) {
    var includeSpecial = confirm('Click OK to confirm including special characters.'); 
    var includeNumeric = confirm('Click OK to confirm including numeric characters.');
    var includeLowercase = confirm('Click OK to confirm including lowercase characters.');
    var includeUppercase = confirm('Click OK to confirm including uppercase characters.');

    return {
      characterCount: characterCount,
      includeSpecial: includeSpecial,
      includeNumeric: includeNumeric,
      includeLowercase: includeLowercase,
      includeUppercase: includeUppercase
    };
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

//collects a random character from each array
var randomSpecial = getRandom(specialCharacters);
var randomNumeric = getRandom(numericCharacters);
var randomLower = getRandom(lowerCasedCharacters);
var randomUpper = getRandom(upperCasedCharacters);

var randomPassword = randomSpecial + randomNumeric + randomLower + randomUpper;


  //collects the random characters into a single array
  var randomPasswordArray = randomPassword.split('');
  //shuffles the array
  randomPasswordArray.sort(function () {
    return 0.5 - Math.random();
  });





//Function to generate password with user input
function generatePassword() {
  var randomSpecial = specialCharacters[getRandom(specialCharacters)];
  var randomNumeric = numericCharacters[getRandom(numericCharacters)];
  var randomLower = lowerCasedCharacters[getRandom(lowerCasedCharacters)];
  var randomUpper = upperCasedCharacters[getRandom(upperCasedCharacters)];
  var randomPassword = randomSpecial + randomNumeric + randomLower + randomUpper;

  var randomPasswordArray = randomPassword.split('');
  randomPasswordArray.sort(function () {
    return 0.5 - Math.random();
  });

  var randomPasswordString = randomPasswordArray.join('');
  return randomPasswordString;
}

// Get references to the #generate element and add event listener to generate button
var generateBtn = document.querySelector('#generate');
generateBtn.addEventListener('click', writePassword);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Get references to the #generate element and add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
getPasswordOptions();
generatePassword();

