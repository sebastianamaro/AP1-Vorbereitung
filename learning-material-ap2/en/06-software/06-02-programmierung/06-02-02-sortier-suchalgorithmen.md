# Sorting and Search Algorithms

## Learning Objectives

After this chapter you should be able to:
- Describe and compare the main sorting methods
- Distinguish between linear and binary search
- Roughly classify Big-O notation

---

## Core Content

### Search Algorithms

| Method | Precondition | Complexity | Idea |
|--------|--------------|------------|------|
| **Linear search** | none | O(n) | Go through element by element |
| **Binary search** | **sorted** data | O(log n) | Halve the search range (compare the middle) |

> Binary search is much faster but requires the data to be **sorted**.

### Sorting Algorithms

| Method | Idea | Average | Stable? |
|--------|------|---------|---------|
| **Bubble Sort** | swap adjacent elements, "the largest bubble up" | O(n²) | yes |
| **Selection Sort** | repeatedly select the smallest element and move it to the front | O(n²) | no |
| **Insertion Sort** | insert an element into the already sorted part | O(n²) | yes |
| **Quicksort** | divide and conquer with a pivot | O(n log n), worst O(n²) | no |
| **Mergesort** | divide, sort, merge | O(n log n) | yes |

- **Simple methods** (Bubble/Selection/Insertion): O(n²), easy to understand, for small data sets.
- **Efficient methods** (Quicksort/Mergesort): O(n log n), for large data sets.

### Big-O Notation (Landau)

Describes the **growth** of the effort with the input size n:

`O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)`

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Big-O notation** | Describes asymptotic runtime growth |
| **Binary search** | Halving search on sorted data, O(log n) |
| **Divide and conquer** | Break the problem down recursively (Quicksort, Mergesort) |
| **Stability** | Equal elements keep their order |

---

## Exam Tips

- **Binary search requires sorted data** – a common trick question.
- Know the complexities of the standard methods (simple = O(n²), Quick/Merge = O(n log n)).
- Typical task: demonstrate a sorting pass **step by step** (e.g. Bubble Sort on a small list).

---

## Practice Exercise

**Task (based on ConSystem GmbH):** (1) Compare linear and binary search. (2) Demonstrate one pass of Bubble Sort on the list [5, 2, 8, 1].

<details>
<summary>Solution hint</summary>

Bubble pass 1: [2,5,8,1] → [2,5,8,1] → [2,5,1,8]; after further passes: [1,2,5,8].

</details>

---

## Cross-References

- [06-02-04 Pseudocode Analysis](./06-02-04-pseudocode-analyse.md)
- [06-02-03 Object Orientation (OOP)](./06-02-03-oop.md)
