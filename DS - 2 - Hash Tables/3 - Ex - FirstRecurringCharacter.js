// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4];
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4];
// It should return 1

// Given an array = [2,3,4,5];
// It should return undefined

function firstRecurringCharacter(array) {
    //Check input
    if (!array) {
        return 'Parameter invalid';
    }

    if (array.length <= 1) {
        return 'Just one character in the array';
    }

    const checkNumbers = new Set();
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (checkNumbers.has(item)) {
            return item;
        }
        checkNumbers.add(item);
    }
    return undefined;
}

console.log(firstRecurringCharacter([2,3,4,5]));