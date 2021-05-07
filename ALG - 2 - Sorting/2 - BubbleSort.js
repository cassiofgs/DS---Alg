/*
Bubble Sort

It Sort comparing the values in pairs, and puting up the highest value, and repeat, until all is sorted.

3 2 4 1

3 > 2 so it swaps to 2 3 4 1

3 < 4 so it stays like these 2 3 4 1

4 > 1 swap 2 3 1 4

repeat

2 < 3 stay

3 > 1 swap 2 1 3 4

3 < 4 stay

repeat

2 > 1 swap 1 2 3 4

2 < 3 stay
3 < 4 stay
repeat and all values will be < than the other, so it is done.

Time O(n^2) - BAD
Space O(1)
*/