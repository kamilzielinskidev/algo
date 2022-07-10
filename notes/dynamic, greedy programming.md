- dynamic programming
  - divides bigger problems into smaller ones similar to the divide and conquer
  - it memorize the results of the smaller problems and not redoing the calculations once the same problems occurs again
  - it solves all the problems before dicision

- greedy programming
  - it assumes that by solving the problems the best way locally leads to solving the globals problems optimally
  - it takes the best decision for the current moment, then it recursively decides from the options that are left
  - it may not lead to the best global decisions

for knapsack problem:
  - if backpack size is 50
    - 1 item, value 60, size 10
    - 2 item, value 100, size 20
    - 3 item, value 120, size 30
  - for non dividable items:
    - for greedy programming it would take the first item, as the v/s is the biggest, and second item, the solution is not optimal
    - for dynamic programing it would take seond item and third one as the total value is greatest
  - for dividable items
    - greedy programming would take the first item, second one and part of the third one, it would solve the problem faster than dynamic programming