const nemo = ['nemo'];

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('find nemo!');
        }    
    }
}

findNemo(nemo); // O(n) --> Linear Time

//The code will run n times because we are iterating through the array
//So as the input array grows, the code take more time to process, because we will have to 
//iterate through the entire array