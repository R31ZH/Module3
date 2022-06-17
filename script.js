var password = document.getElementById("password");
function genPassword() {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var number = "0123456789";
  var symbol = "!@#$%^&*()_+~\`|}{[]:;?><,./-=";
  var chars = "";
  var passwordLength = prompt("Length:Enter a number between 8-128");
if (passwordLength < 8 || passwordLength > 128 ){
  alert("Please enter a valid number between 8-128");
  return;
}
  var special = confirm("Would you like special characters?");
  var numeric = confirm("Would you like numbers?");
  var upper = confirm("Would you like uppercase?");
  var lower = confirm("Would you like lowercase?");
  if (upper === true) { chars += upperCase; }
  if (lower === true) { chars += lowerCase; }
  if (numeric === true) { chars += number; }
  if (special === true) { chars += symbol; }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = password;
}


