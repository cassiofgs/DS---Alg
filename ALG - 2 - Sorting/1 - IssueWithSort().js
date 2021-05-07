/*
We need to make sure when we are using the pre built sort algorithm of our language, we know how it works
*/
const numbers = [2, 5, 34, 65, 7, 8];
console.log(numbers.sort()); // [ 2, 34, 5, 65, 7, 8 ]
/*
As you see above, in JS the number are converted to a String, and then, the language grab the charCode at 
index 0, so in 65, the language only care about the six, and put it before the 7 and 8, which is wrong

So if you don't built it, understand it.
*/
const spanish = ['único', 'árbol', 'cosas', 'fútbol'];
console.log(spanish.sort()); // [ 'cosas', 'fútbol', 'árbol', 'único' ]