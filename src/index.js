import { CreateLinkedList } from "./linkedList";

const list = CreateLinkedList();
list.append("sample");
console.log(list.head().getValue());
list.prepend("test");
console.log(list.head().getValue());
list.prepend("trial");
console.log(list.size());
const body = document.querySelector('body');
body.textContent = list.toString();