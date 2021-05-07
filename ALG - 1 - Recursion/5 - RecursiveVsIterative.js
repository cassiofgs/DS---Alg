/*
"Anything you do with a recursion CAN be done iteratively (loop)"

But for some problems recursion is the best aproach, like all other things in programing, there are pros
and cons for both ways, and us as engineers have to decide wich one is the best for the problem we have

Rule of thumb, use recursion when you not sure how deep the data structures you are working with are, 
trees traversals are one example.

Tail call optimization* (Not adopted by chrome/mozila/ie) so not usable
New technique in JS ES6 that let recursion be more memory friendly

Good:
- DRY
- Readability

Bad:
- Large Stack
*/