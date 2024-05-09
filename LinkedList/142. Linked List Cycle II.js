/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 哈希法
var detectCycle = function(head) {
    let visited = new Set(); // 创建一个集合用于存储已经访问过的节点

    while (head) {
        if (visited.has(head)) {
            // 如果当前节点已存在于集合中，表示找到了循环的起点
            // 返回这个节点作为循环开始的节点
            return head;
        }
        visited.add(head); // 将当前节点添加到集合中
        head = head.next;  // 移动到下一个节点
    }

    return null; // 如果没有检测到循环，返回null
};

//双指针相交路径法
var detectCycle = function(head) {
    if (!head) return null;

    let tortoise = head, hare = head;

    // 检测循环
    do {
        if (!hare.next || !hare.next.next) return null;
        tortoise = tortoise.next;
        hare = hare.next.next;
    } while (tortoise !== hare);

    // 找到循环起点
    tortoise = head;
    while (tortoise !== hare) {
        tortoise = tortoise.next;
        hare = hare.next;
    }

    return tortoise;
};
