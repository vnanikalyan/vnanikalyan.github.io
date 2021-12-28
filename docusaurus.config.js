// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'vnk learnings',
  tagline: 'Constant Learner',
  url: 'https://vnanikalyan.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://avatars.githubusercontent.com/u/16670359?v=4',
  organizationName: 'vnklearnings', // Usually your GitHub org/user name.
  projectName: 'vnklearnings', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://vnanikalyan.github.io/docs',
        },
        blog: {    
          blogTitle: 'vnk learnings',
          blogDescription: 'This blog is the collection of my thoughts',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All posts',
          showReadingTime: true,          
          editUrl:
            'https://vnanikalyan.github.io/blog',
          feedOptions: {
              type: 'all',
              copyright: `Copyright © ${new Date().getFullYear()} vnklearnings`,
          }
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Vnk Learnings Logo',
          src: 'https://avatars.githubusercontent.com/u/16670359?v=4',
        },
        items: [
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'doc',
            docId: 'NodeJs/oops-in-js',
            position: 'right',
            label: 'NodeJs',
          },  
          {to: '/flutter-firestore', label: 'flutter-firestore', position: 'right'},
          {to: '/reactjs', label: 'React', position: 'right'},          
          {
            type: 'doc',
            docId: 'AWS/aws-saa',
            position: 'right',
            label: 'AWS',
          },
          {to: '/about', label: 'About', position: 'right'},
          {
            href: 'https://github.com/vnanikalyan',
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
                label: 'NodeJs',
                to: '/docs/NodeJs/oops-in-js',
              },
              {
                label: 'AWS',
                to: '/docs/AWS/aws-saa',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/nanikalyan/',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/7585010/nani-kalyan',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/kN9Me3Xp',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/VNaniKalyan',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/vnanikalyan',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} vnklearnings.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme        
      },
    }),

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      fr: {
        label: 'Français',
        direction: 'ltr',
      },
    },
  }
};

module.exports = config;
