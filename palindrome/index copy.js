
let wordStocked = "";

function detectPalindrome(word) {
  let indexSymetrical = word.length - 1;

  for (let i = 0; i < word.length; i++) {
    if (word[i] == word[indexSymetrical]) {
      wordStocked += word[i];
    }

    indexSymetrical--;
  }

  if (word == wordStocked) {
    console.log(word + " est un palindrome");
  } else {
    console.log(word + " n'est pas un palindrome");
  }
}

detectPalindrome("laval");