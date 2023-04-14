import { useState, useEffect } from 'react';
import './App.css';
import { Edu } from './components/routes';

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
      function handleResize() {
      setWidth(window.innerWidth);
      }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return (
    <div className="App">
      <Edu width={width}/>
    </div>
  );
}

export default App;
