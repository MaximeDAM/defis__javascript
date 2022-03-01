
function detectPalindrome(word) {
    let wordReverse = word.split("").reverse().join("");
    
  if (word == wordReverse) {
    console.log(word + " est un palindrome");
  } else {
    console.log(word + " n'est pas un palindrome");
  }
}

detectPalindrome("grave");