import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'

export default defineConfig({
  output: 'static',
  site: process.env.SITE_URL,
  base: process.env.SITE_BASE ?? '/',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: '基礎から学ぶ',
      description: 'AI時代に必要な基礎知識と教養を学ぶ日本語の教育サイトです。',
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
