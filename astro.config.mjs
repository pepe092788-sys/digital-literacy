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
          label: '第1層：入門',
          items: [
            { label: '概要', slug: 'level-1' },
            { label: 'セキュリティ', items: [{ autogenerate: { directory: 'level-1/security' } }] },
          ],
        },
        {
          label: '第2層：応用',
          items: [
            { label: '概要', slug: 'level-2' },
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
