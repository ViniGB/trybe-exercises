// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verifyPalindrome(palindrome) {
  
const reversePalindrome = palindrome;
const checkPalindrome = reversePalindrome.split('').reverse('').join('');
  if (checkPalindrome === palindrome) {
    console.log('true');
  } else {
    console.log('false');
  }
}

verifyPalindrome('arara'); //true
verifyPalindrome('desenvolimento'); //false