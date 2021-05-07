//#1 - Sort 10 schools around your house by distance:
// Insertion Sort
// Few items, its fairly simple to implement, uses constant space complexity O(1)

//#2 - eBay sorts listings by the current Bid amount:
// Radix or counting
// Because it is always in a range of numbers, and this range always will fit into Integers
// With this sorts we beat O(n log(n))

//#3 - Sport scores on ESPN 
// There is a lot of diferent formats of scores for diferent sports, mind that, ask it in a interview
// I first assume that we are talking about football, but it says sports
// Quick Sort
// ESPN handle a lot of sports so the space complexitu for merge sort could be too much here

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
// Merge Sort
// Data is so big that we are not sorting it in memory, so the space complexity advantage of quick sort kinda is down here
// And with a massive database, the worst case scenario for Quick Sort will be really bad, so we want to insure that we 
// will have a fair worst case scenario

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
// Insertion Sort
// Even with big existent data, we can assume (confirm that with the interviewer) that this preview data is already sorted
// So we only need to add this two new reviews in the correct place, and for that Insertion Sort is actually really fast
// And without costing space complexity

//#6 - Temperature Records for the past 50 years in Canada
//Tricky question, induces you to think about temperatures as integers, but they are decimals
// Radix or counting ###ONLY IF THE TEMPERATURES DON'T HAVE DECIMAL PLACES###
// If they have decimal places
// Quick Sort, so we can optimize on the space complexity and sort it in memory.

//#7 - Large user name database needs to be sorted. Data is very random.
// We don't have a lot of information here, so we can work with two main cases
// Merge Sort
// If we are not worried about memory consuption, memory is not expensive in the machine etc...
// OR
// Quick Sort
// If we are not worried about the worst case take more time, or need to be mindfull about the memory usage

//#8 - You want to teach sorting for the first time
// Bubble Sort OR Selection Sort
// Easy to implement and to teach some fundamentals