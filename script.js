
    var generateBtn = document.querySelector("#generate"); 

// Step 2 - this function generates a password with the charSet of blank, because it pulls it from line 19
function generatePassword() {
    var charSet = "";
        // Step 3 - asks user for length of password, if a letter is entered, it prompts line 10
    var passwordLength = prompt("Character length of the password?");
    if (isNaN(passwordLength)) {
        alert("Password length must be a number");
        return "";
    }    // Step4 - defines parameters for password length, if criteria is not met, it prompts then resets
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Password length must be greater than 8, and less than 128.");
        return "";
    }   // Step 5 - asks user about including lowercase, if confirm then apply, if cancel then move to step 6
    var includeLowercase = confirm("Include \"lowercase\" letters in your password?");
    if(includeLowercase === true) {
        charSet += "abcdefghijklmnopqrstuvwxyz";
    }   // Step 6 - asks user about including uppercase, if confirm then apply, if cancel then move to step 7
    var includeUppercase = confirm("Include \"uppercase\" letters in your password?");
    if (includeUppercase === true) {
        charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }   // Step 7 - asks user about including numbers, if confirm then apply, if cancel then move to step 8
    var includeNumbers = confirm("Include \"numbers\" in your password?");
    if(includeNumbers === true) {
        charSet += "1234567890";
    }   // Step 8 - asks user about including symbols, if confirm then apply, if cancel then move to step 9
    var includeSymbols = confirm("Include \"symbols\" in your password?")
    if(includeSymbols === true) {
        charSet += "!@#$%^&*()_+-=[}[]|\\;:\"'<.>.?/";
    }    // Step 9 - randomizes characters selected from user choices and continues to loop until finished
    var passwordOutput = ""; 
    for (var i = 0; i < passwordLength; i++) {
        passwordOutput += charSet.charAt(Math.floor(Math.random() * charSet.length));
    } // Step 10 - returns the password generated randomly from charSet and user choices
    return passwordOutput;
}  // This curly bracket ends the function of generatePassword on line 5

//Step 1 - calls for this function to writePassword, password is = to generatePassword, which calls to (line 5)
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}  // When user clicks button, it calls the writesPassword function and goes to line 41 (Step 1)
generateBtn.addEventListener("click", writePassword);