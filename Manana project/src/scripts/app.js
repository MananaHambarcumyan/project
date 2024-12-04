// **Stack Class Implementation**
// Implements a stack data structure that operates on the FILO principle.
// Provides methods for standard stack operations and utility methods.

class Stack {
    /**
     * Initializes the stack with a maximum size.
     * @param {number} maxSize - The maximum capacity of the stack.
     */
    constructor(maxSize) {
      this.stack = [];
      this.maxSize = maxSize;
    }
  
    /**
     * Adds an item to the top of the stack.
     * @param {*} item - The item to be added.
     * @returns {string|void} - Returns an error message if the stack is full.
     */
    push(item) {
      if (this.stack.length >= this.maxSize) {
        return "Error: Stack is full!";
      }
      this.stack.push(item);
    }
  
    /**
     * Removes and returns the item at the top of the stack.
     * @returns {*} - The item at the top of the stack, or undefined if the stack is empty.
     */
    pop() {
      return this.stack.pop();
    }
  
    /**
     * Checks if the stack is empty.
     * @returns {boolean} - True if the stack is empty, false otherwise.
     */
    isEmpty() {
      return this.stack.length === 0;
    }
  
    /**
     * Returns the number of items in the stack.
     * @returns {number} - The size of the stack.
     */
    length() {
      return this.stack.length;
    }
  
    /**
     * Returns the item at the top of the stack without removing it.
     * @returns {*} - The item at the top of the stack, or undefined if the stack is empty.
     */
    peek() {
      return this.stack[this.stack.length - 1];
    }
  
    /**
     * Removes all items from the stack.
     */
    clear() {
      this.stack = [];
    }
  
    /**
     * Checks if the stack is full.
     * @param {Stack} stackInstance - The stack instance to check.
     * @param {number} maxSize - The maximum capacity of the stack.
     * @returns {boolean} - True if the stack is full, false otherwise.
     */
    static isStackFull(stackInstance, maxSize) {
      return stackInstance.length() >= maxSize;
    }
  }
  
  // **Queue Class Implementation**
  // Implements a queue data structure that operates on the FIFO principle.
  // Provides methods for standard queue operations and utility methods.
  
  class Queue {
    /**
     * Initializes an empty queue.
     */
    constructor() {
      this.queue = [];
    }
  
    /**
     * Adds an item to the rear of the queue.
     * @param {*} item - The item to be added.
     */
    enqueue(item) {
      this.queue.push(item);
    }
  
    /**
     * Removes and returns the item at the front of the queue.
     * @returns {*} - The item at the front of the queue, or undefined if the queue is empty.
     */
    dequeue() {
      return this.queue.shift();
    }
  
    /**
     * Returns the item at the front of the queue without removing it.
     * @returns {*} - The item at the front of the queue, or undefined if the queue is empty.
     */
    peek() {
      return this.queue[0];
    }
  
    /**
     * Checks if the queue is empty.
     * @returns {boolean} - True if the queue is empty, false otherwise.
     */
    isEmpty() {
      return this.queue.length === 0;
    }
  
    /**
     * Returns the number of elements in the queue.
     * @returns {number} - The size of the queue.
     */
    size() {
      return this.queue.length;
    }
  
    /**
     * Removes all elements from the queue.
     */
    clear() {
      this.queue = [];
    }
  
    /**
     * Merges two queues into a single queue.
     * @param {Queue} queue1 - The first queue to merge.
     * @param {Queue} queue2 - The second queue to merge.
     * @returns {Queue} - A new queue containing elements from both queues.
     */
    static merge(queue1, queue2) {
      const mergedQueue = new Queue();
      mergedQueue.queue = [...queue1.queue, ...queue2.queue];
      return mergedQueue;
    }
  }
  
  // Example Usage:
  // const stack = new Stack(3);
  // stack.push(1);
  // stack.push(2);
  // console.log(stack.pop()); // 2
  
  // const queue = new Queue();
  // queue.enqueue(1);
  // queue.enqueue(2);
  // console.log(queue.dequeue()); // 1
  