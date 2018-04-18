const coordinatePaths = (x1, y1, x2, y2, path = '') => {
    if (x1 === x2 && y1 === y2) {
        console.log(path)
    }
    if (x1 < x2) {
        coordinatePaths(x1 + 1, y1, x2, y2, path + 'R')
    }
    if (y1 < y2) {
        coordinatePaths(x1, y1 + 1, x2, y2, path + 'D')
    }
}

coordinatePaths(0, 0, 3, 3)
