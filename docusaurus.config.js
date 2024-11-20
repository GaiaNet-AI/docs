// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Gaia',
    tagline: 'Decentralizing Generative AI Chatbot and Agent',
    favicon: 'img/icon.png',

    // Set the production url of your site here
    url: 'https://docs.gaianet.ai/',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',


    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'GaiaNet-AI',
    projectName: 'docs',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    plugins: [
        [
            '@docusaurus/plugin-google-analytics',
            {
                trackingID: 'G-V3W2HJ72V0', // 替换为你的 GA 测量 ID
                anonymizeIP: true,          // 可选：是否匿名化 IP
            },
        ], [
            '@docusaurus/plugin-google-tag-manager',
            {
                containerID: 'GTM-PCJ5QG6R', // 替换为你的 GTM 容器 ID
            },
        ]
    ],

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    routeBasePath: '/',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themes: [
        [
            "@easyops-cn/docusaurus-search-local",
            /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
            // @ts-ignore
            {
                docsRouteBasePath: '/',
                hashed: true,
                indexBlog: false,
                indexPages: true,
                language: ["en", "zh"],
                highlightSearchTermsOnTargetPage: true,
                explicitSearchResultPath: true,
                searchBarShortcut: true,
                searchBarShortcutHint: true,
                searchBarPosition: "right",
            },
        ],
    ],

    headTags: [
        {
            tagName: 'link',
            attributes: {
                rel: 'alternate',
                hreflang: 'en',
                href: 'https://docs.gaianet.ai'
            },
        },
        {
            tagName: 'link',
            attributes: {
                rel: 'alternate',
                hreflang: 'ko',
                href: 'https://ko.docs.gaianet.ai'
            },
        },
        {
            tagName: 'link',
            attributes: {
                rel: 'alternate',
                hreflang: 'tr',
                href: 'https://tr.docs.gaianet.ai'
            },
        },
        {
            tagName: 'link',
            attributes: {
                rel: 'alternate',
                hreflang: 'es',
                href: 'https://es.docs.gaianet.ai'
            },
        },
        {
            tagName: 'link',
            attributes: {
                rel: 'alternate',
                hreflang: 'pt',
                href: 'https://pt.docs.gaianet.ai'
            },
        },
        {
            tagName: 'link',
            attributes: {
                rel: 'alternate',
                hreflang: 'vi',
                href: 'https://vi.docs.gaianet.ai'
            },
        },
        {
            tagName: 'script',
            attributes: {
                type: 'text/javascript',
                src: 'https://cdn.weglot.com/weglot.min.js',
            },
        },
        {
            tagName: 'script',
            attributes: {},
            innerHTML: `Weglot.initialize({api_key: 'wg_4b743a7811929fdbb89fb41039c91e231'});`,
        },
    ],


    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/share.png',
            navbar: {
                title: 'Gaia',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/icon-white.png',
                },
                items: [
                    // {
                    //   type: 'docSidebar',
                    //   sidebarId: 'tutorialSidebar',
                    //   position: 'left',
                    //   label: 'Tutorial',
                    // },
                    {
                        href: 'https://github.com/GaiaNet-AI',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tutorial',
                                to: '/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Discord',
                                href: 'https://discord.com/invite/gaianet-ai',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/Gaianet_AI',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [

                            {
                                label: 'GitHub',
                                href: 'https://github.com/GaiaNet-AI',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} GaiaNet. Built with Docusaurus.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
