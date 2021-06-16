import React from "react";
import { graphql } from "gatsby";

import BaseLayout from "../base/base";

import * as styles from "./page.module.css";

const PageLayout = ({ data }: { data: any }) => {
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
            }
        }
    }
`;

export default PageLayout;
