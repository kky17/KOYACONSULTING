const { useState, useEffect } = React;

function App() {
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const btn = document.getElementById('contact-btn');
    let pos = 0;
    let direction = 1;
    const interval = setInterval(() => {
      pos += direction;
      if (pos > 20 || pos < -20) direction *= -1;
      btn.style.transform = `translateX(${pos}px)`;
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Koya AI Integrations</h1>
        <p>Transforming business with design and automation.</p>
      </header>
      <button id="contact-btn" onClick={() => setShowMap(!showMap)}>
        Contact Me
      </button>
      {showMap && (
        <div className="map-overlay" onClick={() => setShowMap(false)}>
          <img src="public/map.svg" alt="Map of Gelsenkirchen Buer" />
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
