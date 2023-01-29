import React, { useEffect, useState } from "react";

const Header = () => {
  return (
    <div className="bg-gray-400 py-4 px-3">
      <div className="flex justify-between">
        <div>
          <h2>Logo</h2>
        </div>
        <div>
          <h2>Total Paid: </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
