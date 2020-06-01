// A queue is a DataStructure that works similar to an array, but 
// in a first in first out way
function Queue () {
    //Items inside a normal array collection
    collection = [];
    //Declare a print method to show the contents of the array
    this.print = function() {
        console.log(collection);
    }
    //Method to add new element to the list
    this.enqueue = function(newElement) {
        collection.push(newElement);
    }
    //Method to take the first out of the list
    this.dequeue = function() {
        return collection.shift();
    }
    //Method to show the first item of the queue, or the front of the queue,
    //That is to say the next one out
    this.front = function () {
        return collection[0];
    }
    //Method to see the size of the queue
    this.size = function() {
        return collection.length;
    }
    //Method to check if the queue is empty. Returns true
    this.isEmpty = function() {
        return(collection.length === 0)
    }

}

const test = new Queue();
test.enqueue("vanilla icecream");
test.print();
test.enqueue("chocolate icecream");
test.print();
test.dequeue();
test.print();
test.dequeue();
test.print();
console.log(test.isEmpty());