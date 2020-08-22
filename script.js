// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //final password set here and displayed on screen
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


}

function generatePassword(password) {
  
  // randomizes number and grabs either upper, lower, special, or number
  var uLRandom;
  //using passwordSize Function to prompt for a size
  var passwordLength = passwordSize();
  var password = " ";
  // random number to get a random letter from alphabet(1-26)
  var randomLetter;
  // random number to get a random character
  var randomCharacter;
  var randomNumber;
  // string of all letters lower case
  var lettersLower = "abcdefghijklmnopqrstuvwxyz";
  // string of all letters upper case
  var lettersUpper = lettersLower.toUpperCase();
  // string of all special characters
  var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  // string of all numbers
  var number = "0123456789";

  // gets a random value from array using uLRandom
  var randomArray = [1,2,3,4];

  //pulls you in the while loop validation
  var notSelected = true;
  // used to find value to splice
  var index;
  // calls function to check if conditions are wanted by user + validates that at least 1 is selected
  while(notSelected || !lowerCaseOnOff && !upperCaseOnOff && !specialCharOnOff && !numberOnOff)
  {
  var lowerCaseOnOff = useLowerCase();
  var upperCaseOnOff = useUpperCase();
  var specialCharOnOff = useSpecialCharacter();
  var numberOnOff = useNumber();
    if(!lowerCaseOnOff && !upperCaseOnOff && !specialCharOnOff && !numberOnOff)
    {
      alert("Must select at least 1 to generate password");
    }
    notSelected = false;
  }

  while(!lowerCaseOnOff || !upperCaseOnOff || !specialCharOnOff || !numberOnOff)
  {
    if(!lowerCaseOnOff)
    {
      index = randomArray.indexOf(1);
      randomArray.splice(index,1);
      lowerCaseOnOff = true;
    }
    if(!upperCaseOnOff)
    {
      index = randomArray.indexOf(2);
      randomArray.splice(index,1);
      upperCaseOnOff = true;
    }
    if(!specialCharOnOff)
    {
      index = randomArray.indexOf(3);
      randomArray.splice(index,1);
      specialCharOnOff = true;
    }
    if(!numberOnOff)
    {
      index = randomArray.indexOf(4);
      randomArray.splice(index,1);
      numberOnOff = true;
    }
  }
  console.log(randomArray);
  
  // change the random number range if depending on t/f values
    
  //loop depending on random passwordLength - Gets random password
  for (var i = 0; i < passwordLength; i++) {
    randomLetter = Math.floor(Math.random() * 26);
    randomCharacter = Math.floor(Math.random() * 30);
    randomNumber = Math.floor(Math.random() * 10);
    uLRandom = Math.floor(Math.random() * randomArray.length);

    
    // if upper case is off and the random number is 2, it will use lowercase
    if(lowerCaseOnOff && randomArray[uLRandom] === 1 )
    {
      password = password + lettersLower.charAt(randomLetter);
    }
    if(upperCaseOnOff && randomArray[uLRandom] === 2  )
    {
      password = password + lettersUpper.charAt(randomLetter);
    }
    if(specialCharOnOff && randomArray[uLRandom] === 3 )
    {
      password = password + specialCharacters.charAt(randomCharacter);
    }
    if(numberOnOff && randomArray[uLRandom] === 4 )
    {
      password = password + number.charAt(randomNumber);
    }
    
  }

  return password;
}

function passwordSize(passwordLength)
{
  var passwordLength = 0;
  passwordLength = prompt("How long do you want your password to be?");
  return passwordLength;
}

function useLowerCase()
{
  var lowerCaseOnOff = confirm("Do you want to use lower case?"); 
  return lowerCaseOnOff;
}
function useUpperCase()
{
  var upperCaseOnOff = confirm("Do you want to use upper case?"); 
  return upperCaseOnOff;
}
function useSpecialCharacter()
{
  var specialCharOnOff = confirm("Do you want to use special characters?"); 
  return specialCharOnOff;
}
function useNumber()
{
  var numberOnOff = confirm("Do you want to use numbers?"); 
  return numberOnOff;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
