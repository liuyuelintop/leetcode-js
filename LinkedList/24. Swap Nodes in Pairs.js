/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    // 创建一个哨兵节点，其 next 指向链表的头节点
    // 这有助于处理头两个节点的交换，且使返回新头节点变得容易
    let dummy = new ListNode(0, head);

    // 当前节点初始指向哨兵节点
    let current = dummy;

    // 当 current 的下一个和下下个节点均不为空时进行交换
    while (current.next !== null && current.next.next !== null) {
        // 初始化 first 和 second 节点
        let first = current.next;
        let second = current.next.next;

        // 交换操作
        first.next = second.next;
        second.next = first;
        current.next = second;

        // 移动 current 节点
        current = first;
    }

    // 返回新的头节点，即哨兵节点的下一个节点
    return dummy.next;
};
