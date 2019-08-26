class Stack {

    constructor() {
      this.arr = [];
    }
  
    push(value) {
      this.arr.push(value);
    }
  
    pop() {
      return this.arr.pop();
    }
  
    peek() {
      // Get Last Index based on length
      const lastIndex = this.arr.length - 1;
  
      // Return value
      return this.arr[lastIndex];
    }
  
    isEmpty() {
      // Check if array length is zero
      return this.arr.length === 0;
    }
  
  }
  let name = "Peter Fiorentino";

  let myName = new Stack();

  for (let i of name) {
      myName.push(i);
  }
  console.log(myName.arr);

  console.log(myName.peek());

  for (let x of name) {
      myName.pop();
  }
console.log(myName.arr)
  console.log(myName.isEmpty());