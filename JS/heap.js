class MaxBinaryHeap {
    constructor() {
        this.values = [119,55,41,39,45,12,33,1,18,27];
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUp();
        return this.values;
    }

    bubbleUp() {
        var index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            var parentIndex = Math.floor((index - 1) / 2);
            var parent = this.values[parentIndex];
            
            if (element <= parent) break;
            this.values[index] = parent;
            this.values[parentIndex] = element;
            index = parentIndex;
        }
        return this.values;
    }

    extractMax() {
        var lastElement = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = lastElement;
            this.sinkDown();
            return this.values
        }
    
    }

    sinkDown() {
        var index = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            var leftIndex = 2 * index + 1;
            var rightIndex = 2 * index + 2;
            var leftChild, rightChild;
            var swap = null;

            if (leftIndex < length) {
                leftChild = this.values[leftIndex];
                if (leftChild > element) {
                    swap = leftIndex;
                }
            }
            if (rightIndex < length) {
                rightChild = this.values[rightIndex];
                if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
                    swap = rightIndex;
                }
            }
            if (swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = current;
            index = swap;
        }
    }
}

let heap = new MaxBinaryHeap();
heap.extractMax();




class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        var index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            var parentIndex = Math.floor((index - 1) / 2);
            var parent = this.values[parentIndex];
            
            if (element.priority <= parent.priority) break;
            this.values[index] = parent;
            this.values[parentIndex] = element;
            index = parentIndex;
        }
        return this.values;
    }

    dequeue() {
        var lastElement = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = lastElement;
            this.sinkDown();
            return this.values
        }
    
    }

    sinkDown() {
        var index = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            var leftIndex = 2 * index + 1;
            var rightIndex = 2 * index + 2;
            var leftChild, rightChild;
            var swap = null;

            if (leftIndex < length) {
                leftChild = this.values[leftIndex];
                if (leftChild.priority > element.priority) {
                    swap = leftIndex;
                }
            }
            if (rightIndex < length) {
                rightChild = this.values[rightIndex];
                if ((swap === null && rightChild.priority > element.priority) || (swap !== null && rightChild.priority > leftChild.priority)) {
                    swap = rightIndex;
                }
            }
            if (swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = current;
            index = swap;
        }
    }
}

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

let ER = new PriorityQueue();
ER.enqueue("s", 1);
ER.enqueue("ss", 5);
ER.enqueue("sss", 2);