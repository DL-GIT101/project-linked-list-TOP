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