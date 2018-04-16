const A = { data: 'A' }
const B = { data: 'B' }
const C = { data: 'C' }
const D = { data: 'D' }
const E = { data: 'E' }
const F = { data: 'F' }
const G = { data: 'G' }

A.left = B
A.right = C
B.left = D
B.right = E
C.left = F
F.right = G

const breadthFirstTraversal = (binaryTreeRootNode) => {
    const levels = []
    let queue = [binaryTreeRootNode]

    while (queue.length > 0) {
        const values = queue.map(node => node.data)
        levels.push(values)

        const newQueue = []
        queue.forEach(node => {
            if (node.left) {
                newQueue.push(node.left)
            }
            if (node.right) {
                newQueue.push(node.right)
            }
        })
        queue = newQueue
    }

    return levels
}

console.log(breadthFirstTraversal(A))
