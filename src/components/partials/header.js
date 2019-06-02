import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import styles from "./header.module.css";

class NavigationHeader extends React.Component {
  constructor(props) {
    super();
    this.state = {
      title: props.title,
      pages: props.pages,
      showSidebar: false
    };
  }

  onHamburgerClick() {
    this.setState({
      showSidebar: !this.showSidebar
    });
  }

  onOverlayClick() {
    this.setState({
      showSidebar: false
    });
  }

  render() {
    const hamburgerMenu = (
      <div className={styles.hamburger} onClick={() => this.onHamburgerClick()}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
    );

    const links = this.state.pages
      .sort((p, q) =>
        p.node.frontmatter.title.localeCompare(q.node.frontmatter.title)
      )
      .map(({ node: page }) => (
        <Link
          to={page.frontmatter.path}
          key={page.frontmatter.path}
          activeClassName={styles.activeLink}
          onClick={() => this.setState({ showSidebar: false })}
        >
          {page.frontmatter.title}
        </Link>
      ));

    return (
      <header className={styles.header}>
        <div className={styles.container}>
          {hamburgerMenu}
          <h1>
            <Link to="/">{this.state.title}</Link>
          </h1>
          <nav>{links}</nav>

          {this.state.showSidebar && (
            <aside>
              <div
                className={styles.overlay}
                onClick={() => this.onOverlayClick()}
              />
              <div
                className={
                  !this.state.showSidebar ? styles.hidden : styles.sidebar
                }
              >
                <Link to="/" activeClassName={styles.activeLink}>
                  Gary Blackwood
                </Link>
                {links}
              </div>
            </aside>
          )}
        </div>
      </header>
    );
  }
}

const navLinks = [
  {
    node: {
      frontmatter: {
        title: "Photos",
        path: "/photos"
      }
    }
  }
];

export default ({ title }) => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { glob: "**/src/pages/**" } }
        ) {
          edges {
            node {
              frontmatter {
                title
                path
              }
            }
          }
        }
      }
    `
  );

  const pages = navLinks.concat(allMarkdownRemark.edges);

  return <NavigationHeader title={title} pages={pages} />;
};
