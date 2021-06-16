import React from "react";

function pledgeModal({ setPledgeModal, pledgeModal }) {
  return (
    <section
      className={`${
        pledgeModal ? "pledge-modal show-pledge-modal" : "pledge-modal"
      }`}
    >
      <svg
        className="check"
        width="64"
        height="64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fill-rule="evenodd">
          <circle fill="#3CB3AB" cx="32" cy="32" r="32" />
          <path stroke="#FFF" stroke-width="5" d="M20 31.86L28.093 40 44 24" />
        </g>
      </svg>
      <h3>Thanks for your support!</h3>
      <p>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Montor Riser worldwode. You will get an email once-our campaign is
        completed.
      </p>
      <button
        className="btn pledge-modal-btn"
        onClick={() => setPledgeModal(false)}
      >
        Got it!
      </button>
    </section>
  );
}

export default pledgeModal;
