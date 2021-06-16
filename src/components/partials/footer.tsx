import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import * as styles from "./footer.module.css";

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
        <footer className={styles.footer}>
            <hr />© {new Date().getFullYear()},{` `}
            {site.siteMetadata.author}
        </footer>
    );
};

export default Footer;
