- while checking if  values are equal, check if values are equal by reference, then it's checked if it is not null, then check significiant fields
- for 2-3 tree every node has either 1 or 2 keys
  - while looking for a key, we check if the key is lt, gt or between these 2 keys
  - while inserting a node
    - for root if there is 1 key in node, we add key in order
    - for root if there is 2 keys in node, we add key in order and move the middle key to parent in order and then we split children
    - for not root if there is 2 keys in node, we add key in order and move the middle key to parent, then we split nodes and repeat recursively
```
       ER
    /  |   \
  AC   HP   SX

   insert L

       ER                    ELR               L
    /  |    \    ->       /  | | \    ->     /   \
  AC   HLP   SX         AC   H P  SX        E     R
                                           / \   / \
                                         AC   H P   SX
```