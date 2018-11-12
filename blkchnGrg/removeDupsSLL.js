// Write a method that remove duplicates from an unsorted linked list. Assume the method 
// will receive the head node of the linked list as an argument. 

// Keep track of values through linked list traversal => SET
// keep track of curr, next
// 1 -> 2 -> 3 -> 3 -> 4 -> 5-> 5
// 1, 2, 3, 4, 5
function removeDuplicates(head) {

    let values = new Set();
    // {1, 2, 3, 4, 5, null}
    let curr = head; //5
    values.add(curr.val);
    while (curr.next) {
        if (values[curr.next.val]) {
            curr.next = curr.next.next; //null
            curr = curr.next; // null
            values.add(curr.val);
        } else {
            curr = curr.next;
            values.add(curr.val);
        }
    }
    return head;
}