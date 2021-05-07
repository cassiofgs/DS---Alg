/*
Insertion Sort
- Only if our input is small, or items are mostly sorted
- Use little memory an it is easy to implement / read

Bubble Sort:
- Not used it, its purpose its educational

Selection Sort:
- Not used it, its purpose its educational

Merge Sort:
- It is the fastest in worst cases
- If we are concerned about worst cases
- Consumes more space
BEST        AVERAGE     WORST       SPACE
o(n log(n))	Θ(n log(n))	O(n log(n))	O(n)

Quick Sort:
- Consumes less space
- Its worst case is worst than merge sort
- If we are concerned about the memory usage (eg: embarked systems), Quick sort is best
BEST        AVERAGE     WORST   SPACE
O(n log(n))	Θ(n log(n))	O(n^2)	O(log(n))

Heap Sort:
- Better space complexity than quick sort
- Better worst case than quick sort
- The average cases, even if is the same time complexity, it is usually slower than quick sort
BEST        AVERAGE     WORST      SPACE
Ω(n log(n))	Θ(n log(n))	O(n log(n))	O(1)

Quick x Heap: https://stackoverflow.com/questions/2467751/quicksort-vs-heapsort
*/