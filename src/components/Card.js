import React from "react";

export default function Card() {
  return (
    <div>
      {" "}
      <div className="card mt-3 Card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Jacques_Lameloise_DSCF6580.jpg/220px-Jacques_Lameloise_DSCF6580.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is the card 1.</p>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>

            <select className="m-2 h-100 bg-success rounded">
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>

            <div className="d-inline fs-8 h-100">Total Price</div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
