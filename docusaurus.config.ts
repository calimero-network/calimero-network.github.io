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
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
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
          disableVersioning: false,
          lastVersion: '0.7.0',
          versions: {
            current: {
              banner: 'unreleased',
              path: '',
            },
            '0.7.0': {
              label: 'Stable (0.7.0)',
              path: '0.7.0',
              badge: false,
            },
          },
          exclude: ['**/shared/**', '**/_*.{js,jsx,ts,tsx,md,mdx}'],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.scss',
        },
      } as Preset.Options,
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    [
      'docusaurus-plugin-llms',
      {
        // Use custom static/llms.txt for summary, let plugin generate full version
        outputPath: '/llms-auto.txt', // Plugin generates to different path
        generateFullVersion: true,
        // Optional: customize the title (defaults to your site title)
        title: 'Calimero Network',
        // Optional: customize the description (defaults to your site tagline)
        description: "Calimero Network is a framework which enables building fully decentralized applications, ensuring everyone's data privacy.",
        // Optional: customize the sections
        sections: {
          // Optional: customize section names and descriptions
          'Core Concepts': 'Essential concepts and terminology for understanding Calimero Network',
          'Getting Started': 'Setup guides and quick start tutorials',
          'Architecture': 'System architecture and technical details',
          'Developer Tools': 'CLI tools, SDKs, and development utilities',
          'Tutorials': 'Step-by-step guides and examples',
          'Resources': 'Additional documentation and references',
        },
        // Optional: exclude certain paths from being included
        exclude: ['**/shared/**', '**/_*.{js,jsx,ts,tsx,md,mdx}'],
        // Optional: include external links
        externalLinks: [
          {
            title: 'Calimero Network Website',
            url: 'https://www.calimero.network/',
            description: 'Official Calimero Network website'
          },
          {
            title: 'GitHub Repository',
            url: 'https://github.com/calimero-network/core',
            description: 'Main Calimero Network repository'
          }
        ],

      }
    ]
  ],
  themeConfig: {
    colorMode: {
      disableSwitch: false,
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
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
          label: 'Other', // Label for the dropdown
          position: 'right', // Position in the navbar
          items: [
            {
              to: '/core-concepts/terminology',
              label: 'Core Concepts',
            },
            {
              to: '/architecture/system-overview',
              label: 'Architecture',
            },
            {
              to: '/developer-tools/overview',
              label: 'Developer Tools',
            },
            {
              to: '/tutorials/overview',
              label: 'Tutorials',
            },
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
          dropdownActiveClassDisabled: true, // Prevents switching to the current version
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
    mermaid: {
      theme: {
        light: 'neutral',
        dark: 'dark',
      },
    },
  } as Preset.ThemeConfig,
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
