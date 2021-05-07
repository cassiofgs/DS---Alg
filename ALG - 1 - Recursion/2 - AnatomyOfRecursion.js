/*
All recursions should have two cases

1 - The Recursive Case
- Based in some scenario, the algorithm decide that has to call the function again.

2 - The Base Case
- Based in some scenario, the algorithm decide to stop the function an exit it.

3 - Return the value
- Always make sure to bubble up the return, so the value will eventually get to the top
- so in the case bellow if we don't put the return keyword on the inception() call, it will return undefined, because there was no return
in that function.
*/

let counter = 0;
function inception() {
    if (counter > 3) {
        return 'Done!'; //-> Base Case
    }

    counter++;
    return inception(); // -> Recursive Case
}

console.log(inception());