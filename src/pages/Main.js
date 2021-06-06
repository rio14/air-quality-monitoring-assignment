import React from "react";
import DataTable from "../components/DataTable";
import Header from "../components/Header";
import { ThemeContext } from "../utilities/ThemeContext";
function Main() {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div
      className={`w-full h-screen flex items-start justify-start bg-${theme}-400 px-6 py-12`}
    >
      <div className="container">
        <Header />
        <DataTable />
      </div>
    </div>
  );
}

export default Main;
