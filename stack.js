'use strict';

// Creates a node containing the data and a reference to the next item
class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    /* If the stack is empty, then the node will be the
           top of the stack */
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    /* If the stack already has something, 
           then create a new node,
           add data to the new node, and
           have the pointer point to the top */
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    /* In order to remove the top of the stack, you have to point
           the pointer to the next item and that next item becomes the
           top of the stack */
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

const StarTrek = new Stack();

StarTrek.push('Kirk');
StarTrek.push('Spock');
StarTrek.push('McCoy');
StarTrek.push('Scotty');
StarTrek.pop('McCoy');

function peak(stack) {
  return stack.top.data;
}

function isEmpty(stack) {
  if (stack.head === null) {
    console.log('List is empty');
    return true;
  } else {
    console.log('List is not empty');
    return false;
  }
}

function display(stack) {
  let currentNode = stack.top;
  let result = [];

  while (currentNode.next !== null) {
    result.push(currentNode.data);
    currentNode = currentNode.next;
  }
  result.push(currentNode.data);
  return result;
}

const s = new Stack();
s.push('dad');
s.push('A man, a plan, a canal: Panama');
s.push('1001');
s.push('Tauhida');

function is_palindrome(s) {
  let currentNode = s.top;
  let isItAPalindrome = [];
  let currentTest = [];
  while (currentNode.next !== null) {
    currentNode.data = currentNode.data
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]/g, '');
    for (let i = 0; i < currentNode.data.length; i++) {
      if (
        currentNode.data[i] !==
        currentNode.data[currentNode.data.length - 1 - i]
      ) {
        currentTest.push(false);
      } else {
        currentTest.push(true);
      }
    }
    for (let i = 0; i < currentTest.length; i++) {
      if (currentTest[i] === false) {
        isItAPalindrome.push(false);
        i = currentTest.length;
      }
    }
    isItAPalindrome.push(true);
    currentTest = [];
    currentNode = currentNode.next;
  }
  return isItAPalindrome;
}
// console.log(is_palindrome(s));

const argument = new Stack();
argument.push('([)]');

function codeCheck(argument) {
  let currentNode = argument.top;
  let hold = '';
  let compatibleHold = '';

  while (currentNode.next !== null) {
    for (let i = 0; i < currentNode.data.length; i++) {
      if (
        currentNode.data[i] === '(' ||
        currentNode.data[i] === '{' ||
        currentNode.data[i] === '['
      ) {
        hold = currentNode.data[i];
        if (hold === '(') {
          compatibleHold = ')';
        }
        if (hold === '[') {
          compatibleHold = ']';
        }
        if (hold === '{') {
          compatibleHold = '}';
        }
      } else if (
        currentNode.data[i] === ')' ||
        currentNode.data[i] === '}' ||
        currentNode.data[i] === ']'
      ) {
        if (currentNode.data[i] !== compatibleHold) {
          console.log(`error at index ${i} (index starts at 0)`);
        }
      }
    }
    currentNode = currentNode.next;
  }
  for (let i = 0; i < currentNode.data.length; i++) {
    if (
      currentNode.data[i] === '(' ||
      currentNode.data[i] === '{' ||
      currentNode.data[i] === '['
    ) {
      hold = currentNode.data[i];
      if (hold === '(') {
        compatibleHold = ')';
      }
      if (hold === '[') {
        compatibleHold = ']';
      }
      if (hold === '{') {
        compatibleHold = '}';
      }
    } else if (
      currentNode.data[i] === ')' ||
      currentNode.data[i] === '}' ||
      currentNode.data[i] === ']'
    ) {
      if (currentNode.data[i] !== compatibleHold) {
        return `error at index ${i} (index starts at 0)`;
      }
    }
  }
}

// console.log(codeCheck(argument));
