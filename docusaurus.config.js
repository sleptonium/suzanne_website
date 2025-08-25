// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sleptonium',
  tagline: 'Articles on Tech, AI, Science, Financial Engineering and more',
  //favicon: 'img/favicon.ico',
  favicon: 'img/boff.png',

  // Set the production url of your site here
  url: 'https://sleptonium.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/suzanne_website/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sleptonium', // Usually your GitHub org/user name.
  projectName: 'sleptonium.github.io', // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Mermaid
  markdown: {
    mermaid: true, 
    },
  themes: ['@docusaurus/theme-mermaid'],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/sleptonium/suzanne_website',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/sleptonium/suzanne_website',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Sleptonium',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.jpg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'AI',
            position: 'left',
            label: 'AI',
          },
          {
            type: 'docSidebar',
            sidebarId: 'Tech',
            position: 'left',
            label: 'Tech',
          },
          {
            type: 'docSidebar',
            sidebarId: 'Science',
            position: 'left',
            label: 'Science',
          },
          {
            type: 'docSidebar',
            sidebarId: 'Finance',
            position: 'left',
            label: 'Finance',
          },
          {to: '/blog', label: 'Notes', position: 'right'},
          {
            href: 'mailto:invest@sleptonium.co.uk',
            label: 'Invest',
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
                label: 'Sleptonium',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/sleptonium',
              },
              {
                label: 'X',
                href: 'https://x.com/sleptonium',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Notes',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/sleptonium/suzanne_website',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sleptonium Inc, Stelth mode. `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
