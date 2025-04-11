import React, { useState } from "react";
import { Profile } from "./components/Profile";
import { Interets } from "./components/Interets";
import { Setting } from "./components/Setting";

const App = () => {
  const [data, setData] = useState({
    name: "Aka",
    email: "Aka1@gmail.com",
    age: 21,
    interests: ["coding", "jumping"],
    theme: "dark",
  });
  const [activeTabs, setActiveTabs] = useState(0);

  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interets",
      component: Interets,
    },
    {
      name: "Setting",
      component: Setting,
    },
  ];

  const handlePrevChange = () => {
    setActiveTabs((prev) => prev - 1);
  };

  const handleNextChange = () => {
    setActiveTabs(prev => prev + 1)
  };
  const handleSubmit = () => {};

  const ActiveTabContainer = tabs[activeTabs].component;

  return (
    <div>
      <div className="tabs-container">
        {tabs.map((tabs, index) => (
          <div
            onClick={() => setActiveTabs(index)}
            key={index}
            className="tabs"
          >
            {tabs.name}
          </div>
        ))}
      </div>
      <div className="active-tab">
        <ActiveTabContainer data={data} setData={setData} />
      </div>

      <div className="btn">
        {activeTabs > 0 && (
          <button onClick={handlePrevChange} className="prevBtn">
            prev
          </button>
        )}

{activeTabs < tabs.length - 1 && (
          <button onClick={handleNextChange} className="prevBtn">
            Next
          </button>
        )}
        {
          activeTabs === tabs.length -1 && <button onClick={handleSubmit} className="prevBtn">
          Submit
        </button>
        }
      </div>


        
      
    </div>
  );
};

export default App;
