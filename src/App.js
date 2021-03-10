import React, { useState } from "react";
import data from "./data";
function App() {
  const [dataText, setData] = useState([]);
  // const [number, setNumber] = useState(0);

  const generatParagraf = (e) => {
    e.preventDefault();
    setData(data.slice(0, (+e.target[0].value)));
  };

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={generatParagraf}>
        <label htmlFor="amount">paragraph:</label>
        <input type="number" name="amount" id="amount" min="1" />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {dataText
          .map((item, i) => {
            return <p key={i}>{item}</p>;
          })}
      </article>
    </section>
  );
}

export default App;
