const minimumIsland = (grid) => {
    const visited = new Set()
    let minSize = grid.length * grid[0].length + 1
    for(let r=0;r<grid.length;r++){
        for(let c=0;c<grid[r].length;c++){
            const size = exploreSize(grid, r, c, visited)
            if(size < minSize && size!=0){
                minSize = size
            }
        }
    }
    return minSize
}

const exploreSize = (grid, r, c, visited) => {
    const rowInbounds = 0 <= r && r < grid.length
    const colInbounds = 0 <= c && c < grid[c].length
    if(!rowInbounds||!colInbounds) return 0
    if(grid[r][c] == "W") return 0
    const pos = r + "," + c
    if(visited.has(pos)) return 0
    visited.add(pos)
    let size = 1
    size += exploreSize(grid, r+1, c, visited)
    size += exploreSize(grid, r-1, c, visited)
    size += exploreSize(grid, r, c+1, visited)
    size += exploreSize(grid, r, c-1, visited)
    return size
}

const grid2 = [
    ['W', 'L', 'W', 'W', 'L'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W']
]

const grid = [
    ['W', 'L', 'W', 'W', 'L', 'W'],
    ['L', 'L', 'W', 'W', 'L', 'W'],
    ['W', 'L', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'L', 'W'],
    ['W', 'W', 'W', 'L', 'L', 'W'],
    ['W', 'W', 'W', 'L', 'W', 'W']
]
console.log(minimumIsland(grid))
console.log(minimumIsland(grid2))
