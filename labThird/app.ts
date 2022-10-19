// class LinkedListNode {
//   next: null;
//   elem: any;
  
//   constructor(elem) {
//     this.elem = elem;
//     this.next = null;
//   }
// }

// class LinkedList {
//   private head = null;
//   private len = 0;

//   public append(elem) {
//     const node = new LinkedListNode(elem);
//     let current;

//     if (this.head === null) {
//       this.head = node;
//     } else {
//       current = this.head;
//       while (current.next) {
//         current = current.next;
//       }
//       current.next = node;
//     }
//     this.len++;
//   }

//   public removeAt(pos) {
//     if (pos > -1 && pos < this.len) {
//       let current = this.head;
//       let previous;
//       let index = 0;

//       if (pos === 0) {
//         this.head = current.next;
//       } else {
//         while (index++ < pos) {
//           previous = current;
//           current = current.next;
//         }
//         previous.next = current.next;
//       }
//       this.len--;
//       return current.elem;
//     } else {
//       return null;
//     }
//   }


//   public insert(elem, pos) {
//     if (pos > -1 && pos < this.len) {
//       let current = this.head;
//       let index = 0;
//       let previous;
//       let node = new LinkedListNode(elem);

//       if (pos === 0) {
//         node.next = current;
//         this.head = node;
//       } else {
//         while (index++ < pos) {
//           previous = current;
//           current = current.next;
//         }
//         node.next = current;
//         previous.next = node;
//       }
//       this.len++;
//       return true;
//     } else {
//       return false;
//     }
//   }

//   public toString() {
//     let current = this.head;
//     let str = '';
//     while (current) {
//       str += current.elem; //output is undefinedundefinedundefined
//       // str += JSON.stringify(current); 
//       // prints out {"next":{"next":{}}}{"next":{}}{}
//       current = current.next;
//     }
//     return str;
//   }
// }

// const t = new LinkedList();
// t.append('asd'); // Works fine
// t.append(1);
// t.append(0);
// console.log(t); // LinkedList
// let tt = t.removeAt(1);
// console.log(t, 'tt', tt); // LinkedList, 'tt', 1
// t.insert('asd', 2);
// let ttt = t.insert('a', 1)
// console.log(ttt); // true
// console.log(t); // LinkedList
// console.log(t.toString()); //asda0

class LinkedListNode {
  value: any;
  next: null;
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  head: null | undefined;
  tail: null;
  constructor() {
    this.head = null;
    this.tail = null;

    // this.comparator =
    //   comparator ||
    //   function (i, j) {
    //     if (i < j) return -1;
    //     if (i > j) return 1;
    //     return 0;
    //   };
  }

  // Добавление элемента в начало списка
  pushBegin(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    if (!this.tail) this.tail = newNode;
  }

  // Добавление элемента в конец списка
  pushEnd(value) {
    let newNode = new LinkedListNode(value);
    if (this.tail) this.tail.next = newNode;
    this.tail = newNode;
    if (!this.head) this.head = newNode;
  }

  removeBegin() {
    if (!this.head) return null;
    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  removeEnd() {
    const deletedTail = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return deletedTail;
    }

    // найти предпоследний элемент списка
    // и сделать его новым хвостом
    let current = this.head;
    while (current.next) {
      if (!current.next.next) {
        current.next = null;
      } else {
        current = current.next;
      }
    }

    this.tail = current;

    return deletedTail;
  }

  // removeAll () {
  //   let current = this.head;
  //   while (current !== null && current.next !== null) {
  //     let next = current.next;
  //     while (next !== null && next.value > x) {
  //       next = next.next
  //     }
  //     currentNode.next = next
  //     if (currentNode.next === null) {
  //       break;
  //     }
  //   }
  //   while (current) {
  //     current.value = null;
  //     current = current.next;
  //   }
  // }

  // Вывод всех элементов списка
  log() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

}

const list = new LinkedList();
list.pushBegin('1');
list.pushEnd('2');
list.pushEnd('3');
// list.removeBegin();
// list.removeBegin();
// list.removeBegin();
list.removeAll();


list.log();