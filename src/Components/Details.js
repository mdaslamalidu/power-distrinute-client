import React from "react";

const Details = () => {
  return (
    <div className="overflow-x-auto mt-5">
      <div className="bg-gray-400 py-4 px-3">
        <div className="flex justify-between">
          <div>
            <h2 className="inline">Details</h2>
            <input type="search" name="" id="" />
          </div>
          <div>
            <h2>Add New</h2>
          </div>
        </div>
      </div>
      <table className="table table-zebra w-full">
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
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td>Cy Ganderton</td>
            <td>
              <button>Edit |</button>
              <button> Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Details;
