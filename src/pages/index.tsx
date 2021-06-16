import React from "react";

import AboutLayout from "../components/layouts/about";

const IndexPage = () => (
    <AboutLayout>
        <p>
            I'm a senior software developer at{" "}
            <a href="https://www.sas.com">SAS Institute</a>, creating software
            that helps others gain insights from their data.
        </p>
        <p>
            I'm also a postgraduate student at{" "}
            <a href="https://www.gla.ac.uk">The University of Glasgow</a>,
            studying part-time to attain a MSc Data Analytics.
        </p>
        <p>
            Previously, I worked at <a href="https://www.doist.com">Doist</a>{" "}
            and <a href="https://www.jpmorganchase.com">J.P. Morgan Chase</a>.
            Before that, I graduated from The University of Glasgow with a BSc
            Software Engineering.
        </p>
        <p>
            I was born and grew up in Glasgow, and so far its been pretty good.
        </p>
        <p>
            I enjoy <a href="/running">distance running</a>,{" "}
            <a href="/projects">programming</a> and video games.
        </p>
        <p>
            You can find me on <a href="https://github.com/Garee">Github</a>.
        </p>
        <p>
            Want to chat? Feel free to{" "}
            <a href="mailto:gary@garyblackwood.co.uk">email</a> me.
        </p>
    </AboutLayout>
);

export default IndexPage;
