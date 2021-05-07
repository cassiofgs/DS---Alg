const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    // Check Input
    if (!Array.isArray(array)) {
        return false;
    }
    let length = array.length;
    if (length <= 1) {
        return array;
    }
    for (let j = 0; j < length; j++) {
        let ordered = true;
        for (let i = 0; i < length; i++) {
            let leftValue = array[i];
            let righValue = array[i+1];
            if (leftValue > righValue) {
                array[i] = righValue;
                array[i+1] = leftValue;
                ordered = false;
            }
        }

        if (ordered) {
            return array;
        }
    }
}

bubbleSort(numbers);
console.log(numbers);