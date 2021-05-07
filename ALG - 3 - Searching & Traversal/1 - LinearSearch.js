/*
Linear Search

Goes item by item in a list/array and return something if find anything or nothing.

In the best case will find in O(1) if the item is the first one in the list, in the worst
case will find in O(n) if the item is the last item on the list.

Best        O(1)
Average     O(n)
Worst       O(n)
Space       O(1)

This JS find methods use linear search:
*/
var beasts = ['Centaur', 'Godzilla', 'Minotaur', 'Hydra'];

beasts.indexOf('Godzilla');

beasts.findIndex(function(item) {
    return item === 'Godzilla';
});

beasts.find(function(item) {
    return item === 'Godzilla';
});

beasts.includes('Godzilla');