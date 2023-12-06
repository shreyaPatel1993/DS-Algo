/* Slow and fast pointers/ two pointers algorithm used for many problems in Linked List.
problems such has - Detecing Cycle, finding middle of the list, finding entrace of cycle, checking for palindromic linked List.
- Here one pointer moves faster than the slow pointer.
*/

var hasCycle = function(head) {
    let slow = head, fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast) return true;
    }
    return false;
};