const depthFirstPrint = (graph, source) => {
    console.log(source)
    for(let neighbor of graph[source]){
        depthFirstPrint(graph, neighbor)
    }
}
const bredthFirstPrint = (graph, source) => {
    const queue = [ source ]
    while(queue.length>0){
        const current = queue.shift()
        console.log(current)
        for(let neighbor of graph[current]){
            queue.push(neighbor)
        }
    }
}
const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}
depthFirstPrint(graph, 'a')
bredthFirstPrint(graph, 'a')