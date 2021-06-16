import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import BaseLayout from "./base";
import * as styles from "./about.module.css";

const AboutLayout = ({ children }: { children: any }) => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "avatar.jpg" }) {
                childImageSharp {
                    gatsbyImageData(width: 200, height: 200, layout: FIXED)
                }
            }
        }
    `);

    return (
        <BaseLayout title="About">
            <section className={styles.about}>
                <div className={styles.text}>
                    <h1>
                        Hello{" "}
                        <span role="img" aria-label="Waving" title="Waving">
                            👋
                        </span>
                    </h1>
                    {children}
                </div>
                <div className={styles.avatar}>
                    <GatsbyImage
                        image={data.file.childImageSharp.gatsbyImageData}
                        alt="Gary Blackwood"
                        title="Gary Blackwood"
                    />
                </div>
            </section>
        </BaseLayout>
    );
};

export default AboutLayout;
