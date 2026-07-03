import { useState, useEffect } from "react";
import { getAll } from "../coutriesData";

function App() {
  const [countryName, setCountryName] = useState("");
  const [countryData, setCountryData] = useState([]);
  const [isFound, setIsFound] = useState(false);

  useEffect(() => {
    if (countryName) {
      getAll(countryName)
        .then((data) => {
          setCountryData(data);
          setIsFound(true);
        })
        .catch((error) => {
          console.error("Error fetching country data:", error);
          setIsFound(false);
        });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (countryName.trim() === "") {
      alert("Please enter a country name.");
      return;
    }
    setCountryName(countryName.trim());
  };

  return (
    <div>
      <h1>Find Countries Data</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter country name"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {isFound ? (
        <div>
          <h2>Country Data:</h2>
          <pre>{JSON.stringify(countryData, null, 2)}</pre>
        </div>
      ) : (
        countryName && <p>No data found for the specified country.</p>
      )}
    </div>
  );
}

export default App;
