module.exports = {
    base: '/webNote/',
    dest: 'dist',
    title: 'note',
    description: 'Just playing around',
    head: [
      ['link', { rel: 'icon', href: `/logo.png` }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
      ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
      ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
      ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    serviceWorker: false,
    themeConfig: {
      repo: 'raincychen/webNote',
      editLinks: true,
      docsDir: 'docs',
      editLinkText: '在 GitHub 上编辑此页',
      lastUpdated: '上次更新',
      nav: [
        {
          text: 'html',
          link: '/html/base/'
        },
        {
          text: 'css',
          link: '/css/base/'
        },
        {
          text: '百度',
          link: 'https://www.baidu.com'
        }
      ],
      sidebar: {
        '/html/': [
          {
            title: 'html基础篇',
            collapsable: false,
            children: [
              ['base/', 'Introduction'],
              'base/form'
            ]
          }
        ],
        '/css/': [
          {
            title: 'CSS',
            collapsable: false,
            children: [
              ['base/', 'Introduction'],
              'base/position'
            ]
          }
        ]
      }
    }
  }