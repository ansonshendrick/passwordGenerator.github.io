var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  let length = parseInt(prompt("Enter password length (between 8 and 128 characters):"));
  
  while (isNaN(length), length < 8, length > 128) {
    length = parseInt(prompt("Invalid input. Please enter a password length between 8 and 128 characters:"));
  }
  
  let lowercase = confirm("Include lowercase letters?");
  let uppercase = confirm("Include uppercase letters?");
  let numeric = confirm("Include numbers?");
  let special = confirm("Include special characters?");
  
  while (!lowercase && !uppercase && !numeric && !special) {
    alert("Pick at least one character type.");
    lowercase = confirm("Include lowercase letters?");
    uppercase = confirm("Include uppercase letters?");
    numeric = confirm("Include numbers?");
    special = confirm("Include special characters?");
  }
  
  let chars = "";
  if (lowercase) {
    chars += "abcdefghijklmnopqrstuvwxyz";
  }
  if (uppercase) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (numeric) {
    chars += "0123456789";
  }
  if (special) {
    chars += ",./<>?!@#$%&*-_;:";
  }
  
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  
  return password;
}

generateBtn.addEventListener("click", writePassword);
