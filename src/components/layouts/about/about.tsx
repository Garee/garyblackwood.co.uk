import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import BaseLayout from "../base/base";
import * as styles from "./about.module.css";

const AboutLayout = ({ children }: { children: JSX.Element[] }) => {
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
                    <StaticImage
                        src="../../../images/avatar.jpg"
                        alt="Gary Blackwood"
                        title="Gary Blackwood"
                        layout="fixed"
                        width={200}
                        height={200}
                        className={styles.avatarImg}
                        imgClassName={styles.avatarImg}
                    />
                </div>
            </section>
        </BaseLayout>
    );
};

export default AboutLayout;
