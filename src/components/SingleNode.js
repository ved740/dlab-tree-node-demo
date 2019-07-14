import React from "react";

const SingleNode = ({ treeData, currCol, colDivNum, currRow }) => {

    let currColCopy = currCol;
    let colDivNumCopy = colDivNum;

    const getNodeId = () => {
        let id = "1";
        while(id.length < currCol) {
            if(id.length === currCol-1) {
                id = id + currRow;
            } else {
                if(colDivNumCopy > currColCopy/2) {
                    id += 2;
                } else {
                    id += 1;
                }
                currColCopy--;
                colDivNumCopy = colDivNumCopy > 2 ? parseFloat(colDivNumCopy/2) : colDivNumCopy;
            }
        }
        return id;
    };

    const nodeExists = () => {
        const nodeId = getNodeId();
        if(parseInt(nodeId) === 1) {
            return true
        }
        const checkNodeExist = (node) => {
            if(parseInt(nodeId) === node.node_id) {
                return true;
            } else {
                return node.children.some(tempNode => {
                    return checkNodeExist(tempNode);
                })
            }
        }
        return checkNodeExist(treeData);
    };

    return (
        <div className="node-single" style={{visibility: nodeExists() ? "visible" : "hidden"}}>
            {(currCol) + '-' + colDivNum + '-' + currRow + '-' + getNodeId()}
        </div>
    );
};

export default SingleNode;