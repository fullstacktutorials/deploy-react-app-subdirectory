import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <Fragment>
      <Link to={`/`}>Home</Link> | <Link to={`/about`}>About</Link> |
      <Link to={`/contact`}>Contact</Link>
      <hr />
    </Fragment>
  );
}

export default Menu;
