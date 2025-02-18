import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./style.css";

const SearchIcon = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState(" #e8faff");

  const handleSubmit = (e) => {
    setBgColor("#1a1a1a");

    if (e.target.className === "container") {
      setShowInput(false);
      setBgColor("#e8faff");
    }
  };

  return (
    <section
      className="container"
      style={{ backgroundColor: bgColor }}
      onClick={handleSubmit}
    >
      {showInput ? (
        <input type="text" placeholder="Search..." />
      ) : (
        <FaSearch className="Search" onClick={() => setShowInput(true)} />
      )}
    </section>
  );
};

export default SearchIcon;
