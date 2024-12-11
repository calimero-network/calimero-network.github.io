import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'Calimero Network',
  tagline:
    "Calimero Network is a framework which enables building fully decentralized applications, ensuring everyone's data privacy.",
  favicon: 'img/favicon.ico',
  url: 'https://calimero-network.github.io',
  baseUrl: '/',
  organizationName: 'calimero-network',
  projectName: 'calimero-network',
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
          editUrl: ({ versionDocsDirPath, docPath }) =>
            `https://github.com/calimero-network/calimero-network.github.io/edit/master/${versionDocsDirPath}/${docPath}`,
          lastVersion: 'current',
          versions: {
            current: {
              label: '0.2.0',
              path: '',
            },
          },
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.scss',
        },
      } as Preset.Options,
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
      content: `
    **🎉 OPEN REGISTRATIONS FOR HACKATHONS 🎉**
     <a href="https://dorahacks.io/hackathon/calimero-x-icp/hackers">ICP Hackathon</a> with prize pool of 40 000 USD and <a href="https://dorahacks.io/hackathon/calimero-x-starknet/detail">Starknet Hackathon</a> with prize pool of 25 000 USD!`,
      backgroundColor: '#fabc0c',
      textColor: '#000000',
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
          to: '/introduction/what-is-calimero',
          position: 'left',
          label: 'Introduction',
        },
        {
          to: '/getting-started/setup',
          position: 'left',
          label: 'Getting Started',
        },
        {
          to: '/core-concepts/terminology',
          position: 'left',
          label: 'Core Concepts',
        },
        {
          to: '/architecture/system-overview',
          position: 'left',
          label: 'Architecture',
        },
        {
          to: '/developer-tools/overview',
          position: 'left',
          label: 'Developer Tools',
        },
        {
          to: '/tutorials/overview',
          position: 'left',
          label: 'Tutorials',
        },
        {
          label: 'Other', // Label for the dropdown
          position: 'right', // Position in the navbar
          items: [
            {
              to: '/resources/manifesto',
              label: 'Resources',
            },
            {
              to: '/throubleshooting/overview',
              label: 'Throubleshooting',
            },
            {
              to: '/contributing/github',
              label: 'Contributing',
            },
            {
              to: '/support/community-and-support',
              label: 'Support',
            },
          ],
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/calimero-network/core',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.calimero.network/',
          label: 'Website',
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
  } as Preset.ThemeConfig,
};

export default config;
