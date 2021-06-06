import React from "react";
import useFetchAqi from "../hooks/useFetchAqi";
import { ThemeContext } from "../utilities/ThemeContext";
import Loader from "./Loader";
function DataTable() {
  const { theme } = React.useContext(ThemeContext);
  const { aqiList, connectionStatus } = useFetchAqi();
  const aqiCategory = (aqi) => {
    if (aqi > 0 && aqi < 50) return { bgColor: "green-600", category: "Good" };
    else if (aqi > 50 && aqi < 100)
      return { bgColor: "green-400", category: "satisfactory" };
    else if (aqi > 100 && aqi < 200)
      return { bgColor: "yellow-300", category: "moderate" };
    else if (aqi > 200 && aqi < 300)
      return { bgColor: "yellow-500", category: "poor" };
    else if (aqi > 300 && aqi < 400)
      return { bgColor: "red-500", category: "very poor" };
    else if (aqi > 400 && aqi < 500)
      return { bgColor: "red-700", category: "severe" };
    else return { bgColor: "red-200", category: "severe" };
  };
  if (connectionStatus === "Connecting")
    return <Loader connectionStatus={connectionStatus} />;
  return (
    <div
      className={`container flex flex-wrap sm:px-6 my-12 mx-auto overflow-hidden rounded-lg  shadow-xs border-2 border-${theme}-300`}
    >
      <table className="sm:w-full w-auto mb-4 sm:text-center">
        <thead>
          <tr
            className={`sm:text-md text-xs font-medium sm:font-semibold tracking-wide text-${theme}-300 uppercase border-b bg-gray-50`}
          >
            <th className="px-2 py-3">city</th>
            <th className="px-2 py-3">air quality index (AQI)</th>
            <th className="px-2 py-3">category</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y">
          {aqiList &&
            aqiList.map((m) => {
              const { city, aqi } = m;
              const { bgColor, category } = aqiCategory(aqi);
              return (
                <tr
                  key={city}
                  className={`text-gray-900 cursor-pointer hover:bg-lime bg-${bgColor}`}
                >
                  <td className="px-2 py-3 font-semibold text-sm">{city}</td>
                  <td className="px-2 py-3 text-sm text-center">
                    {aqi.toFixed(2)}
                  </td>
                  <td className="px-2 py-3 text-sm font-medium capitalize">
                    {category}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
