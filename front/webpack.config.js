module.exports = {
    entry: {
        index: "./scripts/index.js",
        createMovie: "./scripts/form.js"
    },

    output: {
        path: __dirname + "/public",
        filename: "[name].bundle.js",
    },
    mode: "development",
    watch: true
};
