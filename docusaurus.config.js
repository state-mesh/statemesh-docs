import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';


/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'StateMesh',
    tagline: 'StateMesh: Revolutionizing Decentralized Computing',
    url: 'https://docs.statemesh.net',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    favicon: 'img/favicon.ico',
    organizationName: 'statemesh', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.
    trailingSlash: false,
    markdown: {
        mermaid: true,
    },
    themes: [
        '@docusaurus/theme-mermaid',
        [
            "@easyops-cn/docusaurus-search-local",
            /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
            ({
                docsRouteBasePath: "/",
                hashed: true,
                highlightSearchTermsOnTargetPage: true,
                indexBlog: false,
                ignoreFiles: [/release-notes\/.*/],
            }),
        ],
    ],
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
        localeConfigs: {
            en: {
                label: "English",
            }
        },
    },
    themeConfig: {
        colorMode: {
            // "light" | "dark"
            defaultMode: "dark",
            // Use user preference instead of default mode
            respectPrefersColorScheme: true,

            // Hides the switch in the navbar
            // Useful if you want to support a single color mode
            disableSwitch: false,
        },
        navbar: {
            title: "",
            logo: {
                alt: 'logo',
                src: 'img/logo-black.png',
                srcDark: 'img/logo-white.png',
            },
            items: [
                {
                    type: 'search',
                    position: 'right',
                }
            ],
        },
        // algolia: {
        //   appId: 'LLOD7N3LJA',
        //   apiKey: '4637c26b2ca6b8aeaf99a3ee421fb35c',
        //   indexName: 'k3s',
        // },
        footer: {
            style: 'dark',
            links: [],
            copyright: `Copyright © ${new Date().getFullYear()} StateMesh Project Authors. All rights reserved. <br>The Linux Foundation has registered trademarks
      and uses trademarks. For a list of trademarks of The Linux Foundation, 
      please see our <a href="https://www.linuxfoundation.org/trademark-usage"> Trademark Usage</a> page.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    /* other docs plugin options */
                    routeBasePath: '/', // Serve the docs at the site's root
                    sidebarPath: require.resolve('./sidebars.js'),
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex],
                },
                blog: false, // Optional: disable the blog plugin
                // ...
                theme: {
                    customCss: [require.resolve("./src/css/custom.css")],
                },
            },
        ],
    ],
    stylesheets: [
        {
          href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
          type: 'text/css',
          integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
          crossorigin: 'anonymous',
        },
    ],
    plugins: [
    ],
};
