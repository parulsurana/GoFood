import React from "react";

export default function Card(props) {
  let options = props.options;
  let priceOptions = Object.keys(options);

  return (
    <div>
      {" "}
      <div className="card mt-3 Card">
        <img src={props.imgSrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
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
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>

            <div className="d-inline fs-10 h-100" style={{ fontSize: "16px" }}>
              Total Price
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
