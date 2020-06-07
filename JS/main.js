function palindrome(str) {
    var str1 = /[\W_]/g;
    var str2 = str.toLowerCase().replace(str1, "");

    console.log(str2);
    var reverse = str2.split("").reverse().join("");
    if(reverse === str2) {
         return true;
    }
       return false;
}

console.log(palindrome('racecar9'));