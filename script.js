// Assignment Code
//var generateBtn = document.querySelector("#generate");
// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");
  //passwordText.value = password;
//}
// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
/*
var keys = 

}
*/
var no = "";

var password=document.getElementById("password");
function genPassword() {
    var upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCase= "abcdefghijklmnopqrstuvwxyz";
    var number= "0123456789";
    var symbol= "!@#$%^&*()_+~\`|}{[]:;?><,./-=";
    var chars = "";
    var passwordLength = prompt("Length:Enter a number between 8-128");
    var special = prompt("Would you like special characters?");
    var numeric = prompt("Would you like numbers?");
    var upper = prompt("Would you like uppercase?");
    var lower = prompt("Would you like lowercase?");
    if (upper === "yes") {chars += upperCase;} 
    if (lower === "yes") { chars += lowerCase; }
    if (numeric === "yes") { chars += number; }
    if (special === "yes") { chars += symbol; }

    var password = "";
for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
password += chars.substring(randomNumber, randomNumber +1);
  }
        document.getElementById("password").value = password;
}











//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page