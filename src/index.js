import { CreateLinkedList } from "./linkedList";
import { createPara } from "./others";
//create list
const list = CreateLinkedList();
const listCreate = createPara('create list');
const listResult = createPara(list.toString());
//append
list.append("sample");
const append = createPara('append "sample"');
const appendResult = createPara(list.toString());
//prepend
list.prepend("test");
const prepend = createPara('prepend "test"');
const prependResult = createPara(list.toString());
//size
const sizeResult = createPara('size: ' + list.size());
//head
const headResult = createPara('head: ( ' + list.head().getValue() + ' )');
//display
const body = document.querySelector('body');
body.append(listCreate,listResult,
            append,appendResult,
            prepend,prependResult,
            sizeResult,
            headResult);   