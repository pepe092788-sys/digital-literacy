import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'

export default defineConfig({
  output: 'static',
  site: 'https://pepe092788-sys.github.io',
  base: '/digital-literacy',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'Digital Literacy',
      description: 'AI時代に人間が備えておくべき基礎知識・教養を学ぶ教育サイト',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/pepe092788-sys/digital-literacy',
        },
      ],
      defaultLocale: 'root',
      locales: {
        root: { label: '日本語', lang: 'ja' },
      },
      components: { PageTitle: './src/components/PageTitle.astro' },
      routeMiddleware: './src/sidebar-subtitles.ts',
      customCss: ['./src/styles/sidebar.css'],
      pagination: false,
      sidebar: [
        {
          label: '第1層：入門',
          collapsed: true,
          items: [
            { label: '概要', slug: 'level-1' },
            { label: 'コンピュータの基礎', collapsed: true, items: [{ autogenerate: { directory: 'level-1/computer-basics', collapsed: true } }] },
            { label: 'ソフトウェア', collapsed: true, items: [{ autogenerate: { directory: 'level-1/software', collapsed: true } }] },
            { label: 'プログラミング', collapsed: true, items: [{ autogenerate: { directory: 'level-1/programming', collapsed: true } }] },
            { label: 'アルゴリズム', collapsed: true, items: [{ autogenerate: { directory: 'level-1/algorithms', collapsed: true } }] },
            { label: 'データ', collapsed: true, items: [{ autogenerate: { directory: 'level-1/data', collapsed: true } }] },
            { label: 'ネットワーク', collapsed: true, items: [{ autogenerate: { directory: 'level-1/network', collapsed: true } }] },
            { label: 'インフラ', collapsed: true, items: [{ autogenerate: { directory: 'level-1/infrastructure', collapsed: true } }] },
            { label: 'コンピュータの歴史', collapsed: true, items: [{ autogenerate: { directory: 'level-1/history', collapsed: true } }] },
            { label: 'セキュリティ', collapsed: true, items: [{ autogenerate: { directory: 'level-1/security', collapsed: true } }] },
          ],
        },
        {
          label: '第2層：応用',
          collapsed: true,
          items: [
            { label: '概要', slug: 'level-2' },
            { label: 'システム開発', collapsed: true, items: [{ autogenerate: { directory: 'level-2/development', collapsed: true } }] },
            { label: '生成AI', collapsed: true, items: [{ autogenerate: { directory: 'level-2/ai', collapsed: true } }] },
          ],
        },
        {
          label: '第3層：専門',
          collapsed: true,
          items: [{ autogenerate: { directory: 'level-3', collapsed: true } }],
        },
      ],
    }),
  ],
})
