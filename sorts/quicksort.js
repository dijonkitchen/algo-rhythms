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

const quicksort = (array) => {

}
