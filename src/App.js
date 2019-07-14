import React from "react";
import SideNav from "./components/SideNav";
import AppContent from "./components/AppContent";
import "./App.css";
 
function App() {
  return (
    <div className="app-container">
      <SideNav />
      <AppContent />
    </div>
  );
}

export default App;