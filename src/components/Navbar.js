import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const navList = [
  {
    toLink: "",
    link_name: "Home",
  },
  {
    toLink: "about",
    link_name: "About",
  },
  {
    toLink: "services",
    link_name: "Service",
  },
  {
    toLink: "contact",
    link_name: "Contact",
  },
];

const Navbar = () => {
  const Nav = styled.nav`
    .navbar-list {
      display: flex;
      gap: 4.8rem;
      li {
        list-style: none;
       
        .navbar-link {
          text-decoration:none;
          color: ${({ theme }) => theme.colors.a_link};
          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }
      }
    }
  `;
  return (
    <Nav>
      <div className="menuIcon">
        <ul className="navbar-list">
          {navList?.map((list, idx) => (
            <li key={idx}>
              <NavLink className="navbar-link" to={`/${list.toLink}`}>
                {list.link_name}{" "}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </Nav>
  );
};

export default Navbar;
