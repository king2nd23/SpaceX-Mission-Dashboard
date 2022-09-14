import React from "react";
import DashboardHeader from "./components/DashboardHeader";
import LaunchesByNationality from "./components/LaunchesByNationality";

function App() {
  return (
    <div className="mx-10">
      <DashboardHeader header="SpaceX Mission Dashboard" />
      <div className="flex">
      {/* <LaunchesByNationality header="Payload Count By Nationality" /> */}
      </div>
    </div>
  );
}

export default App;
