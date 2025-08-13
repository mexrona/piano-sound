module.exports = {
    transformIgnorePatterns: [
        "/node_modules/(?!(some-es-module|another-package-with-special-syntax)/)",
    ],
};
