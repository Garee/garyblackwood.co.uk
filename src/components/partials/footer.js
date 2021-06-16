import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { footer } from "./footer.module.css";

const Footer = () => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        author
                    }
                }
            }
        `
    );

    return (
        <footer className={footer}>
            <hr />© {new Date().getFullYear()},{` `}
            {site.siteMetadata.author}
        </footer>
    );
};

export default Footer;
