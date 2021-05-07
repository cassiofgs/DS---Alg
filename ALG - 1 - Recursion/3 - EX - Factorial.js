function findRecursiveFactorial(value) {
    if (value === 0) {
        return false;
    }

    if (value === 1) {
        return value;
    }

    return value * findRecursiveFactorial(value-1);
}

function findIterativeFactorial(value) {
    if (value === 0) {
        return false;
    }

    let result = 1;
    for (let i = value; i >= 1; i--) {
        result = result * i;
    }

    return result;
}

console.log(findIterativeFactorial(5));
console.log(findRecursiveFactorial(5));