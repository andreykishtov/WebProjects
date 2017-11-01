class List {
  constructor() {
    this.root = {};
    this.end = this.root;
  }

  addNode(value) {
    this.end.next = {};
    this.end = this.end.next;
    this.end.value = value;
  }
}

let mainList = new List();

mainList.addNode(4);
mainList.addNode(5);
mainList.addNode(6);
mainList.addNode(8);
mainList.addNode(18);

let afterList = new List();

afterList.addNode(5);
afterList.addNode(8);
afterList.addNode(4);
afterList.addNode(18);
afterList.addNode(6);

function HashList(list) {
  while (list) {
    this[list.value] = list.value;
    list = list.next;
  }
}

function findMissing(listObj, listAfter) {
  let missingList = new List();
  while (listAfter) {
    if (listAfter.value in listObj) {
      missingList.addNode(listAfter.value);
    }
    listAfter = listAfter.next;
  }
  return missingList;
}

let hashedList = new HashList(mainList.root.next);
let missing = findMissing(hashedList, afterList.root);
console.log(JSON.stringify(missing));
