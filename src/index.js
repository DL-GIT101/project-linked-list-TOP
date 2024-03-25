import { CreateLinkedList } from "./linkedList";

const list = CreateLinkedList();
list.append("sample");
console.log(list.head().getValue());
list.preprend("test");
console.log(list.head().getValue());
list.preprend("trial");
const body = document.querySelector('body');
body.textContent = list.toString();