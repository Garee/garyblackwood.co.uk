import React from "react";
import { graphql } from "gatsby";

import BaseLayout from "../base/base";

import * as styles from "./page.module.css";

const PageLayout = ({ data }: { data: QueryData }) => {
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
    query ($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                title
                description
            }
        }
    }
`;

interface QueryData {
    markdownRemark: {
        html: string;
        frontmatter: {
            title: string;
            description: string;
        };
    };
}

export default PageLayout;
