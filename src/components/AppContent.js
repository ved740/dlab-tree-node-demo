import React from "react";
import InfoHeader from "./InfoHeader";
import OperationsList from "./OperationsList";
import DataTable from "./DataTable";
 
const AppContent = () => {
  return (
    <div className="content-area">
      <InfoHeader />
      <div className="records-operations-wrapper">
        <OperationsList />
        <div className="lab-data-area">
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default AppContent;