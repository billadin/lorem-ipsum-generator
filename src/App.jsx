import React, { useState } from 'react';
import data from './data';

function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
  }


  return (
  <section className='section-center'>
    <h3>Tired of boring lorem ipsum?</h3>
    <form className='lorem-form' onSubmit={handleSubmit}>
      <label htmlFor="amount">paragraphs:</label>
      <input type="number" name="amount" id="amount" min='1' step='1' max='8' value={count} onChange={(e)=> setCount(e.target.value)}/>
      <button className='btn' typeof='submit'>generate</button>
    </form>
    <article>
      {
        text.map((item, index) =>{
          return <p key={index}>{item}</p>
        })
      }
    </article>
  </section>
    )
}

export default App;