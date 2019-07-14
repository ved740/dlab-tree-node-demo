import React from "react";
import SingleNode from "./SingleNode";

const TreeRep = ({ treeData, maxLevels }) => (
    <div className="tree-rep-area">
        {
            /* iterates over columns */
            [...Array(maxLevels).keys()].map(num => {
                const currLevel = num + 1;
                return <div className="tree-column" style={{width: (100/[...Array(maxLevels).keys()].length) + "%" }}>
                    {
                        /* Iterates over rows (column-devision) , Each row will contain 2 nodes */
                        currLevel === 1 ? (
                            <SingleNode treeData={treeData} currCol={currLevel} currRow={1}/>
                        ) : 
                        [...Array(Math.pow(2, currLevel-2)).keys()].map(divNum => {
                            return <div className="tree-column-division" style={{height: (100/[...Array(currLevel-1).keys()].length) + "%" }}>
                                {
                                    /* Iterates over nodes */
                                    [...Array(2).keys()].map(lvlIterator => (
                                        <SingleNode treeData={treeData} currCol={currLevel} colDivNum={divNum+1} currRow={lvlIterator+1}/>
                                    ))
                                }
                            </div>
                        })                      
                    }
                </div> 
            })
        }
    </div>
);

export default TreeRep;