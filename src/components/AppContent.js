import React from "react";
import InfoHeader from "./InfoHeader";
import OperationsList from "./OperationsList";
import NodeTree from "./NodeTree";
 
const AppContent = () => {
  return (
    <div className="content-area">
      <InfoHeader />
      <div className="records-operations-wrapper">
        <OperationsList />
        <NodeTree />
      </div>
    </div>
  );
};

export default AppContent;