//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringIterative(str) {
    const newArray = [];
    let strToArray = str.split('');

    for (let i = strToArray.length-1; i >= 0; i--) {
        newArray.push(strToArray[i]);
    }

    return newArray.join('');
}

const newArray = [];
function reverseStringRecursive(str) {
    //console.log(str);
    if (!Array.isArray(str)) {
        str = str.split('');
    }
    newArray.push(str.pop());
    if (str.length > 0) {
        reverseStringRecursive(str);
    }
    
    return newArray.join('');
}

// console.log(reverseStringIterative('yoyo mastery'));
console.log(reverseStringRecursive('yoyo mastery'));
//should return: 'yretsam oyoy'