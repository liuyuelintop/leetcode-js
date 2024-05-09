/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(!head) return head;

    let curr = head;
    while(curr.next){
        if(curr.next.val===val){
            curr.next = curr.next.next;
        }else{
            curr = curr.next;
        }
    }

    return head.val === val ? head.next : head;
};

// dummy node 虚拟节点
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    const ret = new ListNode(0, head);
    let cur = ret;
    while(cur.next) {
        if(cur.next.val === val) {
            cur.next =  cur.next.next;
            continue;
        }
        cur = cur.next;
    }
    return ret.next;
};