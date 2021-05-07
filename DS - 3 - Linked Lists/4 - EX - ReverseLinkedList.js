const LinkedList = require('./1 - BuildingLinkedList.js');

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 13);
myLinkedList.printList();

myLinkedList.reverse();
myLinkedList.printList();