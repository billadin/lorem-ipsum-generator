import React, { useState } from 'react';


function App() {
  const [count, setCount] = useState(1);
  
  return (
  <section className='section-center'>
    <h3>Tired of boring lorem ipsum?</h3>
    <form action="" className='lorem-form'>
      <label htmlFor="amount">paragraphs:</label>
      <input type="number" name="amount" id="amount" min='1' step='1' max='8' value={count} onChange={(e)=> setCount(e.target.value)}/>
      <button className='btn' typeof='submit'>generate</button>
    </form>
  </section>
    )
}

export default App;