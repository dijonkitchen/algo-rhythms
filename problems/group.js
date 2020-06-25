// Inputs: List of names
// Outputs: Groups of size 3-5, randomized

// Pseudocode:
// Take array of names
// Shuffle this array
// Split into groups
// Check if length is less than 3
    // Return randomized list
// Split shuffled array into groups of 3-5
// Return an array of arrays (each with group of people)

const shuffle = (array) => {
  const shuffledArray = array.slice()

  for (let i = (shuffledArray.length - 1); i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * i)
      const temp = shuffledArray[randomIndex]
      shuffledArray[randomIndex] = shuffledArray[i]
      shuffledArray[i] = temp
  }

  return shuffledArray
}

const randomGroups = (names, minSize = 3) => {
  const shuffledNames = shuffle(names)

  if (names.length <= minSize) {
      return shuffledNames
  } else {
      const allGroups = []
      let tempGroup = []

      for (let i = 0; i < names.length; i++) {
          if (tempGroup.length < minSize) {
              tempGroup.push(shuffledNames[i])
          } else {
              allGroups.push(tempGroup)
              tempGroup = [shuffledNames[i]]
          }
      }

      let remainder = names.length % minSize

      for (let i = 0; i < remainder; i++) {
          allGroups[allGroups.length - 1].push(shuffledNames.pop())
      }

      return allGroups
  }
}

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')

console.log(randomGroups(letters))
