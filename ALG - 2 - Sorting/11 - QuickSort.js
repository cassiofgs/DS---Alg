/*
Quick Sort

It works selecting a pivot, and then cheking from left to right, if the item is lower than the pivot
we keep it on the left side, if the item is greater we switch the pivot with it's left item, then
we swap the item we are checking with the item we just switched the pivot with

Eg: *Let's select the last item always as pivot for this example
3 7 8 5 2 1 9 5 4 -> 4 is the pivot we check 7 > 4, swap 4 with 5, then 5 with 7
3 5 8 5 2 1 9 4 7 -> 4 is the pivot we check 5 > 4, swap 4 with 9, then 9 with 5
3 9 8 5 2 1 4 5 7 -> 4 is the pivot we check 9 > 4, swap 4 with 1, then 1 with 9
3 1 8 5 2 4 9 5 7 -> 4 is the pivot we check 8 > 4, swap 4 with 2, then 2 with 8
3 1 2 5 4 8 9 5 7 -> 4 is the pivot we check 5 > 4, swap 4 with 5, done
3 1 2 4 5 8 9 5 7 -> Now we know that 4 is in the middle, in the left everything is lower at right greater
3 1 2   5 8 9 5 7 -> So we separate left and right side of the middle (4) and apply the same principle of pivot and swapping order
3 1 2             -> 2 is the pivot we check 3 > 2, swap 2 with 3, done
1 2 3             -> Everything is ordered, wait for the concat of results
        5 8 9 5 7 -> 7 is the pivot we check 8 > 7, swap 7 with 5, then 5 with 8
        5 5 9 7 8 -> 7 is the pivot we check 9 > 7, swap 7 with 9, done
        5 5 7 9 8 -> Now we know that 7 is in the middle, in the left everything is lower at right greater
        5 5       -> Everything is ordered, wait for the concat of results
              9 8 -> 8 is the pivot we check 9 > 8, swap 8 with 9, done
              8 9 -> Everything is ordered, wait for the concat of results

1 2 3 4 5 5 7 8 9 -> Concat all the ordered results, and it is all sorted

The selection of the pivot is pivotal (pun intended) for the algorithm, because if we select the lowest
or greatest item or nearly then, it will take O(n^2) to sort.

With a good pivot selected, the best and average case for Quick Sort is O(n log n)

The space complexity for Quick Sort is O(log n) wich is good

The difference between this and Merge Sort is that the worst case for time complexity in Quick Sort 
is bad, but the space complexity is better.

   BEST       O(n log(n))
   AVERAGE    O(n log(n))
   WORST      O(n^2)
   SPACE      O(log(n))
*/