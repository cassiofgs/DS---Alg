/*
Stable Algorithm:
An algorithm is considered stable if when two values are equal, the order of input is respected

Eg:
peach   apple
straw   peach
apple   straw
spork   spork

In this case, we are sorting for the first letter only, then straw and spork are equals, but straw was 
input first than spork, so it came first in the output as well, an stable algorithm works like this.

On the other hand, and unstable algorithm may not respect this order, not necessarily it will beak the 
order, but it could happen, there is no guarantee.
*/