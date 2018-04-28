// Calculate minimum range to get some total

// Inputs:
    // Iterator of objects (includes created_at and value)
    // Total required
// Output:
    // Minimum range to get total based on values

const minTimeToValue = (iterator, minimum) => {
  let shortestItems = []
  const runningShortestItems = [iterator[0]]
  let nextIndex = 1
  while (iterator[nextIndex]) {
    runningShortestItems.push(iterator[nextIndex])

    let subtotal = runningShortestItems.reduce(sum, 0)

    while (subtotal >= minimum) {
      if (timeDiff(runningShortestItems) < timeDiff(shortestItems)) {
        shortestItems = runningShortestItems.slice()
      }
      runningShortestItems.shift()
      subtotal = runningShortestItems.reduce(sum, 0)
    }
    nextIndex++
  }

  if (shortestItems.length > 0) {
    return [
        shortestItems[0].created_at,
        shortestItems[shortestItems.length - 1].created_at
    ]
  } else {
      return []
  }
}

const sum = (acc, curr) => acc + curr.value

const timeDiff = (items) => {
    if (items.length > 0) {
        const firstItem = items[items.length - 1].created_at
        const lastItem = items[0].created_at
        return firstItem - lastItem
    } else {
        return Infinity
    }
}

// Example test

const streamQueueIterator = [
    {
        created_at: 1990,
        value: 20
    },
    {
        created_at: 1995,
        value: 0
    },
    {
        created_at: 1999,
        value: 20
    },
    {
        created_at: 2001,
        value: 20
    },
    {
        created_at: 2009,
        value: 20
    },
]

console.log(minTimeToValue(streamQueueIterator, 60))
