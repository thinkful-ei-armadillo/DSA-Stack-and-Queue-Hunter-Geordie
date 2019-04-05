'use strict';

// Creates a node containing the data and a reference to the next item
class _Node {
  constructor(value) {
    this.value=value;
    this.next=null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }
  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
  insertFirst(item) {
    const insertedNode = new _Node(item, this.head, null);
    if (!this.head) {
      this.head = insertedNode;
      this.tail = insertedNode;
    } else {
      this.head.prev = insertedNode;
      this.head = insertedNode;
    }
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      const insertedNode = new _Node(item, null, this.tail);
      this.tail.next = insertedNode;
      this.tail = insertedNode;
    }
  }
}

let StarTrekQ = new Queue();
StarTrekQ.enqueue('Kirk');
StarTrekQ.enqueue('Spock');
StarTrekQ.enqueue('Uhura');
StarTrekQ.enqueue('Sulu');
StarTrekQ.enqueue('Checkov');

function peak(queue) {
  return queue.first.value;
}

function isEmpty(stack) {
  if (stack.first === null) {
    console.log('List is empty');
    return true;
  } else {
    console.log('List is not empty');
    return false;
  }
}

function display(stack) {
  let currentNode = stack.first;
  let result = [];

  while (currentNode.next !== null) {
    result.enqueue(currentNode.value);
    currentNode = currentNode.next;
  }
  result.enqueue(currentNode.value);
  return result;
}

// console.log(display(StarTrekQ));

function squareDance(list) {
  let men = new Queue();
  let menCount = 0;
  let women = new Queue();
  let womenCount = 0;
  let pairs = [];
  let bangers = 0;
  let currentNode = list.first;
  console.log(currentNode.value.gender);

  while( currentNode !== null) {
    if(currentNode.value.gender === 'F') {
      let woman = list.dequeue();
      if(men.first === null) {
        women.enqueue(woman);
        womenCount++;
      } else {
        let pair = [men.dequeue(), woman];
        menCount--;
        bangers++;
        pairs.push(pair);
      }
    } else {
      let man = list.dequeue();
      if (women.first === null) {
        men.enqueue(man);
        menCount++;
      } else {
        let pair = [man, women.dequeue()];
        pairs.push(pair);
        womenCount--;
        bangers++;
      }
    }
    currentNode = currentNode.next;
    // console.log('the woman queue is currently' + women);
    // console.log('the men queue is currently' + men);
  }
  console.log('There are '+ menCount + ' men left');
  console.log('There are '+ womenCount + ' women left');
  console.log('There are ' + bangers + ' pairs');
  console.log(pairs);
  return pairs;
}

let danceLine = new Queue();
danceLine.enqueue({
  name: 'Jane',
  gender: 'F'
});
danceLine.enqueue({
  name: 'Frank',
  gender: 'M'
});
danceLine.enqueue({
  name: 'John',
  gender: 'M'
});
danceLine.enqueue({
  name: 'Sherlock',
  gender: 'M'
});
danceLine.enqueue({
  name: 'Madona',
  gender: 'F'
});
danceLine.enqueue({
  name: 'David',
  gender: 'M'
});
danceLine.enqueue({
  name: 'Topher',
  gender: 'M'
});
danceLine.enqueue({
  name: 'Beyonce',
  gender: 'F'
});

squareDance(danceLine);