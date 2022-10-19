class LinkedListNode {

  constructor (value, next = null) {
    this.value = value;
    this.next = next;
  }

}

class LinkedList {

  constructor () {
    this.head = null;
    this.tail = null;
  }

  // Добавление элемента в начало списка
  pushBegin (value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    if (!this.tail) this.tail = newNode;
  }

  // Добавление элемента в конец списка
  pushEnd (value) {
    const newNode = new LinkedListNode(value);
    if (this.tail) this.tail.next = newNode;
    this.tail = newNode;
    if (!this.head) this.head = newNode;
  }

  // Удалить первый элемент
  removeBegin() {
    if (!this.head) return null;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
  }

  // Удалить последний элемент
  removeEnd () {
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (!current.next.next) {
        current.next = null;
      } else {
        current = current.next;
      }
    }

    this.tail = current;
  }

  // Существует ли элемент с указанным значением
  exist (value) {
    let current = this.head;

    while (current) {
      if (value === current.value) {
        console.log(true);
        break;
      } 
    }
  }

  // Удаление всех элементов с указанным значением
  remove (value) {
    if (!this.head) return;

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let current = this.head;

    if (current !== null) {
      while (current.next) {
        if (current.next.value === value) {
          current.next = current.next.next;
        } else {
          current = current.next;
        }
      }
    }

    if (this.tail.value === value) {
      this.tail = current;
    }
  }

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
list.pushBegin(1);
list.pushBegin(2);
list.pushEnd(3);
list.pushEnd(3);
list.pushEnd(4);
list.pushEnd(5);

list.log();

list.remove(6);
