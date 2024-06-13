import React from "react";

export default function HPBAr({ hp }) {
  const getColor = () => {
    if (hp >= "50") {
      return "bg-green-500";
    } else if (hp > "20" && hp < "50") {
      return "bg-yellow-500";
    } else {
      return "bg-red-500";
    }
  };
 
  return (
    <div className="flex items-center justify-center border-4 rounded">
      <div className="w-32 h-4 bg-gray-200">
        <div
          className={`h-full ${getColor()}`}
          style={{ width: `${hp}%` }}
        >
           
        </div>
        
      </div>
    </div>
  );
}
