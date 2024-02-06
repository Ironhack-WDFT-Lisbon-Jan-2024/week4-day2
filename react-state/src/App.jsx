import { useState } from 'react'
import './App.css'; 
import celebs from "./data/celebs.json";

function App() {
  // Destructuring an Array 
  const [celebrities, setCelebrities] = useState(celebs);
  const [count, setCount] = useState(0);

  return (
    <section>
      <article>
          <h3>{celebrities[count].name}</h3>
      </article>
      <article>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => count>0 ? setCount(count - 1) : setCount(0)}>-</button>
        <p>You clicked {count} times.</p>
      </article>
    </section>
  );
}

export default App
