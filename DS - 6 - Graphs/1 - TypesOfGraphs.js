/*
###########################################################################################################
Directed and Undirected

Undirected:
There are no movement restriction between nodes, every node can go both always between it's edges.

O --- O
 \   /
   O
Eg: Facebook, when a friend connect with you, you are also connected with this friend, it go both ways.

Directed:
There are restrictions between nodes, certain node maybe can go both ways in some edge, but it can be 
also unidirectional, 

O <---> O
 \     /
  > o >
Eg: Twitter, when someone follow you, they are connected to you, but you are not connected to then.
###########################################################################################################

###########################################################################################################
Weighted Graph:
Graphs can have not only value on it's nodes, but also on it's edges, which leave us with another type of
graphs.

Unweighted:
There are no value in the edges.

A -> B
\   /
  C

Weighted:
There are value in the edges.

   5
A ---> B
\ 2  / 4
   C
###########################################################################################################

###########################################################################################################
Cyclic and Acyclic

Cyclic:
The nodes are connected in a circular way, you can go back for a node where you start.

A -> B
\   /
  C

Acyclic:
The nodes don't have a circular connection

A ---> B
       |
       C
###########################################################################################################
*/