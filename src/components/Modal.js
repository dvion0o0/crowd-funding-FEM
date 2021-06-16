import React from "react";
import { IoClose } from "react-icons/io5";
function Modal({
  closeModal,
  showModal,
  submitPledge,
  handleValue,
  black,
  bamboo,
  checked,
  setChecked,
  data,
}) {
  const handleChange = (index) => {
    if (index === checked) {
      setChecked(null);
    } else {
      setChecked(index);
    }
  };

  const styles = (index, item) => {
    if (item.left < 1) {
      return "reward-modal out-of-stock";
    } else if (item === checked) {
      return "reward-modal active-pledge-modal";
    }
    return "reward-modal";
  };

  // {`${
  //   item.left === 0 ? "reward-modal out-of-stock" : "reward-modal"
  // }`}

  return (
    <section
      className={`${showModal ? "modal show-modal" : "modal"}`}
      id="modal"
    >
      <div className="modal-header">
        <h3>Back this project</h3>
        <IoClose className="close" onClick={closeModal} />
      </div>
      <p>
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>
      <div className="modal-container">
        {data.map((item, index) => {
          return (
            <article className={styles(item, index)}>
              <div className="reward-modal-main-content">
                <div className="reward-modal-top">
                  <div className="reward-modal-header">
                    <label class="container">
                      <input
                        type="radio"
                        name="radio"
                        disabled={item.left === 0}
                        onChange={() => handleChange(index)}
                      />
                      <span class="checkmark"></span>
                    </label>
                    <div className="title">
                      <h4>{item.name}</h4>
                      <h4>{item.pledge}</h4>
                    </div>
                  </div>
                  <p>{item.content}</p>
                </div>
                <div className="reward-modal-bottom">
                  {item.left > 0 && (
                    <h3>
                      {item.left} <span>left</span>
                    </h3>
                  )}
                </div>
              </div>
              {checked === index && (
                <div className="reward-modal-pledge">
                  <h4>Enter your pledge</h4>
                  <div className="reward-modal-pledge-btns">
                    {item.value && (
                      <div className="form-control">
                        <input
                          type="number"
                          required
                          min="25"
                          className="pledge-input"
                          name={item.name}
                          value={item.name === "Bamboo Stand" ? bamboo : black}
                          onChange={(e) => handleValue(e)}
                        />

                        <span>$</span>
                      </div>
                    )}
                    <button
                      className={`${
                        item.value ? "btn pledge-btn" : "no-reward-btn btn"
                      }`}
                      onClick={submitPledge}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Modal;

{
  /* <article className="reward-modal">
<div className="reward-modal-main-content">
  <div className="reward-modal-top">
    <div className="reward-modal-header">
      <label class="container">
        <input type="radio" name="radio" />
        <span class="checkmark"></span>
      </label>
      <div className="title">
        <h4>Pledge with no reward</h4>
        <h4>Pledge $25 or more</h4>
      </div>
    </div>
    <p>
      Choose to support us without a reward if you simply believe in
      our project. As a backer, you will be signed up to recieve
      product updates via email.
    </p>
  </div>
  <div className="reward-modal-bottom">
    <h3>
      101 <span>left</span>
    </h3>
  </div>
</div>
<div className="reward-modal-pledge">
  <h4>Enter your pledge</h4>
  <div className="reward-modal-pledge-btns">
    <div className="form-control">
      <input
        type="number"
        required
        min="25"
        className="pledge-input"
        value="25"
      />
      <span>$</span>
    </div>
    <button className="btn pledge-btn">Continue</button>
  </div>
</div>
</article> */
}
