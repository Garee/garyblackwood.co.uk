import React from "react";
import { graphql } from "gatsby";

import BaseLayout from "./base";

import art from "../../images/illustrations/art.svg";
import coffeeBreak from "../../images/illustrations/coffee-break.svg";
import typewriter from "../../images/illustrations/typewriter.svg";

import styles from "./coming-soon.module.css";

const illustrations = {
  art: art,
  coffeeBreak: coffeeBreak,
  typewriter: typewriter
};

export default ({ data }) => {
  const { markdownRemark: page } = data;
  const illustration = illustrations[page.frontmatter.icon];
  return (
    <BaseLayout title={page.frontmatter.title}>
      <section className={styles.comingSoon}>
        <h2>Coming Soon</h2>
        <img src={illustration} alt="Coming Soon" title="Coming Soon" />
      </section>
    </BaseLayout>
  );
};

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        icon
      }
    }
  }
`;
