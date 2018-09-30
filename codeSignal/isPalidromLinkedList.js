// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function reverseList(head) {
    var prevNode = null;
    var currNode = head;
    var nextNode;
    while (currNode) {
        nextNode = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = nextNode;
    }
  return prevNode;
}

function findMidPoint(head) {
  var slow = head;
  var fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next
  }

  if (fast !== null) {
    return slow.next
  } else {
    return slow;
  }
}

function isListPalindrome(l) {
  var midpoint = findMidPoint(l);

  var firstHead = l;
  var secondHead = reverseList(midpoint);

  var flag = true;

  while (secondHead) {
    if (secondHead.value !== firstHead.value) {
      return false;
    }
    secondHead = secondHead.next;
    firstHead = firstHead.next;
  }
  return true;
}z
