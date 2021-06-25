import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import BaseLayout from "../base/base";

import * as styles from "./projects.module.css";

const ProjectsLayout = () => {
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

  const projectsHtml = data.edges[0].node.html;

  return (
    <BaseLayout title="Projects">
      <section
        className={styles.projects}
        dangerouslySetInnerHTML={{ __html: projectsHtml }}
      />
    </BaseLayout>
  );
};

export default ProjectsLayout;
