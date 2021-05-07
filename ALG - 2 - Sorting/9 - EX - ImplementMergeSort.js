const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// const numbers = [4, 3, 8, 1, 5, 2, 7, 6];

function mergeSort(array) {
    // Check Input
    if (!Array.isArray(array)) {
        return false;
    }

    let length = array.length;
    if (length <= 1) {
        return array;
    }
   
    let middle = Math.ceil(length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle);
    
    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right){
    let returnArray = [];

    let counterLeft = 0;
    let counterRight = 0;
    while (counterLeft < left.length || counterRight < right.length) {
        if (right[counterRight] === undefined || left[counterLeft] <= right[counterRight]) {
            returnArray.push(left[counterLeft]);
            counterLeft++;
        } else if (left[counterLeft] === undefined || left[counterLeft] > right[counterRight]) {
            returnArray.push(right[counterRight]);
            counterRight++;
        }
    }

    return returnArray;
}

console.log(mergeSort(numbers));
// console.log(numbers);