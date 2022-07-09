- stability of a sorting algorithm determines how it treats the same values. If it shuffles the order of equal values it means that it's not stable, if it keeps the order it means its stable. Stability matters because we aim for sorting by the key, not the other properties. For example if we sort employees by the age, we want the other props like name, not to be touched


![](Sorting%20algorithms%20summary.png)

- insertion sorting
  - best - N, worst - N^2
  - pros
    - good for quite sorted data
    - no aux arrays
    - simple
  - cons
    - worst for reversed arrays or big amount of data
    - userfull only for short arrays
- merge sort
  - best - N lg N, worst - N lg N
  - pros
    - quick for large lists
    - stable
  - cons
    - required aux array, which takes N memory
    - not good for small data, as it do the process even if the lis is sorted
- quick sort
  - best - N lg N, worst - N^2
  - pros
    - in practice faster than merge sort
    - no need for aux array
  - cons
    - its not stable
- heap sort
  - best - N lg N, worst - N lg N
  - pros
    - fast
    - no extra aux array
  - cons
    - requires maintaining the structure
    - inserting requires more time