import React from "react";
import { graphql } from "gatsby";

import BaseLayout from "./base";

import styles from "./page.module.css";

export default ({ data }) => {
  const { markdownRemark: page } = data;
  return (
    <BaseLayout
      title={page.frontmatter.title}
      description={page.frontmatter.description}
    >
      <section
        className={styles.page}
        dangerouslySetInnerHTML={{ __html: page.html }}
      />
    </BaseLayout>
  );
};

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
