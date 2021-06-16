import React from "react";
import { graphql } from "gatsby";

import BaseLayout from "./base";

import { page as pageStyle } from "./page.module.css";

const PageLayout = ({ data }) => {
    const { markdownRemark: page } = data;
    return (
        <BaseLayout
            title={page.frontmatter.title}
            description={page.frontmatter.description}
        >
            <section
                className={pageStyle}
                dangerouslySetInnerHTML={{ __html: page.html }}
            />
        </BaseLayout>
    );
};

export const query = graphql`
    query ($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                title
            }
        }
    }
`;

export default PageLayout;
