import { IoSearch } from "react-icons/io5";
import { IoIosCart } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import "./Navbar.css";
import { useEffect, useState } from "react";

export const Navbar = ({ setGlobalSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    setGlobalSearch(input);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setGlobalSearch(value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setGlobalSearch(input);
    }, 300);

    return () => clearInterval(timer);
  }, [input]);

  return (
    <div className="navbar">
      <nav className="nav">
        <div className="logo">
          <img
            src="https://aartisto.com/wp-content/uploads/2020/11/myntra.png"
            alt=""
            height={"50px"}
          />
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search product ..."
            value={input}
            onChange={handleChange}
          />
          <button onClick={handleSearch}>
            <IoSearch /> Search
          </button>
        </div>
        <div className="checks">
          <p className="cart">
            Cart <IoIosCart />{" "}
          </p>
          <p className="profile">
            <CgProfile />
          </p>
        </div>
      </nav>
    </div>
  );
};
