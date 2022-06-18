big-o notatinon rules:
  1. different steps get added
  2. drop constants
  3. different inputs = different variables
  4. drop non-dominate terms from same variable

O(N) - linear
  - examples:  traversing arrays, linear sarch
O(A+B) - multipart
  - examples: nested arrays, traversing two arays separately
O(1) - constant
  - examples: traversing by index, pushing/popping
O(Log N) - logarithmic
  - examples: searching binary tree (dividing the data by two with every step)
O(N^2) - quadratic
  - examples: nested same array, bubble sort
O(N log N) - linearithmic
  - examples: merge sort, heap sort, quick sort
O(2^N) - exponential
  - examples: fibonnaci algo, each step the runtime doubles
    int fibonacci(int n)
    if (n <= 1) return 1;
    return fibonacci(n - 2 ) + fibonacci(n - 1);
O(N!) - factorial