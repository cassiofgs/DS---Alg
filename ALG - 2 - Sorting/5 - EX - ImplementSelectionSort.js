const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    // Check Input
    if (!Array.isArray(array)) {
        return false;
    }
    let length = array.length;
    if (length <= 1) {
        return array;
    }

    for (let i = 0; i < length; i++) {
        let lowestValue = array[i];
        let index = i;
        for (let j = i; j < length; j++) {
            if (lowestValue > array[j]) {
                lowestValue = array[j];
                index = j;
            }
        }
        array[index] = array[i];
        array[i] = lowestValue;
    }
}

selectionSort(numbers);
console.log(numbers);