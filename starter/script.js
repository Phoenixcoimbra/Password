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

// Function to prompt user for password options
function getPasswordOptions() {
  prompt('How many characters would you like your password to contain?');
  //condition if the character count is less than 8 or more than 128, repeat prompt until valid
  if (characterCount < 8 || characterCount > 128) {
    prompt('Password must be between 8 and 128 characters');
  }
  //condition if the character count is valid, confirm the following if not want to include them, exclude from password
  confirm('Click OK to confirm including special characters.');
  confirm('Click OK to confirm including numeric characters.');
  confirm('Click OK to confirm including lowercase characters.');
  confirm('Click OK to confirm including uppercase characters.');
  
}

// Function for getting a random element from an array
function getRandom(Palavra) {
  return Math.floor(Math.random() * Palavra.length);
  //collects a random character from each array
  var randomSpecial = specialCharacters[getRandom(specialCharacters)];
  var randomNumeric = numericCharacters[getRandom(numericCharacters)];
  var randomLower = lowerCasedCharacters[getRandom(lowerCasedCharacters)];
  var randomUpper = upperCasedCharacters[getRandom(upperCasedCharacters)];
  var randomPassword = randomSpecial + randomNumeric + randomLower + randomUpper;
  //collects the random characters into a single array
  var randomPasswordArray = randomPassword.split('');
  //shuffles the array
  randomPasswordArray.sort(function () {
    return 0.5 - Math.random();
  });
}

// Function to generate password with user input
function generatePassword() {

  var options = getPasswordOptions();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];
  
 }

// Get references to the #generate element and add event listener to generate button
var generateBtn = document.querySelector('#generate');


// Write password to the #password input
function writePassword() {
  var password = generatePassword();  
  var passwordText = document.querySelector('#password');
     passwordText.value = password;
     
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

//when clicked, the button will prompt the user for password options
generateBtn.addEventListener('click', getPasswordOptions);




