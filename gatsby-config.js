module.exports = {
    siteMetadata: {
        title: "Gary Blackwood",
        siteUrl: "https://www.garyblackwood.co.uk",
        description: "The personal website of Gary Blackwood.",
        author: "Gary Blackwood",
        githubHandle: "Garee",
    },
    plugins: [
        // To compile Typescript.
        "gatsby-plugin-typescript",
        // To preprocess styles.
        "gatsby-plugin-postcss",
        // To add responsive and high performance images.
        "gatsby-plugin-image",
        // To control the document <head>.
        "gatsby-plugin-react-helmet",
        // To create a sitemap for the web app.
        "gatsby-plugin-sitemap",
        // To enable PWA + offline functionality.
        "gatsby-plugin-offline",
        // To allow other plugins to use Sharp image processing.
        "gatsby-plugin-sharp",
        // To manipulate image data.
        "gatsby-transformer-sharp",
        // To avoid having to reload when linking in markdown.
        "gatsby-plugin-catch-links",
        // To configure a web app manifest.
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Gary Blackwood",
                short_name: "Gary",
                start_url: "/",
                background_color: "#2a9d8f",
                theme_color: "#4285f4",
                display: "standalone",
                icon: "src/images/manifest/android-chrome-512x512.png",
            },
        },
        // To read the files in ./src/images.
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images`,
            },
            __key: "images",
        },
        // To read the files in ./src/posts.
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "posts",
                path: `${__dirname}/src/posts`,
            },
        },
        // To read the files in ./src/pages.
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: `${__dirname}/src/pages`,
            },
            __key: "pages",
        },
        // To use a typography theme.
        {
            resolve: "gatsby-plugin-typography",
            options: {
                pathToConfigModule: "src/styles/typography",
            },
        },
        // To allow for SVG processing and loading.
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /images\/illustrations/,
                },
            },
        },
        // To show an nprogress indicator when a page is loading slowly.
        {
            resolve: "gatsby-plugin-nprogress",
            options: {
                // Setting a color is optional.
                color: "#4285f4",
                // Disable the loading spinner.
                showSpinner: false,
            },
        },
        // To convert Markdown to HTML.
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    // To automatically copy files linked in markdown.
                    "gatsby-remark-copy-linked-files",
                    // To auto generate anchors on heading elements.
                    "gatsby-remark-autolink-headers",
                    // To optimize images included in markdown.
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 960,
                        },
                    },
                    // To syntax highlight <pre> code blocks.
                    "gatsby-remark-prismjs",
                ],
            },
        },
        // To generate an atom.xml for an RSS feed.
        gatsbyPluginFeed(),
    ],
};

function gatsbyPluginFeed() {
    function rssFeedSerialize({ query: { site, allMarkdownRemark } }) {
        return allMarkdownRemark.edges.map((edge) => {
            return Object.assign({}, edge.node.frontmatter, {
                description: edge.node.excerpt,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                custom_elements: [
                    {
                        "content:encoded": edge.node.html,
                    },
                ],
            });
        });
    }

    const rssFeedQuery = `
    {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { glob: "**/src/posts/**" } }
            sort: { order: DESC, fields: [frontmatter___date] },
        ) {
            edges {
                node {
                    excerpt
                    html
                    frontmatter {
                        title
                        date
                        path
                    }
                }
            }
        }
    }
    `;

    return {
        resolve: "gatsby-plugin-feed",
        options: {
            query: `
              {
                site {
                  siteMetadata {
                    title
                    description
                    siteUrl
                    site_url: siteUrl
                  }
                }
              }
            `,
            feeds: [
                {
                    serialize: rssFeedSerialize,
                    query: rssFeedQuery,
                    output: "/rss.xml",
                    title: "Gary Blackwood",
                },
            ],
        },
    };
}
