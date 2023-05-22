import React from "react";
import {  NavLink } from "react-router-dom";
import styles from "./MenuLink.module.scss";

export default function MenuLink({ children, to }) {
  return (
    <NavLink
      className={({ isActive }) => `
        ${styles.link}
        ${isActive ? styles.linkDestacado : ""}
    `}
      to={to}
      end
    >
      {children}
    </NavLink>
  );
}
