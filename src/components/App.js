// App.jsx
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import '../styles/App.css';

function App() {
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(true);

  // Handle textarea changes
  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  // Stop loading after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="app">
      <textarea
        onChange={handleChange}
        placeholder="Type your markdown here..."
        style={{ width: "100%", height: "150px", marginBottom: "20px" }}
      />
      <div className="preview" style={{ border: "1px solid #ccc", padding: "10px" }}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
