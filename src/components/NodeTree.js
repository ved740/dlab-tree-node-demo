import React from "react";
import TreeConfig from "./TreeConfig";
import TreeRep from "./TreeRep";

class NodeTree extends React.Component {

    state = {
        selectedNode: {},
        treeData: {
            node_id: 1,
            node_name: 'A', 
            level: 1,
            children: [
                {
                    node_id: 11,
                    node_name: 'B1',
                    level: 2,
                    children: [
                        {
                            node_id: 111,
                            node_name: 'C1',
                            level: 3,
                            children: [
                                {
                                    node_id: 1111,
                                    node_name: 'D1',
                                    level: 4,
                                    children: []
                                },
                                {
                                    node_id: 1112,
                                    node_name: 'D2',
                                    level: 4,
                                    children: []
                                }
                            ]
                        },
                        {
                            node_id: 112,
                            node_name: 'C2',
                            level: 3,
                            children: []
                        }
                    ]
                },
                {
                    node_id: 12,
                    node_name: 'B2',
                    level: 2,
                    children: []
                }
            ]
        },
        maxLevels: 4
    }

    render() {
        return (
            <div className="node-tree-container">
                <TreeRep treeData={this.state.treeData} maxLevels={this.state.maxLevels}/>
                <TreeConfig />
            </div>
        );
    }
}

export default NodeTree;