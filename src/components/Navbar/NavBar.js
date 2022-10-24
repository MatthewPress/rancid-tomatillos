import "./NavBar.css";

const NavBar = ({ handleInput }) => {
  
  return (
    <div className="NavBar">
      <nav>
          <input
            className="search-box"
            type="text"
            placeholder="Search by title"
            onChange={handleInput}
          />
      </nav>
    </div>
  );
}

export default NavBar; 