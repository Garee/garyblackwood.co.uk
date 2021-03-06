import React from "react";
import { graphql, Link } from "gatsby";

import BaseLayout from "../components/layouts/base/base";

import * as styles from "./blog.module.css";

const BlogPage = ({ data }: { data: QueryData }) => {
  const { edges: posts } = data.allMarkdownRemark;

  const postList = posts.map(({ node: post }: { node: Post }) => (
    <div key={post.id}>
      <h2>
        <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
      </h2>
      <small>{post.frontmatter.date}</small>
      <p className={styles.excerpt}>{post.excerpt}</p>
    </div>
  ));

  return (
    <BaseLayout title="Blog">
      <section className={styles.blog}>{postList}</section>
    </BaseLayout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/src/posts/**" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
          }
        }
      }
    }
  }
`;

interface QueryData {
  allMarkdownRemark: {
    edges: Array<{
      node: Post;
    }>;
  };
}
interface Post {
  id: string;
  excerpt: string;
  frontmatter: {
    title: string;
    date: string;
    path: string;
  };
}

export default BlogPage;
