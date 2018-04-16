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

const breadthFirstSearch = (binaryTreeRootNode) => {
    const searchPath = []
    let queue = [binaryTreeRootNode]

    while (queue.length > 0) {
        const node = queue.shift()
        searchPath.push(node.data)

        if (node.left) {
            queue.push(node.left)
        }

        if (node.right) {
            queue.push(node.right)
        }
    }

    return searchPath
}

console.log(breadthFirstSearch(A))
