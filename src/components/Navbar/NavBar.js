import "./NavBar.css";

const NavBar = ({ handleInput }) => {
  
  return (
    <div className="NavBar">
      <nav>
          <input
            className="search-box"
            type="text"
            placeholder="SEARCH BY TITLE"
            onChange={(event) => handleInput(event)}
          />
      </nav>
    </div>
  );
}

export default NavBar; 