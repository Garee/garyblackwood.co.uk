const path = require("path");

const templates = {
    page: path.resolve("src/components/layouts/page.js"),
    post: path.resolve("src/components/layouts/post.js"),
    projects: path.resolve("src/components/layouts/projects.js"),
    comingSoon: path.resolve("src/components/layouts/coming-soon.js"),
};

const allMarkdownFilesQuery = `
  {
    allMarkdownRemark {
      edges {
        node {
          fileAbsolutePath
          frontmatter {
            path
            layout
          }
        }
      }
    }
  }
`;

const getTemplateForMDFile = (file) => {
    let template = templates.page;
    if (file.frontmatter.layout && templates[file.frontmatter.layout]) {
        template = templates[file.frontmatter.layout];
    } else if (RegExp("src/posts").test(file.fileAbsolutePath)) {
        template = templates.post;
    }

    return template;
};

exports.createPages = ({ actions, graphql }) => {
    return graphql(allMarkdownFilesQuery).then((result) => {
        if (result.errors) {
            throw result.errors;
        }

        result.data.allMarkdownRemark.edges.forEach(({ node: file }) => {
            actions.createPage({
                path: file.frontmatter.path,
                component: getTemplateForMDFile(file),
                context: {}, // For any additional data.
            });
        });
    });
};
