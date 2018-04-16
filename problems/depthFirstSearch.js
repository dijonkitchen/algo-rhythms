const A = { data: 'A' }
const B = { data: 'B' }
const C = { data: 'C' }
const D = { data: 'D' }
const E = { data: 'E' }
const F = { data: 'F' }
const G = { data: 'G' }
const H = { data: 'H' }
const I = { data: 'I' }
const J = { data: 'J' }

A.left = B
A.right = C
B.left = D
B.right = E
C.left = F
E.left = H
H.left = I
I.left = J
F.right = G

const depthFirstSearch = (binaryTreeRootNode) => {
    const searchPath = []
    let stack = [binaryTreeRootNode]

    while (stack.length > 0) {
        const node = stack.pop()
        searchPath.push(node.data)

        if (node.right) {
            stack.push(node.right)
        }

        if (node.left) {
            stack.push(node.left)
        }
    }

    return searchPath
}

console.log(depthFirstSearch(A))
