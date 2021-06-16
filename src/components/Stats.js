import React from "react";

function Stats({ showModal, backers, backed }) {
  const value = (backed / 100000) * 100;

  console.log(value);

  return (
    <section className={`${showModal ? "stats modal-active" : "stats"}`}>
      <div className="stats-center">
        <div className="stats-container">
          <div className="backed-stat">
            <h1>${backed.toLocaleString()}</h1>
            <p>of $100,000 backed</p>
          </div>
          <div className="backed-stat">
            <h1>{backers.toLocaleString()}</h1>
            <p>total backers</p>
          </div>
          <div className="backed-stat days">
            <h1>56</h1>
            <p>days left</p>
          </div>
        </div>
        <div className="progress-bar">
          <div
            className="progress"
            style={{
              position: "absolute",
              height: "100%",
              width: `${value}%`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
