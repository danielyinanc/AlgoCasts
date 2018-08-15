// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((rev,cha) => rev = cha+ rev,'');
}

reverse('adfg');

module.exports = reverse;

/* function reverse(str) {
    var strArr = str.split("");
    var strRev = "";
    for( i=strArr.length - 1; i >= 0 ; i--){
        strRev += strArr[i];
    } 

    return strRev;
} */

/* function reverse(str) {
    let reversed='';
    for(let character of str) {
        reversed = character + reversed;
    }

    return reversed;
} */

/* function reverse(str) {
    return str.split('').reverse().join('');
} */