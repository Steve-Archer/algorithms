function grid_travel(x,y,z = {}){
    let objKey = x + ', ' + y;
    if (objKey in z){
        return z[objKey];
    }
    if(x==1 && y==1){
        return 1;
    }
    if(x==0 || y==0){
        return 0;
    }
    z[objKey] = grid_travel(x - 1, y, z)+grid_travel(x, y - 1, z);
    return z[objKey];
}
console.log(grid_travel(2,3));
console.log(grid_travel(3,3));
console.log(grid_travel(3,4));
console.log(grid_travel(8,8));
console.log(grid_travel(13,13));
console.log(grid_travel(18,18));
console.log(grid_travel(25,25));
console.log(grid_travel(30,30));
console.log(grid_travel(35,35));
