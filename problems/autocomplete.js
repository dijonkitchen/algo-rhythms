const autocomplete = (word1, word2) => {
    const chars1 = word1.split('')
    const chars2 = word2.split('')
    let maxLength = Math.max(chars1.length, chars2.length)
    let imperfections = 0

    let index = 0
    while (index < maxLength) {
        if (chars1[index] === chars2[index]) {
            chars1.splice(index, 1)
            chars2.splice(index, 1)
            maxLength--
        } else if (chars1[index] === chars2[index+1]) {
            chars1.splice(index, 1)
            chars2.splice(index, 2)
            imperfections++
            maxLength--
        } else if (chars2[index] === chars1[index+1]) {
            chars1.splice(index, 2)
            chars2.splice(index, 1)
            imperfections++
            maxLength--
        } else {
            imperfections++
            index++
        }

        if (imperfections > 1) {
            return false
        }
    }
    return true
}

console.log(autocomplete('hello', 'helo') === true)
console.log(autocomplete('hello', 'hello') === true)
console.log(autocomplete('hello', 'hella') === true)
console.log(autocomplete('ho', 'hella') === false)
console.log(autocomplete('hola', 'ho') === false)
console.log(autocomplete('ellao', 'hella') === false)
console.log(autocomplete('aklsdjf', 'aldfdf') === false)
console.log(autocomplete('jon', 'on') === true)
console.log(autocomplete('', '') === true)
console.log(autocomplete('k', '') === true)
console.log(autocomplete('lkajsdlfkjasdflkjk', 'akd') === false)
console.log(autocomplete('', 'akdlkajsdf;lkajsdf') === false)
console.log(autocomplete('helloworld', 'heaay!') === false)
console.log(autocomplete('hello', 'hilro') === false)
