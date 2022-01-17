// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  baseUrl: '/',
  title: 'vnk learnings',
  tagline: 'Constant Learner',
  url: 'https://vnanikalyan.github.io',  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://avatars.githubusercontent.com/u/16670359?v=4',
  organizationName: 'vnklearnings', // Usually your GitHub org/user name.
  projectName: 'vnklearnings', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  
  themeConfig: {
    navbar: {
      title: 'Home',
      logo: {
        alt: 'Vnk Learnings Logo',
        src: 'https://avatars.githubusercontent.com/u/16670359?v=4',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Blog',
          items: [            
            { 
              label: 'General',
              to: 'general-blog'
             },
             { 
              label: 'Theology',
              to: '/'
             }
          ],
          position: 'left'
        },        
        {
          type: 'doc',
          docId: 'NodeJs/oops-in-js',
          position: 'right',
          label: 'NodeJs',
        },  
        {
          type: 'doc',
          docId: 'AWS/aws-saa',
          position: 'right',
          label: 'AWS',
        },
        {to: '/flutter-firestore', label: 'flutter-firestore', position: 'right'},
        {to: '/reactjs', label: 'React', position: 'right'},          
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
              to: '/general-blog',
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
  },
  
  plugins: [
    [
      '@docusaurus/theme-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {        
        path: 'docs',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://vnanikalyan.github.io/docs',
      }
    ],
    [
      '@docusaurus/plugin-content-pages',
      {
        path: 'src/pages',
      }
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        path: 'general-blog',
        routeBasePath: 'general-blog',
        blogTitle: 'General Philosophy',
        blogDescription: 'This blog is the collection of General Philosophy',
        blogSidebarCount: 'ALL',
        blogSidebarTitle: 'All Posts',
        showReadingTime: true,
        postsPerPage: 2,
        editUrl: 'https://vnanikalyan.github.io/general-blog',
        feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} vnklearnings`,
        }
      },
    /*],
    [
      '@docusaurus/plugin-content-blog',
      {
        path: 'theology-blog',
        routeBasePath: 'theology-blog',
        blogTitle: 'Science of God',
        blogDescription: 'This blog is the collection of my thoughts on God',
        blogSidebarCount: 'ALL',
        blogSidebarTitle: 'All Posts',
        showReadingTime: true,
        postsPerPage: 2,
        editUrl: 'https://vnanikalyan.github.io/theology-blog',
        feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} vnklearnings`,
        }
      }*/
    ]
  ]
};

module.exports = config;
