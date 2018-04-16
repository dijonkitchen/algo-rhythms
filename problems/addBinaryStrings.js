// Q: Given two binary strings (for example: "10100101"), return the addition as a binary string.

// "100011"
// + "1011"
// --------
// "101110"

// "101"
// + "1"
// ------
// "110"

// 0 + 0 = 0
// 1 + 0 = 0 + 1 = 1
// 1 + 1 = 0 (carry 1)

const addBinaryStrings = (binaryStr1, binaryStr2) => {
  let newBinaryStr = ''
  let index1 = binaryStr1.length - 1
  let index2 = binaryStr2.length - 1
  let carryOverValue = 0

  while (index1 >= 0 || index2 >= 0) {
    let val1 = parseInt(binaryStr1[index1], 10) || 0
    let val2 = parseInt(binaryStr2[index2], 10) || 0

    const sum = val1 + val2 + carryOverValue

    if (sum % 2 === 0) {
      newBinaryStr = '0' + newBinaryStr
    } else {
      newBinaryStr = '1' + newBinaryStr
    }

    if (sum > 1) {
      carryOverValue = 1
    } else {
      carryOverValue = 0
    }

    index1--
    index2--
  }

  return newBinaryStr
}

// O(max(n,m)) time complexity
// O(1) space complexity

// Tests
console.log(addBinaryStrings("100011", "1011") === '101110')
console.log(addBinaryStrings("101", "1") === '110')
