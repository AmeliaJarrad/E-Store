import { NavLink } from 'react-router';
import classes from './NavBar.module.scss';

export default function NavBar() {
  return (
    <nav className={classes.nav}>
      <div className={classes.nav_group}>
        <NavLink className={classes.nav_link} to="/">
          Home
        </NavLink>
      </div>
      <div className={classes.nav_group}>
      <NavLink  className={classes.nav_link} to="/cart">
          Cart
        </NavLink>
        <NavLink  className={classes.nav_link} to="/products">
          All Products
        </NavLink>
        <NavLink  className={classes.nav_link} to="/products/new">
          Add new product
        </NavLink>
      </div>
    </nav>
  );
}