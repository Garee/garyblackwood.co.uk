import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import styles from "./footer.module.css";

export default () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  );

  return (
    <footer className={styles.footer}>
      <hr />© {new Date().getFullYear()},{` `}
      {site.siteMetadata.author}
    </footer>
  );
};
