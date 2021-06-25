import React from "react";
import { graphql } from "gatsby";

import BaseLayout from "../base/base";

import * as styles from "./post.module.css";

const Post = ({ data }: { data: QueryData }) => {
  const { markdownRemark: post } = data;
  return (
    <BaseLayout
      title={post.frontmatter.title}
      meta={[{ name: "keywords", content: post.frontmatter.tags }]}
    >
      <article className={styles.post}>
        <h1 className={styles.title}>{post.frontmatter.title}</h1>
        <small className={styles.date}>{post.frontmatter.date}</small>
        {post.tableOfContents && (
          <div>
            <h2>Table of Contents</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: post.tableOfContents,
              }}
            />
          </div>
        )}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </BaseLayout>
  );
};

export const query = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      tableOfContents(pathToSlugField: "frontmatter.path")
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        path
        title
        tags
      }
    }
  }
`;

interface QueryData {
  markdownRemark: {
    html: string;
    tableOfContents: string;
    frontmatter: {
      date: string;
      path: string;
      title: string;
      tags: string[];
    };
  };
}

export default Post;
