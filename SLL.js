class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insert (data){
        const newNode = new Node(data)
        if(this.head == null){
            this.head = newNode;
            this.size++
        } else {
            let node = this.head;
            while(node.next){
                node = node.next
            }
            node.next = newNode;
            this.size++
        }
    };

    get() {
        let node = this.head;
        while (node!==null) {
           console.log(node.value);
            node = node.next;
        }
    }

    getAt(index){
        let current = this.head;
        let count = 0;

        while(current){
            if(count == index) {
                return current.value
            }
            current = current.next;
            count++
        }
    }

    removeAt(index) {
        let current = this.head;
        let previous, count = 0;

        while (count < index) {
            previous = current
            current = current.next
            count++
        }
        previous.next = current.next;
        this.size--;
    }

    length() {
        return this.size;
    }
}

const list = new LinkedList()

list.insert(4)
list.insert(6)
list.insert(8)
list.insert(9)

list.get()
