const { remarkCodeHike } = require("@code-hike/mdx");

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  mdxOptions: {
    remarkPlugins: [
      [remarkCodeHike, { theme: "one-dark-pro", showCopyButton: true }],
    ],
  },
});

module.exports = withNextra({
  basePath: "/docs",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/installation",
        permanent: true,
      },
    ];
  },
});
