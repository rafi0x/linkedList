class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insert(data) {
        const node = new Node(data);
        if (this.head == null) {
            this.head = node;
            this.size++;
            return this.head;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
            node.prev = current;
            this.size++;
            return this.head;
        }
    }

    getAll(){
        let node = this.head;
        while (node !== null) {
            console.log(node.value);
            node = node.next;
        }
    }

    getAt(index){
        let current = this.head;
        let count = 0
        if(index > this.size) return false
        while(count < index) {
            current = current.next;
            count++;
        }
        console.log(current.value);
        return current
    }

    removeAt(index) {
        let current = this.head;
        let count = 0
        if (index > this.size) return false
        while(count < index) {
            current = current.next;
            count++;
        }

        if(current.prev === null) {
            this.head = this.head.next
            this.size--
            return this.head;

        } else if (current.next === null) {
            current.prev.next = null
            this.size--
            return this.head;

        } else {
            let previousNode = current.prev 
            let nextNode = current.next

            previousNode.next = nextNode
            nextNode.prev = previousNode
            this.size--;
            return this.head;
        }
    }
}

const list = new DoublyLinkedList()

list.insert(4)
list.insert(5)
list.insert(6)
list.insert(7)
list.insert(8)

// list.removeAt(4)
// list.getAll()
// list.getAt(1)