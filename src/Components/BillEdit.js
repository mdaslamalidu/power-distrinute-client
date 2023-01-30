import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const BillEdit = ({ setSpinner, setModal, handleId }) => {
  const [myData, setmyData] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const amount = form.amount.value;
    const info = {
      fullName,
      email,
      phone,
      amount,
    };

    fetch(`http://localhost:5000/update-billing/${handleId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setModal(null);
          setSpinner(true);
          toast.success("SuccessFully Updated");
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch(`http://localhost:5000/billing/${handleId}`)
      .then((res) => res.json())
      .then((data) => {
        setmyData(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [handleId]);

  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-4"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center uppercase">
            Update Your Info
          </h3>
          <div className="">
            <div>
              <form onSubmit={handleSubmit}>
                <div className="form-control w-full my-2">
                  <label className="label">
                    <span className="label-text text-black">Full Name</span>
                  </label>{" "}
                  <input
                    className="input input-bordered w-full"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    defaultValue={myData.fullName}
                  />
                </div>
                <div className="form-control w-full my-2">
                  <label className="label">
                    <span className="label-text text-black">Email</span>
                  </label>{" "}
                  <input
                    className="input input-bordered w-full"
                    name="email"
                    type="email"
                    placeholder="Email"
                    defaultValue={myData.email}
                  />
                </div>
                <div className="form-control w-full my-2">
                  <label className="label">
                    <span className="label-text text-black">Phone</span>
                  </label>{" "}
                  <input
                    className="input input-bordered w-full"
                    name="phone"
                    type="number"
                    placeholder="Your Phone"
                    defaultValue={myData.phone}
                  />
                </div>
                <div className="form-control w-full my-2">
                  <label className="label">
                    <span className="label-text text-black">Amount</span>
                  </label>{" "}
                  <input
                    className="input input-bordered w-full"
                    name="amount"
                    type="number"
                    placeholder="Your Amount"
                    defaultValue={myData.amount}
                  />
                </div>
                <button type="submit" className="btn btn-slate-700 w-full my-2">
                  Update Your Data
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillEdit;
