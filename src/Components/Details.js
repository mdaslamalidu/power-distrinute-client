import React, { useEffect, useState } from "react";
import { getAllBills } from "../api/totalBill";
import DetailsModal from "./DetailsModal";
import Header from "./Header";

const Details = () => {
  const [totalBill, setTotalBill] = useState([]);
  const [modal, setModal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  const pages = Math.ceil(count / size);
  console.log(count, pages);

  useEffect(() => {
    getAllBills().then((data) => {
      setTotalBill(data.result);
      setModal(data.result);
      setCount(data.count);
      setSpinner(false);
    });
  }, [spinner]);

  return (
    <div className="overflow-x-auto mt-5">
      <div className="bg-gray-400 py-4 px-3">
        <div className="flex justify-between">
          <div>
            <h2 className="inline">Details</h2>
            <input type="search" name="" id="" />
          </div>
          <div>
            <label
              htmlFor="my-modal-3"
              className="bg-gray-700 py-2 px-3 text-white"
            >
              Add New
            </label>
          </div>
        </div>
      </div>
      <table className="table table-zebra w-full text-center">
        <thead>
          <tr>
            <th>Billing ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Paid Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {totalBill.map((bill) => (
            <tr>
              <th> {loading ? "Loading" : bill._id}</th>
              <td>{bill.fullName}</td>
              <td>{bill.email}</td>
              <td>{bill.phone}</td>
              <td>{bill.amount}</td>
              <td>
                <button>Edit |</button>
                <button> Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-center my-8">
        {[...Array(pages).keys()].map((number) => (
          <h2
            onClick={() => setPage(number)}
            className={
              page === number
                ? "py-2 px-3 bg-secondary inline text-center text-white rounded text-xl mx-2"
                : "py-2 px-3 bg-slate-500 inline text-center text-white rounded text-xl mx-2"
            }
          >
            {number}
          </h2>
        ))}
      </div>

      {modal && (
        <DetailsModal
          setModal={setModal}
          setLoading={setLoading}
          setSpinner={setSpinner}
        ></DetailsModal>
      )}
    </div>
  );
};

export default Details;
