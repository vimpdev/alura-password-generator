const $form = document.getElementById("form");
const $cleanBtn = document.getElementById("clean-btn");
const $generateBtn = document.getElementById("generate-btn");
const $options = document.getElementById("options");
const $password = document.getElementById("password");
const $length = document.getElementById("length");
const $clue = document.getElementById("clue");
const $checkBoxes = document.querySelectorAll("input[type='checkbox']");
const $strengths = document.querySelectorAll(".strength");
const $strengthWeak = document.getElementById("strength-weak");
const $strengthMedium = document.getElementById("strength-medium");
const $strengthStrong = document.getElementById("strength-strong");

let base = "";
let passwordLength = 0;
let password = "";

function getPasswordLength() {
  passwordLength = $length.valueAsNumber;
  showClue();
  activeButtons();
}

function createBaseString() {
  base = "";
  $checkBoxes.forEach( checkBox => {
    if (checkBox.checked) {
      base += checkBox.value;
    }
  } );
  activeButtons();
}

function activeButtons() {
  $cleanBtn.disabled = false;
  $generateBtn.disabled = !(base.length && passwordLength >= 6);
}

function showClue() {
  $clue.style.visibility = "visible";
}
function hideClue() {
  $clue.style.visibility = "hidden";
}

function disableGenerateBtn() {
  $generateBtn.disabled = true;
}

function disableOptions() {
  $options.disabled = true;
  disableGenerateBtn();
}
function activeOptions() {
  $options.disabled = false;
}

function classifyPassword() {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*()_+-={}|;:\,.<>?/]/.test(password);

  if ( hasUpperCase && hasLowerCase && hasNumber && hasSpecial ) {
    $strengthWeak.style.visibility = 'visible';
    $strengthMedium.style.visibility = 'visible';
    $strengthStrong.style.visibility = 'visible';
  } else if ( (hasUpperCase || hasLowerCase) && hasNumber ) {
    $strengthWeak.style.visibility = 'visible';
    $strengthMedium.style.visibility = 'visible';
  } else {
    $strengthWeak.style.visibility = 'visible';
  }
}

function hideStrength() {
  $strengths.forEach(strength => strength.style.visibility = "hidden");
}

function renderPassword() {
  $password.value = password;
  disableOptions();
  classifyPassword()
  hideClue()
}

function generatePassword(e) {
  e.preventDefault();
  password = "";
  for ( let i = 0; i < passwordLength; i++ ) {
    let randomIndex = Math.floor( Math.random() * base.length );
    let randomChar = base.charAt(randomIndex);
    password += randomChar;
  }
  
  renderPassword();
}

function clean() {
  base = "";
  passwordLength = 0;
  password = "";
  $form.reset();
  activeOptions();
  activeButtons();
  hideStrength();
}


document.addEventListener("DOMContentLoaded", disableGenerateBtn);

$length.addEventListener("input", getPasswordLength);

$checkBoxes.forEach( checkBox => {
  checkBox.addEventListener("change", createBaseString);
} )

$form.addEventListener("submit", generatePassword);

$form.addEventListener("reset", clean);
