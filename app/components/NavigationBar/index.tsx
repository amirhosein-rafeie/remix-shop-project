import { NavLink } from "@remix-run/react";

import ROUTES from "~/constants/routes";
import styles from "./navigation-bar-style.module.css";

import remixLogo from "~/assets/icons/remix.png";

const navItems = [
  { title: "Home", url: "/" },
  { title: "Shop", url: ROUTES.shop },
  { title: "About", url: ROUTES.about },
];

const NavigationBar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <img className={styles.logo} src={remixLogo} alt="remix logo" />
      </div>
      <ul className={styles.ul}>
        {navItems.map((item, index) => (
          <li className={styles.li} key={index}>
            <NavLink
              className={({ isActive }) =>
                `${styles.navLink} ${isActive && styles.activeNavLink}`
              }
              to={item.url}
            >
              <p>{item.title}</p>
            </NavLink>
          </li>
        ))}
      </ul>
      <div>Icons</div>
    </nav>
  );
};

export default NavigationBar;
