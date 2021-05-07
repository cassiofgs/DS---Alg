function reverse(str) {
    if (!str || str.length < 2 || typeof str !== 'string') {
        console.log('error');
        return false;
    }

    const newArray = [];
    
    for (let i = str.length - 1; i >= 0; i--) {
        newArray.push(str[i]);
    }
    
    return newArray.join('');
}

function reverseSimplified(str) {
    return str.split('').reverse().join('');
}

const reverseArrowFunction = str => str.split('').reverse().join('');

const reverseSpreadOperator = str => [...str].reverse().join('');

console.log(reverse('Cassinho do Magi!'));
console.log(reverseSimplified('Cassinho do Magi!'));
console.log(reverseArrowFunction('Cassinho do Magi!'));
console.log(reverseSpreadOperator('Cassinho do Magi!'));