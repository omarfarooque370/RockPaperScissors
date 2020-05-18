// Assignment Code


var generateBtn = document.querySelector("#generate");
var len=prompt("Enter the length of the password to generate (min 8 , max 16 characters)");
var divider=0;//To determine the length of each segment of the password

while(true){
var UPP=confirm("Do you want Uppercase alphabets in the password?");
if(UPP){divider++;}
var low=confirm("Do you want lowercase alphabets in the password?");
if(low){divider++;}
var numerals=confirm("Do you want numerals in the password?");
if(numerals){divider++;}
var spec=confirm("Do you want special characters in the password?");
if(spec){divider++;}
if(UPP===false && low===false && numerals===false && spec===false){
  alert("You must select at least one password character options as Yes");
}
else{
  break;
}

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

function generatePassword(){
  var upppw="";
  var lowpw="";
  var numpw="";
  var specpw="";
  var UPPER="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower=UPPER.toLowerCase();
  var numbers="0123456789";
  var special="`~!@#$%^&*()-=_+[]\{}|;':,./<>?";
  if(UPP){
    for (var a=0;a<(parseInt(len)/divider);a++){
  
      upppw=upppw+UPPER.charAt(Math.floor((Math.random()*UPPER.length)));
  
    }
  
  }
  if(numerals){
    for (var a=0;a<(parseInt(len)/divider);a++){
  
      numpw=numpw+numbers.charAt(Math.floor((Math.random()*numbers.length)));
  
    }
  
  }
  if(low){
    for (var a=0;a<(parseInt(len)/divider);a++){
  
      lowpw=lowpw+lower.charAt(Math.floor((Math.random()*lower.length)));
  
    }
  
  }
  if(spec){
    for (var a=0;a<(parseInt(len)/divider);a++){
  
      specpw=specpw+special.charAt(Math.floor((Math.random()*special.length)));
  
    }
  
  }
return upppw+lowpw+numpw+specpw;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
