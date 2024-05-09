/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// 使用虚拟头节点（哨兵节点）实现了链表操作的统一化，
// 简化了头节点的特殊情况处理，使得链表操作更加一致和高效。
// 双指针哨兵
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let length = 0;
    let dummy = new ListNode(0, head);
    let temp = dummy;
    
    // 计算链表长度
    while(temp.next) {
        length++;
        temp = temp.next;
    }
    
    length -= n;
    temp = dummy;
    // 找到要删除的节点的前一个节点
    while(length > 0){
        length --;
        temp = temp.next;
    }
    // 删除节点
    temp.next = temp.next.next;

    // 返回新的头节点
    return dummy.next;
};


//快慢指针
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let ret = new ListNode(0, head),
        slow = fast = ret;
    while(n--) fast = fast.next;
    while (fast.next !== null) {
        fast = fast.next; 
        slow = slow.next
    };
    slow.next = slow.next.next;
    // 返回哨兵节点 ret 的下一个节点作为链表的头部。
    // 使用哨兵节点 ret 简化了删除头节点的情况处理，确保无论删除操作如何影响链表，
    // ret.next 始终指向当前的头节点。这样，即使原始头节点被删除，函数也能正确返回新的头节点。
    return ret.next;
};