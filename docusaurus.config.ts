import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'Calimero 2.0',
  tagline:
    "Calimero Network is a framework which enables building fully decentralized applications, ensuring everyone's data privacy.",
  favicon: 'img/favicon.ico',
  url: 'https://calimero-network.github.io',
  baseUrl: '/',
  organizationName: 'calimero-network',
  projectName: 'calimero-2.0',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  headTags: [
    {
      tagName: 'script',
      attributes: {
        'data-collect-dnt': 'true',
        src: 'https://scripts.simpleanalyticscdn.com/latest.js',
        async: 'async',
        defer: 'defer',
      },
    },
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // Serve the docs at the site's root
          breadcrumbs: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.scss',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: ['docusaurus-plugin-sass'],
  themeConfig: {
    colorMode: {
      disableSwitch: false,
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'id-0002',
      content:
        '**🎉 Come check <a href="https://www.calimero.network/">our new website</a> 🎉**',
      backgroundColor: '#247E80',
      textColor: '#fff',
      isCloseable: true,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      style: 'dark',
      logo: {
        alt: 'Calimero Network',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/explore/intro',
          position: 'left',
          label: 'Explore',
        },
        {
          to: '/learn/architecture',
          position: 'left',
          label: 'Learn',
        },
        {
          to: '/build/quickstart',
          position: 'left',
          label: 'Build',
        },
        {
          to: '/contribute/github',
          position: 'left',
          label: 'Contribute',
        },
        {
          to: '/resources/community-and-support',
          position: 'left',
          label: 'Resources',
        },
        {
          to: '/integrations/extendability',
          position: 'left',
          label: 'Integrations',
        },
        {
          to: '/getting-started/setup',
          position: 'right',
          label: 'Getting started',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://github.com/calimero-network/core',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Calimero Limited LLC.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'toml'],
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'W1H5P6IW4T',
      // Public API key: it is safe to commit it
      apiKey: 'f18239c312d6cc30d128a382d330278d',
      indexName: 'calimero-networkio',
      // Optional: see doc section below
      contextualSearch: true,
      searchPagePath: 'search',
      // Optional: Algolia search parameters
      searchParameters: {
        clickAnalytics: true,
        analytics: true,
        enableReRanking: true,
        attributesToRetrieve: [
          'hierarchy.lvl0',
          'hierarchy.lvl1',
          'hierarchy.lvl2',
          'hierarchy.lvl3',
          'hierarchy.lvl4',
          'hierarchy.lvl5',
          'hierarchy.lvl6',
          'type',
          'url',
          'title',
          'description',
          'headers',
          'headersLevels',
        ],
      },
      //... other Algolia params
      insights: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
