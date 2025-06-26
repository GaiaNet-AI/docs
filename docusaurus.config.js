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
        trackingID: 'G-V3W2HJ72V0'
      },
    ],
    [
      '@docusaurus/plugin-google-tag-manager',
      {
        containerId: 'GTM-PCJ5QG6R'
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          { from: '/user-guide/nodes', to: '/nodes' },
          { from: '/user-guide/mynode', to: '/getting-started' },
          { from: '/category/agent-framework-and-apps', to: '/agent-integrations' },
          { from: '/user-guide/apps/intro', to: '/agent-integrations/intro' },
          { from: '/user-guide/apps/dify', to: '/agent-integrations/dify' },
          { from: '/user-guide/apps/openwebui', to: '/agent-integrations/openwebui' },
          { from: '/user-guide/apps/anything_llm', to: '/agent-integrations/anything_llm' },
          { from: '/user-guide/apps/cursor', to: '/agent-integrations/cursor' },
          { from: '/user-guide/apps/stockbot', to: '/agent-integrations/stockbot' },
          { from: '/user-guide/apps/flowiseai', to: '/agent-integrations/flowiseai' },
          { from: '/user-guide/apps/flowiseai-tool-call', to: '/agent-integrations/flowiseai-tool-call' },
          { from: '/user-guide/apps/lobechat', to: '/agent-integrations/lobechat' },
          { from: '/user-guide/apps/llamaparse', to: '/agent-integrations/llamaparse' },
          { from: '/user-guide/apps/zed', to: '/agent-integrations/zed' },
          { from: '/user-guide/apps/obsidian', to: '/agent-integrations/obsidian' },
          { from: '/user-guide/apps/codegpt', to: '/agent-integrations/codegpt' },
          { from: '/user-guide/apps/continue', to: '/agent-integrations/continue' },
          { from: '/user-guide/apps/llamacoder', to: '/agent-integrations/llamacoder' },
          { from: '/user-guide/apps/agent-zero', to: '/agent-integrations/agent-zero' },
          { from: '/user-guide/apps/translation-agent', to: '/agent-integrations/translation-agent' },
          { from: '/user-guide/apps/gpt-planner', to: '/agent-integrations/gpt-planner' },
          { from: '/user-guide/apps/llamaedge-book', to: '/agent-integrations/llamaedgebook' },
          { from: '/user-guide/apps/llamatutor', to: '/agent-integrations/llamatutor' },
          { from: '/user-guide/api-reference', to: '/getting-started/api-reference' },
          { from: '/category/node-operator-guide', to: '/getting-started' },
          { from: '/node-guide/quick-start', to: '/getting-started/quick-start' },
          { from: '/node-guide/install_uninstall', to: '/getting-started/install' },
          { from: '/node-guide/system-requirements', to: '/getting-started/system-requirements' },
          { from: '/getting-started/quick-start/system-requirements', to: '/getting-started/system-requirements' },
          { from: '/getting-started/system-requirements/advanced-deployment-options/cuda', to: '/getting-started/advanced-deployment-options/cuda' },
          { from: '/node-guide/customize', to: '/getting-started/customize' },
          { from: '/node-guide/register', to: '/getting-started/register' },
          { from: '/node-guide/cli-options', to: '/getting-started/cli-options' },
          { from: '/node-guide/troubleshooting', to: '/getting-started/troubleshooting' },
          { from: '/category/how-do-i-', to: '/category/advanced-deployment-options' },
          { from: '/node-guide/tasks/docker', to: '/getting-started/advanced-deployment-options/docker' },
          { from: '/node-guide/tasks/aws', to: '/getting-started/advanced-deployment-options/aws' },
          { from: '/node-guide/tasks/cuda', to: '/getting-started/advanced-deployment-options/cuda' },
          { from: '/node-guide/tasks/multiple', to: '/getting-started/advanced-deployment-options/multiple' },
          { from: '/node-guide/tasks/local', to: '/getting-started/advanced-deployment-options/local' },
          { from: '/node-guide/tasks/protect', to: '/getting-started/advanced-deployment-options/protect' },
          { from: '/category/creator-guide', to: '/knowledge-bases/intro' },
          { from: '/category/gaianet-node-with-finetuned-llms', to: '/tutorial/llamacpp' },
          { from: '/creator-guide/finetune/intro', to: '/tutorial/llamacpp' },
          { from: '/creator-guide/finetune/llamacpp', to: '/tutorial/llamacpp' },
          { from: '/category/knowledge-bases', to: '/knowledge-bases/intro' },
          { from: '/creator-guide/knowledge/concepts', to: '/tutorial/concepts' },
          { from: '/creator-guide/knowledge/markdown', to: '/knowledge-bases/how-to/markdown' },
          { from: '/creator-guide/knowledge/text', to: '/knowledge-bases/how-to/text' },
          { from: '/creator-guide/knowledge/csv', to: '/knowledge-bases/how-to/csv' },
          { from: '/creator-guide/knowledge/pdf', to: '/knowledge-bases/how-to/pdf' },
          { from: '/creator-guide/knowledge/firecrawl', to: '/knowledge-bases/how-to/firecrawl' },
          { from: '/creator-guide/knowledge/web-tool', to: '/knowledge-bases/how-to/web-tool' },
          { from: '/getting-started/quick-start/customize', to: '/getting-started/customize' },
          { from: '/getting-started/quick-start/advanced-deployment-options/protect', to: '/getting-started/advanced-deployment-options/protect' }
        ],
      },
    ],
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
            'https://github.com/GaiaNet-AI/docs/edit/main',
          lastVersion: 'current',
          versions: {
            current: {
              label: '2.0.0', 
              path: '',
              badge: true,
            },
            '1.0.0': {
              label: '1.0.0',
              path: '1.0.0',
              banner: 'none',
            },
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes : [
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
        src: 'https://scripts.simpleanalyticscdn.com/latest.js',
        async: 'true',
        'data-collect-dnt': 'true',
      },
    },
    {
      tagName: 'noscript',
      attributes: {}, // Required even if empty
      innerHTML:
        '<img src="https://queue.simpleanalyticscdn.com/noscript.gif?collect-dnt=true" alt="" referrerpolicy="no-referrer-when-downgrade"/>',
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
          alt: 'Decentralizing Generative AI Chatbots and Agents',
          src: 'img/icon-white.png',
          srcDark: 'img/icon-dark.png',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
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
            title: 'Important Links',
            items: [
              {
                label: 'For Developers & Builders',
                to: '/getting-started',
              },
              {
                label: 'For Domain Operators',
                to: '/domain-operator-guide',
              },   
              {
                label: 'For Knowledge Creators',
                to: '/knowledge-bases',
              },  
              {
                label: 'Gaia\'s Public Nodes',
                to: '/nodes',
              },  
            ],
          },
          {
            title: 'Join Our Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/gaianet-ai',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Gaianet_AI',
              },
              {
                label: 'Gaia Builders',
                href: 'https://t.me/+a0bJInD5lsYxNDJl',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/GaiaNet-AI',
              },
            ],
          },
          {
            title: 'Tutorials',
            items: [
              {
                label: 'Gaia with Eliza',
                to: '/tutorial/eliza',
              },
              {
                label: 'Gaia + Coinbase AgentKit',
                to: '/tutorial/coinbase',
              },
              {
                label: 'Calling External Tools',
                to: '/tutorial/tool-call',
              },
              {
                label: 'Build a Translator Agent',
                to: '/tutorial/translator-agent',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Gaia. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
