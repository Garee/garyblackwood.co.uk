import React from "react";
import { Link } from "gatsby";

import Illustration from "../images/illustrations/404.svg";

import styles from "./404.module.css";

export default () => (
  <section className={styles.notFound}>
    <h1>This is not the page that you are looking for.</h1>
    <img src={Illustration} alt="404 not found." />
    <p>
      <Link to="/">Take me home</Link>
    </p>
  </section>
);
