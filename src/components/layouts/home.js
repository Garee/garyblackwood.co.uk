import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import BaseLayout from "./base";

import styles from "./home.module.css";

export default ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <BaseLayout title="Home">
      <section className={styles.home}>
        <div className={styles.text}>
          <h1>
            Hello{" "}
            <span role="img" aria-label="Waving" title="Waving">
              👋
            </span>
          </h1>
          {children}
        </div>
        <div className={styles.avatar}>
          <Img
            fixed={data.file.childImageSharp.fixed}
            alt="Gary Blackwood"
            title="Gary Blackwood"
          />
        </div>
      </section>
    </BaseLayout>
  );
};
