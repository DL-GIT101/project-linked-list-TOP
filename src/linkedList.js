import { CreateNode } from "./node";

const CreateLinkedList = () => {
    let _headNode = null;

    return {
        append: (value) => {
            const tailCheck = (node) => {
                if(node.getNext() == null) {
                    node.setNext(CreateNode(value));
                } else {
                    tailCheck(node.getNext());
                }
            }
            if(_headNode == null) {
                _headNode = CreateNode(value);
            }else {
                tailCheck(_headNode);
            }
        },
        prepend: (value) => {
            const newNode = CreateNode(value);
            newNode.setNext(_headNode);
            _headNode = newNode;
        },
        size: () => {
            let iteration = 0;
            const tailCheck = (node) => {
                if(node == null) {
                    iteration += 0;
                } else {
                    iteration += 1;
                    tailCheck(node.getNext());
                }
            }
            tailCheck(_headNode);
            return iteration;
        },
        head: () => _headNode,
        tail: () => {
            let lastNode = null;
            const tailCheck = (node) => {
                if(node.getNext() == null) {
                    lastNode = node;
                } else {
                    tailCheck(node.getNext());
                }
            }
            tailCheck(_headNode);
            return lastNode;
        },
        at: (index) => {
            let counter = 1;
            let atNode = null;
            const check = (node) => {
                if(counter == index) {
                    atNode = node;
                } else {
                    counter += 1;
                    check(node.getNext());
                }
            }
            check(_headNode);
            return atNode;
        },
        toString: () => {
            let result = "";
            const tailCheck = (node) => {
                if(node == null){
                    result += 'null';
                } else {
                    result += '( ' + node.getValue()  + ' )' +  ' -> ';
                    tailCheck(node.getNext());
                }
            }
            tailCheck(_headNode);
            return result;
        }
    }
}

export {CreateLinkedList}