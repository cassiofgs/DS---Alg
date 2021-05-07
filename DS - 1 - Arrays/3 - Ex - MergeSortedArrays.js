function mergeSortedArrays(arr1, arr2) {
    // CHECK INPUT
    if (!arr1 || !arr2) {
        return 'there are not two arrays';
    }

    if (arr1.length === 0 ) {
        return arr2;
    }

    if (arr2.length === 0 ) {
        return arr1;
    }

    const mergedArray = [];
    let indexArr1 = 0;
    let indexArr2 = 0;
    while (arr1.length - 1 >= indexArr1 || arr2.length - 1 >= indexArr2) {
        if (!arr2[indexArr2] || arr1[indexArr1] < arr2[indexArr2]) {
            mergedArray.push(arr1[indexArr1]);
            indexArr1++;
        } else {
            mergedArray.push(arr2[indexArr2]);
            indexArr2++;
        }
    }

    return mergedArray;
}

console.log(mergeSortedArrays([0,3,4,31], [4,6,30]));
// [0, 3, 4, 4, 6, 30, 31]