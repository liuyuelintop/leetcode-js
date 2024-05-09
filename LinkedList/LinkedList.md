![img](https://code-thinking-1253855093.file.myqcloud.com/pics/%E9%93%BE%E8%A1%A8%E6%80%BB%E7%BB%93.png)

# 链表总结篇

## 常用方法

* 虚拟头节点

- 双指针
- 快慢指针

## 链表的理论基础

在这篇文章[关于链表，你该了解这些！ **(opens new window)**](https://programmercarl.com/%E9%93%BE%E8%A1%A8%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html)中，介绍了如下几点：

* 链表的种类主要为：单链表，双链表，循环链表
* 链表的存储方式：链表的节点在内存中是分散存储的，通过指针连在一起。
* 链表是如何进行增删改查的。
* 数组和链表在不同场景下的性能分析。

## 链表经典题目

### 虚拟头结点

在[链表：听说用虚拟头节点会方便很多？ **(opens new window)**](https://programmercarl.com/0203.%E7%A7%BB%E9%99%A4%E9%93%BE%E8%A1%A8%E5%85%83%E7%B4%A0.html)中，我们讲解了链表操作中一个非常总要的技巧：虚拟头节点。

链表的一大问题就是操作当前节点必须要找前一个节点才能操作。这就造成了，头结点的尴尬，因为头结点没有前一个节点了。

**使用虚拟头节点（哨兵节点）实现了链表操作的统一化，简化了头节点的特殊情况处理，使得链表操作更加一致和高效。**

### 链表的基本操作

在[链表：一道题目考察了常见的五个操作！ **(opens new window)**](https://programmercarl.com/0707.%E8%AE%BE%E8%AE%A1%E9%93%BE%E8%A1%A8.html)中，我们通设计链表把链表常见的五个操作练习了一遍。

这是练习链表基础操作的非常好的一道题目，考察了：

* 获取链表第index个节点的数值
* 在链表的最前面插入一个节点
* 在链表的最后面插入一个节点
* 在链表第index个节点前面插入一个节点
* 删除链表的第index个节点的数值

### 反转链表

#### 迭代法

```javascript
// 双指针
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head || !head.next) return head;
    let prev = null, curr = head, temp =null;
    while(curr){
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
};
```

#### 递归法

```javascript
// 递归
var reverse = function(pre, head) {
    if(!head) return pre;
    const temp = head.next;
    head.next = pre;
    pre = head
    return reverse(pre, temp);
}

var reverseList = function(head) {
    return reverse(null, head);
};
```

---



### 删除倒数第N个节点

#### 快慢指针法

```javascript
// 快指针先走 n 步， 慢指针再出发
// 快指针到达尾部时，慢指针到达倒数第 n+1 个节点处
var removeNthFromEnd = function(head, n) {
    let ret = new ListNode(0, head),
        slow = fast = ret;
    while(n--) fast = fast.next;
    while (fast.next !== null) {
        fast = fast.next; 
        slow = slow.next
    };
    slow.next = slow.next.next;
    return ret.next;
};
```

#### 双指针哨兵法

```javascript
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
```

---



### 链表相交

#### 双指针相交路径法

**链表相交** :

* 假设两个链表在某点相交，那么它们从相交点到链表结束的部分长度是相同的。
* 从头节点到相交点的长度分别为 `lenA - commonLength` 和 `lenB - commonLength`，其中 `commonLength` 是两个链表共享的部分的长度。
* 当指针 `curA` 开始在链表A上遍历时，它走过的路径长度是 `lenA`。之后，它跳到链表B的头部继续遍历，再走过 `lenB - commonLength` 的长度，到达相交点（或链表末尾）。
* 同样，指针 `curB` 在链表B上遍历的路径长度是 `lenB`。之后，它跳到链表A的头部，再走过 `lenA - commonLength` 的长度，到达相交点（或链表末尾）。
* 相交时走过相同的路径: `lenA + lenB - commenLength == lenB + lenA - commonLength`

```javascript
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

```

#### 对齐长度法

1. 求 curA, curB 链表长度 lenA,  lenB
2. 消除长度差，让长链表的头节点对齐短链表 (首位对齐)
3. 遍历两个链表，遇到相同则直接返回

---



### 环形链表

在[链表：环找到了，那入口呢？ **(opens new window)**](https://programmercarl.com/0142.%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8II.html)中，讲解了在链表如何找环，以及如何找环的入口位置。

这道题目可以说是链表的比较难的题目了。 但代码却十分简洁，主要在于一些数学证明。

#### 快慢指针法

**思路**

    1.**初始化指针** ：

* `tortoise`（慢指针）和 `hare`（快指针）都放置在链表的头部。

2. **检测循环** ：

* `tortoise` 每次移动一步，`hare` 每次移动两步。
* 如果 `hare` 与 `tortoise` 相遇，则确认链表中存在循环。

3. **找到循环起点** ：

* 将 `tortoise` 重置到链表头部，`hare` 保留在相遇点。
* 两者以相同速度前进。
* 当 `tortoise` 和 `hare` 再次相遇时，该位置即为循环的起点。

**证明**：

- 假设链表头部到循环起始点的距离为 `D`，循环起始点到快慢指针首次相遇点的距离为 `S`，循环的长度为 `C`。

* 当 `tortoise` 和 `hare` 第一次相遇时，`tortoise` 走过的距离是 `D + S`，`hare` 走过的距离是 `D + S + nC`（`n` 是 `hare` 在循环中多走的圈数）。
* 因为 `hare` 走的距离是 `tortoise` 的两倍，所以 `2(D + S) = D + S + nC`。
* 简化这个等式得到 `D = nC - S`。这意味着（**慢指针**）从链表头部到循环起点的距离等于 (**快指针**) 从相遇点绕回循环起点的距离。

```javascript
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

```

#### 哈希法

**思路**

1. **初始化一个哈希表** ：创建一个空对象或集合，用于存储已遍历的节点。
2. **遍历链表** ：遍历链表中的每个节点。
3. **检查节点是否已经被访问** ：

* 如果当前节点已经存在于哈希表中，那么这个节点就是循环的起点，返回该节点。
* 如果当前节点不在哈希表中，将其添加到哈希表。

4. **遍历完成** ：如果遍历完成后没有发现重复的节点，说明链表中没有循环，返回 `null`.

```javascript
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
```
