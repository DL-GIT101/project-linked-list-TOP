import { CreateNode } from "./node";

const CreateLinkedList = () => {
    let _headNode = null;

    return {
        append: (value) => {
            const tailCheck = (node) => {
                if(node.getNext() == null) {
                    return node;
                } else {
                    tailCheck(node.getNext());
                }
            }
            if(_headNode == null) {
                _headNode = CreateNode(value);
            }else {
                tailCheck(_headNode).setNext(CreateNode(value));
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
                if(node.getNext() == null) {
                    iteration += 1;
                } else {
                    iteration += 1;
                    tailCheck(node.getNext());
                }
            }
            tailCheck(_headNode);
            return iteration;
        },
        head: () => _headNode,
        toString: () => {
            let result = "";
            const tailCheck = (node) => {
                if(node.getNext() == null) {
                    result += '( ' + node.getValue()  + ' )' +  ' -> null ';
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