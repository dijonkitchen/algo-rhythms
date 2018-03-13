// Quicksort:
// Input: array, left index, right index
// Output: None; mutates array for sorting

// Intuition:
// If left index is greater than right index
    // Return/end/stop
// Find a pivot point in an array
    // Ideally one that's median value to evenly divide it
    // Otherwise, choose midpoint or a random starting index
// Partition into an array with smaller values and larger values with the pivot value
// Quicksort smaller values
// Quicksort larger values

// Partitioning:
// Search from left-end and right-end of array inwards
    // Continue loop while left index is less than right index
        // While left value is less than pivot value
            // Increase left index
        // While right value is less than pivot value
            // Decrease right index
        // If left-index is less than right-index
            // Swap the values in the left and right indices
            // Increase left index
            // Decrease right index
    // Return left index

const quicksort = (array, leftIndex = 0, rightIndex = array.length - 1) => {
    if (leftIndex >= rightIndex) {
        return
    }
    const midIndex = Math.floor(leftIndex + (rightIndex - 1- leftIndex) / 2)
    const firstMidLast = [array[leftIndex], array[midIndex], array[rightIndex]].sort()
    const pivotIndex = array.indexOf(firstMidLast[1])

    const newLeftIndex = partition(array, leftIndex, rightIndex, pivotIndex)
    quicksort(array, leftIndex, newLeftIndex - 1)
    quicksort(array, newLeftIndex, rightIndex)
}

const partition = (array, leftIndex, rightIndex, pivotIndex) => {
    while (leftIndex <= rightIndex) {
        while(array[leftIndex] < array[pivotIndex]) {
            leftIndex++
        }
        while(array[rightIndex] > array[pivotIndex]) {
            rightIndex--
        }
        if (leftIndex <= rightIndex) {
            swap(array, leftIndex, rightIndex)
            leftIndex++
            rightIndex--
        }
    }
    return leftIndex
}

const swap = (array, leftIndex, rightIndex) => {
    const temp = array[leftIndex]
    array[leftIndex] = array[rightIndex]
    array[rightIndex] = temp
}

const array = [3,21,3,12,3,12,31,23,1]
quicksort(array)
console.log(array)

// Complexity
// Time:
// O(n log n) on average
// O(n^2) if reverse-sorted since it'll need to swap every element
// Space:
// O(log n) for recursive call stack
