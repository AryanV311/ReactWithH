import React, { useState } from "react";

const filterOptions = {
  material: ["Cotton", "Denim", "Leather", "Silk", "Polyester"],
  brand: ["StyleMate", "FleetWalk", "UrbanCraft", "NorthCove", "TickTech"],
  color: ["Black", "White", "Blue", "Red", "Green"],
  size: ["S", "M", "L", "XL", "XXL"],
};

export const FilterBar = () => {
  const [selected, setSelected] = useState({
    material: [],
    brand: [],
    color: [],
    size: [],
  });

  const [searchText, setSearchText] = useState({
    material: "",
    brand: "",
    color: "",
    size: "",
  });

  // Handle search → auto-select checkbox
  const handleSearch = (category) => {
    const input = searchText[category].trim().toLowerCase();
    console.log("inputt",input)
    if (!input) return;

    const match = filterOptions[category].find(
      (item) => item.toLowerCase() === input
    );

    console.log("match", match);

    if (match && !selected[category].includes(match)) {
      setSelected((prev) => ({
        ...prev,
        [category]: [...prev[category], match],
      }));
    }

    setSearchText((prev) => ({ ...prev, [category]: "" }));
  };

  // Handle checkbox toggle
  const handleCheckboxChange = (category, value) => {
    const isSelected = selected[category].includes(value);
    setSelected((prev) => ({
      ...prev,
      [category]: isSelected
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  // Remove tag
  const removeTag = (category, value) => {
    setSelected((prev) => ({
      ...prev,
      [category]: prev[category].filter((item) => item !== value),
    }));
  };

  return (
    <div
      style={{ padding: "20px", maxWidth: "350px", border: "1px solid #ccc" }}
    >
      <div style={{marginBottom:"20px"}}>
        <h3>Selected Tags</h3>
        {Object.entries(selected).flatMap(([category, values]) =>
          values.map((val) => (
            <div
              key={`${category}-${val}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "5px 10px",
                margin: "5px",
                backgroundColor: "#007bff",
                color: "#fff",
                borderRadius: "20px",
              }}
            >
              {category}: {val}
              <button
                onClick={() => removeTag(category, val)}
                style={{
                  marginLeft: "8px",
                  background: "transparent",
                  border: "none",
                  color: "#fff",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                ×
              </button>
            </div>
          ))
        )}
      </div>

      <h2>Filters</h2>

      {Object.keys(filterOptions).map((category) => (
        <div key={category} style={{ marginBottom: "20px" }}>
          <h3 style={{ textTransform: "capitalize" }}>{category}</h3>

          <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
            <input
              type="text"
              placeholder={`Search ${category}`}
              value={searchText[category]}
              onChange={(e) =>
                setSearchText((prev) => ({
                  ...prev,
                  [category]: e.target.value,
                }))
              }
              style={{ flex: 1, padding: "5px" }}
            />
            <button onClick={() => handleSearch(category)}>Search</button>
          </div>

          <div
            style={{
              maxHeight: "120px",
              overflowY: "auto",
              background: "#f9f9f9",
              padding: "10px",
              border: "1px solid #ddd",
            }}
          >
            {filterOptions[category].map((value) => (
              <label key={value} style={{ display: "block" }}>
                <input
                  type="checkbox"
                  checked={selected[category].includes(value)}
                  onChange={() => handleCheckboxChange(category, value)}
                />{" "}
                {value}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
