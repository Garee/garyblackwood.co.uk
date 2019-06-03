module.exports = {
  siteMetadata: {
    siteUrl: "https://www.garyblackwood.co.uk",
    title: "Gary Blackwood",
    description: "The personal website of Gary Blackwood.",
    author: "Gary Blackwood",
    twitterHandle: "@gblackwd",
    githubHandle: "Garee"
  },
  plugins: [
    // To use a typography theme.
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/styles/typography"
      }
    },
    // To preprocess styles.
    "gatsby-plugin-postcss",
    // To control the document <head>.
    "gatsby-plugin-react-helmet",
    // To read the files in ./src/images.
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    // To read the files in ./src/posts.
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`
      }
    },
    // To read the files in ./src/pages.
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`
      }
    },
    // To read the files in ./src/notes.
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "notes",
        path: `${__dirname}/src/notes`
      }
    },
    // To allow other plugins to use Sharp image processing.
    "gatsby-plugin-sharp",
    // To manipulate image data.
    "gatsby-transformer-sharp",
    // To convert markdown to HTML.
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images\/illustrations/
        }
      }
    },
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
              maxWidth: 960
            }
          },
          // To syntax highlight <pre> code blocks.
          "gatsby-remark-prismjs"
        ]
      }
    },
    // To avoid having to reload when linking in markdown.
    "gatsby-plugin-catch-links",
    // To configure a web app manifest.
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gary Blackwood",
        short_name: "Gary",
        start_url: "/",
        background_color: "#4285f4",
        theme_color: "#4285f4",
        display: "standalone",
        icon: "src/images/manifest/android-chrome-512x512.png"
      }
    },
    // To enable PWA + offline functionality.
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        // Setting a color is optional.
        color: "#4285f4",
        // Disable the loading spinner.
        showSpinner: false
      }
    },
    // To generate an atom.xml for an RSS feed.
    {
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
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  custom_elements: [{ "content:encoded": edge.node.html }]
                });
              });
            },
            query: `
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
              `,
            output: "/rss.xml",
            title: "Gary Blackwood"
          }
        ]
      }
    }
  ]
};
