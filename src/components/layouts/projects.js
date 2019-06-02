import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import BaseLayout from "./base";

import styles from "./projects.module.css";

export default () => {
  const { allMarkdownRemark: data } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { path: { eq: "/projects" } } }
      ) {
        edges {
          node {
            html
          }
        }
      }
    }
  `);

  const projects = data.edges[0].node;

  return (
    <BaseLayout title="Projects">
      <section
        className={styles.projects}
        dangerouslySetInnerHTML={{ __html: projects.html }}
      />
    </BaseLayout>
  );
};
