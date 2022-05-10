class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null
    }
    pushNode(value) {
        let pushedNode = new Node(value)
        if (this.head == null) {
            this.head = pushedNode
        }
        else {
            let runner = this.head
            while (runner.next != null) {
                runner = runner.next
            }
            runner.next = pushedNode
        }
    }
    unshiftNode(value){
        let unshiftedNode = new Node(value)
        if(this.head == null){
            this.head = unshiftedNode
        }
        else{
            unshiftedNode.next = this.head
            this.head = unshiftedNode
        }
    }
    shiftNode(){
        let removedNode = this.head
        this.head = removedNode.next
        removedNode.next = null
        return removedNode
    }
    popNode(){
        let runner = this.head
        while (runner.next.next != null){
            runner = runner.next
        }
        let tail = runner.next
        runner.next = null
        return tail
    }
    displayList(){
        let singlyLinkedList = ""
        let runner = this.head
        while (runner != null) {
            singlyLinkedList += runner.value + "-"
            runner = runner.next
        }
        console.log(singlyLinkedList)
    }
    removeNthFromHead = n =>{
        let runner = this.head
        let count = 0
        while(runner){
            runner = runner.next
            count++
        }
        let d = count-n
        runner = this.head
        while (d>1){
            runner = runner.next
            d--
        }
        runner.next = runner.next.next
        return this.head
    }
}

swapPairs = list => {
    let runner = list.head, count = 0, odd = false
    while(runner.next!=undefined){
        runner = runner.next
        count++
    }
    runner=this.head
    if(count%2!=0){
        odd = true
        while(count>1){
            if(count%2!=0){
                let temp = runner.next
                runner.next = runner.next.next
                temp.next = runner
                count--
                runner = runner.next
            }else{
                count--
                runner=runner.next
            }
        }console.log(count)
    }
}

addTwoNumbers= (l1, l2) => {
    let runnerOne = l1.head
    let runnerTwo = l2.head
    let one = []
    let two = []
    while(runnerOne != null|| runnerTwo != null){
        one.unshift(runnerOne.value)
        two.unshift(runnerTwo.value)
        runnerOne = runnerOne.next
        runnerTwo = runnerTwo.next
    }
    return parseInt(one.join(""))+parseInt(two.join(""))
    
}




let singlyLinkedList = new SinglyLinkedList()
singlyLinkedList.pushNode(3)
singlyLinkedList.pushNode(12)
singlyLinkedList.pushNode(15)
singlyLinkedList.pushNode(9)
singlyLinkedList.unshiftNode(10)
singlyLinkedList.displayList()
singlyLinkedList.shiftNode()
singlyLinkedList.displayList()
singlyLinkedList.popNode()
singlyLinkedList.displayList()
let l1 = new SinglyLinkedList()
let l2 = new SinglyLinkedList()
l1.pushNode(2)
l1.pushNode(4)
l1.pushNode(3)
l1.pushNode(10)
l1.pushNode(8)
l1.pushNode(6)
l2.pushNode(5)
l2.pushNode(6)
l2.pushNode(4)
/* l1.displayList()
l2.displayList()
console.log(addTwoNumbers(l1, l2))
l1.displayList()
l1.removeNthFromHead(3)
l1.displayList() */
l1.displayList()
console.log(swapPairs(l1))
l1.displayList

