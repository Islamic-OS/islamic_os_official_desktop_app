import React from "react";

function NavigatorButtons({ path, element }) {
  return (
    <div className="flex flex-col items-center justify-center bg-sky-100 h-2/6 w-1/4 mx-2">
      {element}
    </div>
  );
}

export default NavigatorButtons;
