import React from "react";
function About({ openModal, showModal, statData }) {
  return (
    <section className="about">
      <div className="about-center">
        <h3>About this project</h3>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping uou stay
          focused on the task at har.
        </p>
        <p>
          Featuring artisan craftmanship, the simplicity of design creates extra
          desk space below your computer to allow notepads, pens, and USB sticks
          to be stored under the stand.
        </p>
        <div className="reward-container">
          {statData.map((item, index) => {
            return (
              <article
                className={`${
                  item.left === 0 ? "reward out-of-stock" : "reward"
                }`}
              >
                <div className="reward-header">
                  <h4>{item.name}</h4>
                  <h4>{item.pledge}</h4>
                </div>
                <p>{item.content}</p>
                <div className="reward-btn-container">
                  <h1>
                    {item.left} <span>left</span>
                  </h1>
                  <button
                    className={`${
                      item.left === 0
                        ? "btn reward-btn out-btn"
                        : "btn reward-btn"
                    }`}
                    onClick={openModal}
                  >
                    <a href="#modal">{item.button}</a>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;

{
  /* <article className="reward">
<div className="reward-header">
  <h4>Bamboo Stand</h4>
  <h4>Pledge $25 or more</h4>
</div>
<p>
  You get an ergonomic stand made of natural bamboo. You've helped
  us launch our promotial campaign, and you'll be added to a special
  Backer member list.
</p>
<div className="reward-btn-container">
  <h1>
    101 <span>left</span>
  </h1>
  <button className="btn reward-btn">Select Reward</button>
</div>
</article> */
}
