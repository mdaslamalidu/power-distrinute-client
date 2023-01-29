import React from "react";

const DetailsModal = ({ setModal, setLoading, setSpinner }) => {
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
    fetch("http://localhost:5000/add-billing", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setModal(null);
        setSpinner(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center uppercase">
            Add Your Info
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
                  />
                </div>
                <button type="submit" className="btn btn-slate-700 w-full my-2">
                  Add Your Data
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
