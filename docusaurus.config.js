import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';


/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'StateMesh',
    tagline: 'Revolutionizing Decentralized Computing',
    url: 'https://docs.statemesh.net',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    favicon: 'img/favicon.ico',
    organizationName: 'state-mesh', // Usually your GitHub org/user name.
    projectName: 'statemesh-docs', // Usually your repo name.
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
            title: "Documentation",
            logo: {
                alt: 'logo',
                src: 'img/logo-black.png',
                srcDark: 'img/logo-white.png',
            },
            items: [
                {
                    href: "https://explorer-test.statemesh.net",
                    position: "left",
                    label: "Currently running in Testnet mode",
                },
                {
                    href: "https://x.com/statemeshnet",
                    position: "right",
                    label: "Join us on X",
                },
                {
                    href: "https://t.me/statemesh",
                    position: "right",
                    label: "Join us on Telegram",
                },
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
            copyright: `Copyright © ${new Date().getFullYear()} StateMesh Project Authors. All rights reserved.`,
        },
        metadata: [
            {name: "title", content: "StateMesh Documentation"},
            {
                name: "description",
                content: "Browse tutorials and guides, learn how StateMesh works and get started quickly with your first project."
            },
            {prefix: "og: http://ogp.me/ns#"},
            {property: "og:type", content: "website"},
            {property: "og:url", content: "https://docs.statemesh.net/"},
            {property: "og:title", content: "StateMesh Documentation"},
            {
                property: "og:description",
                content: "Learn how StateMesh works, deploy your first app or register your node."
            },
            {property: "og:image", content: "https://docs.statemesh.net/img/social-card.jpg"},
            {property: "twitter:card", content: "summary_large_image"},
            {property: "twitter:url", content: "https://docs.statemesh.net/"},
            {property: "twitter:title", content: "StateMesh Documentation"},
            {
                property: "twitter:description",
                content: "Learn how StateMesh works, deploy your first app or register your node."
            },
            {property: "twitter:image", content: "https://docs.statemesh.net/img/social-card.jpg"},
        ]
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
                theme: {
                    customCss: [require.resolve("./src/css/custom.css")],
                },
                sitemap: {
                    lastmod: 'date',
                    changefreq: 'weekly',
                }
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
        require.resolve("docusaurus-lunr-search"),
    ],
};
