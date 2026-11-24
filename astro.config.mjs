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
      sidebar: [
        {
          label: 'コンピュータの基礎',
          items: [{ autogenerate: { directory: 'computer-basics' } }],
        },
        { label: 'ソフトウェア', items: [{ autogenerate: { directory: 'software' } }] },
        { label: 'プログラミング', items: [{ autogenerate: { directory: 'programming' } }] },
        { label: 'アルゴリズム', items: [{ autogenerate: { directory: 'algorithms' } }] },
        { label: 'データ', items: [{ autogenerate: { directory: 'data' } }] },
        { label: 'ネットワーク', items: [{ autogenerate: { directory: 'networks' } }] },
        { label: 'インフラ', items: [{ autogenerate: { directory: 'infrastructure' } }] },
        { label: 'セキュリティ', items: [{ autogenerate: { directory: 'security' } }] },
        { label: 'システム開発', items: [{ autogenerate: { directory: 'systems-development' } }] },
        { label: 'AI', items: [{ autogenerate: { directory: 'ai' } }] },
        {
          label: 'コンピュータの歴史',
          items: [{ autogenerate: { directory: 'computer-history' } }],
        },
      ],
    }),
  ],
})
