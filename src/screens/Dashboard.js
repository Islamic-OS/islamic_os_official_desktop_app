import React from "react";
import NavigatorButtons from "../components/NavigatorButtons";

function Dashboard() {
  return (
    <div className="Dashboard bg-green-700 h-screen w-full flex flex-col items-center justify-evenly">
      <p className="text-2xl font-bold text-white w-6/12 text-center">
        As-salaam-u-&lsquo;alaikum wa Ra&lsquo;hmatullaahi wa barakaatuh!
      </p>

      <div className="flex items-center justify-evenly flex-wrap bg-red-100 h-3/6 w-9/12">
        <NavigatorButtons
          path="/"
          element={
            <p className="text-lg font-bold w-6/12 text-center">Dashboard</p>
          }
        />
        <NavigatorButtons
          path="/"
          element={
            <p className="text-lg font-bold w-6/12 text-center">Dashboard</p>
          }
        />
        <NavigatorButtons
          path="/"
          element={
            <p className="text-lg font-bold w-6/12 text-center">Dashboard</p>
          }
        />
        <NavigatorButtons
          path="/"
          element={
            <p className="text-lg font-bold w-6/12 text-center">Dashboard</p>
          }
        />
        <NavigatorButtons
          path="/"
          element={
            <p className="text-lg font-bold w-6/12 text-center">Dashboard</p>
          }
        />
        <NavigatorButtons
          path="/"
          element={
            <p className="text-lg font-bold w-6/12 text-center">Dashboard</p>
          }
        />
      </div>
    </div>
  );
}

export default Dashboard;
