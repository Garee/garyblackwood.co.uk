import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

import Moon from "../../../images/theme/moon.inline.svg";
import Sun from "../../../images/theme/sun.inline.svg";

import * as styles from "./footer.module.css";

const ThemeToggle = () => {
    const [dark, setDark] = useState(prefersDarkTheme());

    if (dark) {
        document.body.classList.add("dark");
    }

    function prefersDarkTheme() {
        if (typeof window === "undefined") {
            return false;
        }

        const preference = window.localStorage.getItem("darkTheme");
        if (preference !== null) {
            return preference === "true";
        }

        return (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark").matches
        );
    }

    function toggleTheme() {
        if (dark) {
            document.body.classList.remove("dark");
        } else {
            document.body.classList.add("dark");
        }

        setDark(!dark);
        window.localStorage.setItem("darkTheme", `${!dark}`);
    }

    return (
        <img
            src={dark ? Sun : Moon}
            alt="Toggle theme"
            width="16"
            height="16"
            className={styles.toggleTheme}
            onClick={toggleTheme}
        />
    );
};

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
            <ThemeToggle />
        </footer>
    );
};

export default Footer;
