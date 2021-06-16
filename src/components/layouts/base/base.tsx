import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "../../partials/header/header";
import Footer from "../../partials/footer/footer";
import SEO from "../../partials/seo";

import * as styles from "./base.module.css";

const BaseLayout = ({
    title,
    description,
    meta,
    children,
}: {
    title: string;
    description?: string;
    meta?: any;
    children?: any;
}) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    );

    return (
        <div>
            <SEO title={title} description={description} meta={meta} />
            <Header title={site.siteMetadata.title} />
            <div className={styles.content}>
                <main>{children}</main>
                <Footer />
            </div>
        </div>
    );
};

export default BaseLayout;
