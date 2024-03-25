import { CreateLinkedList } from "./linkedList";

const list = CreateLinkedList();
console.log(list.head());
list.append("sample");
list.append("test");
console.log(list.head().getValue());