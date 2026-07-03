import { useState, useEffect } from "react";
import { getAll } from "../coutriesData";

function App() {
  const [countryName, setCountryName] = useState("");
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    getAll()
      .then((data) => {
        setAllCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  useEffect(() => {
    const query = countryName.trim().toLowerCase();
    if (!query) {
      setFilteredCountries([]);
      return;
    }

    setFilteredCountries(
      allCountries.filter((country) => {
        const commonName = country?.name?.common?.toLowerCase() || "";
        const officialName = country?.name?.official?.toLowerCase() || "";
        return commonName.includes(query) || officialName.includes(query);
      }),
    );
  }, [countryName, allCountries]);

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
      <h2>Find Countries Data</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter country name"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {filteredCountries.length > 0 ? (
        <div>
          <h2>Matching countries:</h2>
          {filteredCountries.map((country) => (
            <div
              key={country.cca3 || country.name.common}
              style={{
                padding: "12px",
                border: "1px solid #ccc",
                marginBottom: "16px",
              }}>
              <h3>{country.name.common}</h3>
              <p>Official name: {country.name.official}</p>
              <p>Capital: {country.capital?.join(", ") || "N/A"}</p>
              <p>Region: {country.region || "N/A"}</p>
              <img
                src={country.flags?.png || country.flags?.svg}
                alt={`Flag of ${country.name.common}`}
                width="120"
              />
            </div>
          ))}
        </div>
      ) : (
        countryName.trim() && (
          <p>No countries found matching "{countryName.trim()}".</p>
        )
      )}
    </div>
  );
}

export default App;
