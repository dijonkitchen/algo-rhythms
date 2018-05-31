// Fill in a graph and find the area water would fill

// Inputs: Graph in array form; positive integers only
// Output: Integer area water would fill if unlimited water

// Examples:
// [3,0,0,2,0,4] => 10 units
// [3,0,0,5,0,4] => 10 units

// Pseudocode:
// Search through array for top 2 max values
    // Find area between them that can be filled
    // Check for left and right of that area for other, smaller fillings
    // Return total filled for all three ranges

const maxIndices = (array, topCount) => {
    const copy = array.slice()
    const top = []

    for (let i = 0; i < topCount; i++) {
        const max = Math.max(...copy)
        const maxIndex = copy.findIndex(point => point === max)

        top.push(maxIndex)
        copy[maxIndex] = -1
    }

    return top
}

const fillGraph = graph => {
    if (graph.length <= 2) {
        return 0
    }

    const topIndices = maxIndices(graph, 2)
    const start = Math.min(topIndices[0], topIndices[1])
    const end = Math.max(topIndices[0], topIndices[1])

    const leftRange = graph.slice(0, start + 1)
    const topRange = graph.slice(start + 1, end)
    const rightRange = graph.slice(end)
    const height = Math.min(graph[topIndices[0]], graph[topIndices[1]])

    const filled = topRange.reduce((acc, curr) => {
        return acc + (height - curr)
    }, 0)

    return filled + fillGraph(leftRange) + fillGraph(rightRange)
}

console.log(fillGraph([2,1,3,2,1]), 1)
console.log(fillGraph([2,1,3,2,1,7,4,3,9]), 11)
console.log(fillGraph([1,1,3,3,0,0,1,3,9]), 8)
console.log(fillGraph([1,1,10,3,0,0,0,1,3,9]), 47)
console.log(fillGraph([1,1,10,3,0,0,0,1,3,2]), 11)
console.log(fillGraph([3,0,0,2,0,4]), 10)
console.log(fillGraph([3,0,0,5,0,4]), 10)
console.log(fillGraph([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6)
