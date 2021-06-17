import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

import Moon from "../../../images/theme/moon.inline.svg";
import Sun from "../../../images/theme/sun.inline.svg";

import * as styles from "./footer.module.css";
import { useEffect } from "react";

const ThemeToggle = () => {
    function prefersDarkTheme() {
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

    const [hasMounted, setHasMounted] = useState(false);
    const [dark, setDark] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null;
    }

    if (prefersDarkTheme() && !dark) {
        setDark(true);
        document.body.classList.add("dark");
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
