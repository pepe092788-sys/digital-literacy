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
          items: [
            { label: '概要', slug: 'level-1' },
            { label: 'コンピュータの基礎', items: [{ autogenerate: { directory: 'level-1/computer-basics' } }] },
            { label: 'ソフトウェア', items: [{ autogenerate: { directory: 'level-1/software' } }] },
            { label: 'プログラミング', items: [{ autogenerate: { directory: 'level-1/programming' } }] },
            { label: 'アルゴリズム', items: [{ autogenerate: { directory: 'level-1/algorithms' } }] },
            { label: 'データ', items: [{ autogenerate: { directory: 'level-1/data' } }] },
            { label: 'ネットワーク', items: [{ autogenerate: { directory: 'level-1/network' } }] },
            { label: 'インフラ', items: [{ autogenerate: { directory: 'level-1/infrastructure' } }] },
            { label: 'コンピュータの歴史', items: [{ autogenerate: { directory: 'level-1/history' } }] },
            { label: 'セキュリティ', items: [{ autogenerate: { directory: 'level-1/security' } }] },
          ],
        },
        {
          label: '第2層：応用',
          items: [
            { label: '概要', slug: 'level-2' },
            { label: 'システム開発', items: [{ autogenerate: { directory: 'level-2/development' } }] },
            { label: '生成AI', items: [{ autogenerate: { directory: 'level-2/ai' } }] },
          ],
        },
        {
          label: '第3層：専門',
          items: [{ autogenerate: { directory: 'level-3' } }],
        },
      ],
    }),
  ],
})
