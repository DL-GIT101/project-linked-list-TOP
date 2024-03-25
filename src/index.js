import { CreateLinkedList } from "./linkedList";

const list = CreateLinkedList();
list.append("sample");
console.log(list.head().getValue());
list.prepend("test");
console.log(list.head().getValue());
list.prepend("trial");
const body = document.querySelector('body');
body.textContent = list.toString();