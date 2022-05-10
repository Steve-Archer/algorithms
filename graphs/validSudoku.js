const isValidSudoku = board => {
    for(let r = 0;r<board.length;r+=3){
        for(let c = 0;c<board[r].length;c+=3){
            if(!box(board, r, c)) return false
        }
    }
    if(!rows(board)) return false
    if(!columns(board)) return false
    return true
}

const box = (board, r, c) => {
    const key = new Set()
    for(let i = r; i < r + 3; i++){
        for(let j = c; j < c + 3;j++){
            console.log(board[i][j])
            let value = board[i][j]
            if(value != "."){
                if (key.has(value)){
                    return false
                }    
                key.add(value) 
            }
        }
    }
    return true
}

const rows = board => {
    for(let i = 0; i < board.length; i++){
        const key = new Set()
        for(let j = 0; j<board[i].length;j++){
            let value = board[i][j]
            if(value != "."){
                if(key.has(value)) return false
            }
            key.add(value)
        }
    }
    return true
}

const columns = board => {
    for(let i = 0; i < board[0].length; i++){
        const key = new Set()
        for(let j = 0; j < board.length; j++){
            let value = board[j][i]
            if(value != "."){
                if(key.has(value)) return false
            }
            key.add(value)
        }
    }
    return true
}

let board = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
]
let board2 = [
    ['.', '.', '.', '.', '7', '.', '.', '.', '.'],
    ['.', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '1', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
]

let board3 = [
    [".",".","4",".",".",".","6","3","."],
    [".",".",".",".",".",".",".",".","."],
    ["5",".",".",".",".",".",".","9","."],
    [".",".",".","5","6",".",".",".","."],
    ["4",".","3",".",".",".",".",".","1"],
    [".",".",".","7",".",".",".",".","."],
    [".",".",".","5",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."]
]
console.log(isValidSudoku(board))
console.log(isValidSudoku(board2))
console.log(isValidSudoku(board3))
