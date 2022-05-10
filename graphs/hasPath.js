const hasPathDepth = (graph,source,destination) => {
    if(source == destination) return true
    for(let neighbor of graph[source]){
        if(hasPathDepth(graph, neighbor, destination) == true) return true
    }
    return false
}

const hasPathBredth = (graph, source, destination) => {
    const queue = [source]
    while(queue.length > 0){
        const current = queue.shift()
        if(current == destination) return true
        for(let neighbor of graph[current]){
            queue.push(neighbor)
        }
    }
    return false
}

graph = {
    f: ['g','i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
}
console.log(hasPathDepth(graph, 'f', 'k'))
console.log(hasPathDepth(graph, 'f', 'j'))
console.log(hasPathBredth(graph, 'f', 'k'))
console.log(hasPathBredth(graph, 'f', 'j'))