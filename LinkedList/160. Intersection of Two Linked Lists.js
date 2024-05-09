/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 双指针相交路径法
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null; // 如果任一链表为空，则无交点

    var curA = headA; // 初始化指针 curA 在链表 A 的头部
    var curB = headB; // 初始化指针 curB 在链表 B 的头部

    // 当 curA 和 curB 不相等时，继续遍历
    while (curA != curB) {
        // 如果 curA 到达链表 A 的末尾，则跳转到链表 B 的头部继续遍历
        // 否则，继续在链表 A 中向后移动
        curA = curA == null ? headB : curA.next;

        // 如果 curB 到达链表 B 的末尾，则跳转到链表 A 的头部继续遍历
        // 否则，继续在链表 B 中向后移动
        curB = curB == null ? headA : curB.next;
    }

    // 返回相交的节点，如果不相交则返回 null
    return curA;
};


//对齐长度差法
var getListLen = function(head) {
    let len = 0, cur = head;
    while(cur) {
       len++;
       cur = cur.next;
    }
    return len;
}
var getIntersectionNode = function(headA, headB) {
    let curA = headA,curB = headB,
        lenA = getListLen(headA),   // 求链表A的长度
        lenB = getListLen(headB);  
    if(lenA < lenB) {       // 让curA为最长链表的头，lenA为其长度
    
        // 交换变量注意加 “分号” ，两个数组交换变量在同一个作用域下时
        // 如果不加分号，下面两条代码等同于一条代码: [curA, curB] = [lenB, lenA]
        
        [curA, curB] = [curB, curA];
        [lenA, lenB] = [lenB, lenA];
    }
    let i = lenA - lenB;   // 求长度差
    while(i-- > 0) {       // 让curA和curB在同一起点上（末尾位置对齐）
        curA = curA.next;
    }
    while(curA && curA !== curB) {  // 遍历curA 和 curB，遇到相同则直接返回
        curA = curA.next;
        curB = curB.next;
    }
    return curA;
};