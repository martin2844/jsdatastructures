// A priority queue is the same as a normal queue, but items have a priority which can go over the normal enqueue method
// the element that we are going to pass into the queue itself will be an array, containing two items.
// the item itself and its priority. So, index 0 is the item, index 1 is the priority like so: ["chocolate icecream", 2]
function priorityQueue () {
    //Items inside a normal array collection
    collection = [];
    //Declare a print method to show the contents of the array
    this.print = function() {
        console.log(collection);
    }
    //Method to add new element to the list
    //But in a priority queue we have to check the priority of each element before adding a new one.

    this.enqueue = function(newElement) {
        //if the queue is empty we need not check the priority, just add it.
        if(this.isEmpty()){
            collection.push(newElement);
        } else {
            let added = false;
            //create a loop for each item of the collection to check its priorities.
            for(let i = 0; i<collection.length; i++){
                // is the priority of the element we are passing into the queue
                // less than the element thats allready in the queue and we are right now checking
                // remember that index 1 is the priority of that item.
                if(newElement[1] < collection[i][1]) {
                    //splice prototype from javascript
                    //array.splice(start, deleteCount, element to insert);
                    //so where do we insert, at i, we delete none ie. 0, and we insert newElement
                    collection.splice(i, 0, newElement);
                    added = true;
                    break;
                }  
            }
            // so if the priority is never above an item in the queue, 
            // we still need to add the new Item at the end of the queue.
            if(!added) {
                collection.push(newElement)
            }
        }
       
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

