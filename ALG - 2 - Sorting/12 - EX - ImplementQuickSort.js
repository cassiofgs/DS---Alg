// Implementation considering the pivot will be the item in the far right, for another pivot
// such as random or in the middle, the implementation should change.

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// const numbers = [4, 3, 8, 1, 5, 2, 7, 6];

function quickSort(array, left, right){
    // Check Input
    if (!Array.isArray(array)) {
        return false;
    }

    let length = array.length;
    if (length <= 1) {
        return array;
    }

    let pivot = right;
    let init = left;

    while (left < right) {
        if (array[left] > array[right]) {
            let holder = array[right-1];
            array[right-1] = array[right];
            if (right - left > 1) {
                array[right] = array[left];
                array[left] = holder;
            } else {
                array[right] = holder;
            }
            right--;
        } else {
            left++;
        }
    }

    if (pivot === left && left > init) {
        array = quickSort(array, init, right - 1); // Sort left side of the middle    
    } else if (left === init && pivot > right) {
        array = quickSort(array, right + 1, pivot); // Sort right side of the middle
    } else if (pivot !== right && init !== left) {
        array = quickSort(array, init, right - 1); // Sort left side of the middle
        array = quickSort(array, right + 1, pivot); // Sort right side of the middle
    }

    return array;
}


//Select first and last index as 2nd and 3rd parameters
console.log(quickSort(numbers, 0, numbers.length - 1));
// console.log(numbers);