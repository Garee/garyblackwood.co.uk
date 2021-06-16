module.exports = () => ({
    plugins: [
        // To resolve @import rules
        require("postcss-import"),
        // To transpile modern CSS for older browsers
        require("postcss-preset-env")({
            stage: 0,
        }),
        // To use SASS-like syntax
        require("precss"),
    ],
});
