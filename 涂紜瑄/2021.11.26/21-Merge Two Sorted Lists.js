/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// Linked list: Head->Node(item,next->item,next)->Null
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    
    let margedList = new ListNode();// 儲存結果的ListNode
    let node = margedList;          // 目前Node位置
    
    while(l1!==null || l2!==null){
        if(l1===null){
            node.next=l2;
            break;
        }
        if(l2===null){
            node.next=l1;
            break;
        }
        // l1,l2較小的數加入margedList
        if(l1.val<=l2.val){
            node.next = l1;
            l1 = l1.next;
        }else{
            node.next = l2;
            l2 = l2.next;
        }
        node = node.next; //node轉變成下一個節點
    }
    return margedList.next;
};