/*
Each node only can have one parent
Each node only can have at max two children (binary 2)

        1
    2       3
  4   5   6   7

Terminology:
- Perfect Binary tree: Everything until the last level is full, the last level has to have all elements.
1. On perfects tress, each level doubles the amount of nodes, so we can know how many are per level.
2. The amount of nodes on the bottom level, is equal to the sum of nodes of all above levels + 1.
   (bottom level here have 4 nodes, above we have 3 nodes + 1 will be 4 like the bottom).
   (Half of the nodes will be at the bottom level)
        1
    2       3
  4   5   6   7

- Full Binary tree: Each node that have children, has to be two children, then it is full (0 or 2 children)
        1
    2       3
  4   5
    6   7


*/