import React, { useEffect, useState } from "react";
import { getAllBills } from "../api/totalBill";
import BillEdit from "./BillEdit";
import DetailsModal from "./DetailsModal";
import Header from "./Header";

const Details = () => {
  const [email, setEmail] = useState("");
  const [totalBill, setTotalBill] = useState([]);
  const [modal, setModal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [handleId, setHandleEditId] = useState(null);
  console.log(handleId);
  const pages = Math.ceil(count / size);
  console.log(email);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/delete-billing/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setSpinner(true);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const url = `http://localhost:5000/billing-list?page=${page}&size=${size}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTotalBill(data.result);
        setModal(data.result);
        setCount(data.count);
        setSpinner(false);
      });
  }, [spinner, page, size]);

  return (
    <div className="overflow-x-auto mt-5">
      <div className="bg-gray-400 py-4 px-3">
        <div className="flex justify-between">
          <div>
            <h2 className="inline">Billings</h2>
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
                <label
                  onClick={() => setHandleEditId(bill._id)}
                  htmlFor="my-modal-4"
                >
                  Edit
                </label>

                <button onClick={() => handleDelete(bill._id)}> Delete</button>
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
            {number + 1}
          </h2>
        ))}
      </div>

      {modal && (
        <BillEdit
          setModal={setModal}
          setSpinner={setSpinner}
          setEmail={setEmail}
          handleId={handleId}
        ></BillEdit>
      )}

      {modal && (
        <DetailsModal
          setModal={setModal}
          setLoading={setLoading}
          setSpinner={setSpinner}
          setEmail={setEmail}
        ></DetailsModal>
      )}
    </div>
  );
};

export default Details;
