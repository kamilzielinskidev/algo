- hashtables are used for quick retrieving data
- hashmap is a pair key and value, where key is calculated by hashfn index of array
- hashfn should be adjusted to the data we store
- linear probing - if calculated address is occupied, find another empty address, when retrieving index, we check if value is correct, if not we look forward
- linked chaining - we store the more than one value in calculated by hashfn node, then if looking for that value we go only through the chained nodes
- horne's method of hashing string:
  - 'call' => 3045982 = 99·31^3 + 97·31^2 + 108·31^1 + 108·31^0 = 108 + 31· (108 + 31 · (97 + 31 · (99))) as 'c' in ascii is 99, 'a' is 97 etc.