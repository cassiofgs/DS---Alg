const LinkedList = require('../DS - 3 - Linked Lists/1 - BuildingLinkedList.js');

class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = new LinkedList([key, value]);
        } else {
            this.data[address].append([key, value]);
        }
    }

    get(key) {
        let address = this._hash(key);
        let currentNode = this.data[address].head;
        
        while (currentNode) {
            if (currentNode.value[0] === key) {
                return currentNode.value[1];
            }
            currentNode = currentNode.next;
        }
        
        return undefined;
    }

    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                let currentNode = this.data[i].head;
                while (currentNode) {               
                    keysArray.push(currentNode.value[0]);
                    currentNode = currentNode.next;
                }
            }
        }
        return keysArray;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('oranges', 2);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);
//console.log(myHashTable.keys());
//console.log(myHashTable.get('grapes'));
console.log(myHashTable);