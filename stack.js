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

let superStack = new Stack();
let myName = 'chuck';
let numOfEles = myName.length;

for(let i =0; i < myName.length; i ++){
  superStack.push(myName[i]);
  console.log('Pushing into stack ' + myName[i]);
}
console.log(superStack.peek());
console.log(superStack.isEmpty());

for(let i = 0; i < numOfEles; i++){
  console.log(`${superStack.pop()} is an element that i am popping`);
  console.log(superStack.isEmpty());
}

console.log(`Is the stack empty now?  ${superStack.isEmpty()}`);

class LinkedList {
  constructor(){
    this.headNode = undefined;
  }

  push(value) {
    if(!this.headNode){
      this.headNode = new Node(value);
    }
    else{
      newNode = new Node(value);
      newNode.nextNode = this.headNode;
      this.headNode = newNode;
    }
  }

  pop(){
    let value = this.headNode.value;
    headNode = th1is.headNode.nextNode;
    return value;
  }
}