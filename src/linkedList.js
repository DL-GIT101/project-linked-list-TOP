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
    }
}

export {CreateLinkedList}