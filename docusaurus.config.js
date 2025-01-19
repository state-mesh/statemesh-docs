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
        //   indexName: 'statemesh',
        // },
        footer: {
            style: 'dark',
            links: [],
            copyright: `Copyright © ${new Date().getFullYear()} StateMesh Project Authors. All rights reserved.`,
        }
    },
    headTags: [
        {
            tagName: 'meta',
            attributes: { name: 'keywords', content: 'cloud, decentralized, containers, dapps, web3' }
        },
        {
            tagName: 'meta',
            attributes: { name: 'description', content: 'Browse tutorials and guides, learn how StateMesh works and get started quickly with your first project.' }
        },
        {
            tagName: 'meta',
            attributes: { name: 'og:type', content: 'website' }
        },
        {
            tagName: 'meta',
            attributes: { name: 'og:url', content: 'https://docs.statemesh.net' }
        },
        {
            tagName: 'meta',
            attributes: { name: 'og:title', content: 'StateMesh Documentation' }
        },
        {
            tagName: 'meta',
            attributes: { name: 'og:description', content: 'Learn how StateMesh works, deploy your first app or register your node.' }
        },
        {
            tagName: 'meta',
            attributes: { name: 'og:image', content: 'https://docs.statemesh.net/img/social-card.jpg' }
        },
        {
            tagName: 'meta',
            attributes: { name: 'twitter:card', content: 'summary_large_image' }
        },
        {
            tagName: 'meta',
            attributes: { name: 'twitter:url', content: 'https://docs.statemesh.net' }
        },
        {
            tagName: 'meta',
            attributes: { name: 'twitter:title', content: 'StateMesh Documentation' }
        },
        {
            tagName: 'meta',
            attributes: { name: 'twitter:description', content: 'Learn how StateMesh works, deploy your first app or register your node.' }
        },
        {
            tagName: 'meta',
            attributes: { name: 'twitter:image', content: 'https://docs.statemesh.net/img/social-card.jpg' }
        },
    ],
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
    ],
};
