const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
    // Check Input
    if (!Array.isArray(array)) {
        return false;
    }
    let length = array.length;
    if (length <= 1) {
        return array;
    }

    for (let i = 1; i < length; i++) {
        for (let j = i; j >= 0; j--) {
            let leftIndex = j-1;
            if (array[j] <= array[leftIndex]) {
                let holder = array[j];
                array[j] = array[leftIndex];
                array[leftIndex] = holder;
            }
        }
    }
}

insertionSort(numbers);
console.log(numbers);