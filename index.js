const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
let btnGenerate = document.getElementById("btnGenerate");
let passwordOneEl = document.getElementById("password-one");
let passwordTwoEl = document.getElementById("password-two");
let copyPasswordOne = document.getElementById("copyPasswordOne");
let copyPasswordTwo = document.getElementById("copyPasswordTwo");

function copyPassword(passwordEl, buttonEl){
  navigator.clipboard.writeText(passwordEl.value);
  buttonEl.textContent = "Copied!"

  setTimeout(function(){
    buttonEl.innerHTML = '<i class="fa-regular fa-copy"></i>';
  }, 2000);
}

btnGenerate.addEventListener("click", function () {
    passwordOneEl.value = "";
    passwordTwoEl.value = "";

    copyPasswordOne.innerHTML = '<i class="fa-regular fa-copy"></i>';
    copyPasswordTwo.innerHTML = '<i class="fa-regular fa-copy"></i>';
 
    for (let i = 0; i < 15; i++) {
    let passwordOne = characters[Math.floor(Math.random() * characters.length)];
    let passwordTwo = characters[Math.floor(Math.random() * characters.length)];

    passwordOneEl.value += passwordOne;
    passwordTwoEl.value += passwordTwo;

  }
  
});

copyPasswordOne.addEventListener("click", function(){
  copyPassword(passwordOneEl, copyPasswordOne);
});

copyPasswordTwo.addEventListener("click", function(){
  copyPassword(passwordTwoEl, copyPasswordTwo);
});