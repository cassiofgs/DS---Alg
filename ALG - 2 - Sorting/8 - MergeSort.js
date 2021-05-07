/*
Merge Sort

It works spliting a set of data into half recursively, until we have only one item in each set

                                    43815276
                                43    81    52    76
                              4   3  8  1  5  2  7  6

After that, we start to regroupe the itens in sets, sorting then while we regroup.

                            4   3   8   1   5   2   7   6
                              34      18      25      67 //Note how we sorted then while regrouping
                                 1348            2567 //Again
                                        12345678    //One last time

The difference between Merge and Quick sort is that Merge has a better worst case time complexity but
it has a worst space complexity. (Please refer to 11 - QuickSort.js to compare then)

   BEST       O(n log(n))
   AVERAGE    O(n log(n)) 
   WORST      O(n log(n))
   SPACE      O(n)
*/