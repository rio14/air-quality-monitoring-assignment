import React from "react";
import Header from "../components/Header";
import { ThemeContext } from "../utilities/ThemeContext";
import useFetchAqi from "../hooks/useFetchAqi";

function Main() {
  const { theme } = React.useContext(ThemeContext);
  const { aqiList, connectionStatus } = useFetchAqi();
  console.log("====================================");
  console.log(connectionStatus, aqiList);
  console.log("====================================");
  return (
    <div
      className={`w-full h-screen flex items-start justify-start bg-${theme}-400 px-6 py-12`}
    >
      <div className="container">
        <Header />
      </div>
    </div>
  );
}

export default Main;
