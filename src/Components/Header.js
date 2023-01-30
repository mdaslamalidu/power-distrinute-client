import React, { useEffect, useState } from "react";
import { getAllBills } from "../api/totalBill";

const Header = () => {
  const [bill, setBill] = useState([]);

  useEffect(() => {
    getAllBills()
      .then((data) => setBill(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="bg-gray-400 py-4 px-3">
      <div className="flex justify-between">
        <div>
          <h2>Logo</h2>
        </div>
        <div>
          <h2>Total Paid: {bill?.length}</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
