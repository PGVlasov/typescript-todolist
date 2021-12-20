import { NavLink } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper px1">
        <NavLink to="/" className="brand-logo">
          React + TS
        </NavLink>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">ToDoList</NavLink>
          </li>
          <li>
            <NavLink to="/about">Information</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
