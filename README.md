# digital-literacy
AI時代に必要な基礎教養を学ぶオープンな教育サイト

「作れる時代だからこそ、理解する力を。」をコンセプトに、AI時代に必要な基礎知識と教養を学ぶ日本語の教育サイトです。Astro と Starlight で静的サイトを生成します。

## ローカルで動かす

Node.js 22.23.4 以上と npm が必要です。依存関係は `package-lock.json` に記録しています。

```sh
npm ci
npm run dev
```

ターミナルに表示された URL を開きます。記事の編集は開発サーバーで確認できます。Starlight 標準の検索は、ビルド時に作られる Pagefind インデックスを使うため、次のコマンドで確認します。

```sh
npm run build
npm run preview
```

## 記事を追加する

1. `src/content/docs/` 内の対象カテゴリーに、`my-topic.md` または `my-topic.mdx` を作ります。下の例のように、先頭にフロントマターを書きます。
2. Markdown で本文を書きます。図解やクイズにコンポーネントを使う場合は MDX を選びます。再利用するコンポーネントは `src/components/` に置き、記事からインポートできます。操作にブラウザー側の処理が必要な教材には Astro のクライアントスクリプトやアイランドが使えます。
3. 開発サーバーで本文とサイドバーを確認し、`npm run build` で公開用の生成を確認します。記事はカテゴリーのサイドバーに自動で追加されます。

たとえば `src/content/docs/data/my-topic.md` は `/data/my-topic/` で表示されます。

```markdown
---
title: データとは何か
description: データの意味を身近な例から学びます。
---

ここに本文を書きます。

## 身近なデータ

気温や時刻を記録する場面を考えてみましょう。
```

カテゴリーを追加するには、`src/content/docs/` にディレクトリを作り、`astro.config.mjs` の `sidebar` に項目を追加します。IT以外の分野も同じ手順で追加できます。

```js
{
  label: '論理学',
  items: [{ autogenerate: { directory: 'logic' } }],
}
```

## GitHub Pages 用にビルドする

リポジトリ配下の URL で公開する場合は、ビルド時に `SITE_URL` と `SITE_BASE` を指定します。以下の `OWNER` と `REPO` は公開先に合わせて置き換えます。

```sh
SITE_URL=https://OWNER.github.io SITE_BASE=/REPO npm run build
SITE_URL=https://OWNER.github.io SITE_BASE=/REPO npm run preview
```

ユーザーサイトや独自ドメインのルートで公開する場合は、`SITE_URL` に公開先の URL を指定します。`SITE_BASE` の既定値は `/` です。

公開用の出力先は `dist/` です。`public/.nojekyll` はビルド時に `dist/` にコピーされるので、公開用の成果物にはこのファイルも含めます。記事からサイト内のページにリンクする場合は、公開先のサブパスでも有効な相対 URL を使えます。
