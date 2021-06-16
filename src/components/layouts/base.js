import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "../partials/header";
import Footer from "../partials/footer";
import SEO from "../partials/seo";

import { content } from "./base.module.css";

const BaseLayout = ({ title, description, meta, children }) => {
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
            <div className={content}>
                <main>{children}</main>
                <Footer />
            </div>
        </div>
    );
};

export default BaseLayout;
