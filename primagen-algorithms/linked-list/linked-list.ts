type LinkedNode<T> = {
  value: T
  next: LinkedNode<T> | null
}

class LinkedList<T>{
  head: LinkedNode<T>;
  constructor(node: LinkedNode<T>){
    this.head = node
  }
  getLast() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current
  }
  append(val: T) {
    const node: LinkedNode<T> = { value: val, next: null }
    let lastNode = this.getLast()
    lastNode.next = node
  }
}
const head = new LinkedList({ value: 1, next: null })
head.append(2)
console.log(head.getLast())