import React from "react";
import "./NavBar.css";
const NavBar = ({ handleInput }) => {
    return (
        <div className="NavBar">
            <nav className="search-box">
                <input
                    className="input"
                    type="text"
                    placeholder="Search by title"
                    onChange={handleInput}
                />
            </nav>
        </div>
    );
};
export default NavBar;