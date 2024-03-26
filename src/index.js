import { CreateLinkedList } from "./linkedList";
import { createPara } from "./others";
import './style.css';
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
//append 2
list.append("trial");
const append2 = createPara('append "trial"');
const appendResult2 = createPara(list.toString());
//size
const sizeResult = createPara('size: ' + list.size());
//prepend 2
list.prepend("model");
const prepend2 = createPara('prepend "model"');
const prependResult2 = createPara(list.toString());
//head
const headResult = createPara('head: ( ' + list.head().getValue() + ' )');
//tail 
const tailResult = createPara('tail: ( ' + list.tail().getValue() + ' )');
//at
const atResult = createPara('at index 2: ( ' + list.at(2).getValue() + ' )');
//pop
list.pop();
const pop = createPara('pop: ( trial )');
const popResult = createPara(list.toString());
//display
const body = document.querySelector('body');
body.append(listCreate,listResult,
            append,appendResult,
            prepend,prependResult,
            append2,appendResult2,
            sizeResult,
            prepend2,prependResult2,
            headResult,
            tailResult,
            atResult,
            pop,popResult);   