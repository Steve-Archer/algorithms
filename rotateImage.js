var rotate = function(matrix) {
    const n = matrix.length;

    for (let layer = 0; layer < Math.floor(n / 2); layer++) {
        const line = [];
        for (let i = layer; i < n - layer; i++) {
            line.push(matrix[layer][i]);
        }
        
        for (let i = 1 + layer; i < n - 1 - layer; i++) {
            line.push(matrix[i][n - 1 - layer])
        }
        
        for (let i = n - 1 - layer; i >= layer; i--) {
            line.push(matrix[n - 1 - layer][i]);
        }

        for (let i = n - 2 - layer; i > layer; i--) {
            line.push(matrix[i][layer])
        }
        const newline = [];
        
        for (let i = 0; i < line.length; i++) {
            const y = (i + (n - 1 - (layer * 2))) % line.length;
            newline[y] = line[i];
        }

        for (let i = layer; i < n - layer; i++) {
            matrix[layer][i] = newline.shift();
        }
        
        for (let i = 1 + layer; i < n - 1 - layer; i++) {
            matrix[i][n - 1 - layer] = newline.shift();
        }
        
        for (let i = n - 1 - layer; i >= layer; i--) {
            matrix[n - 1 - layer][i] = newline.shift();
        }
        for (let i = n - 2 - layer; i > layer; i--) {
            matrix[i][layer] = newline.shift();
        }
    }
    return matrix
};
console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))