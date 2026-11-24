# Digital Literacy

AI時代に人間が備えておくべき基礎知識・教養を学ぶ教育サイト

「作れる時代だからこそ、理解する力を。」をコンセプトに、AI時代に必要な基礎知識と教養を学ぶ日本語の教育サイトです。Astro と Starlight で静的サイトを生成します。

## ローカルで動かす

Node.js 22.23.4 以上と npm が必要です。依存関係は `package-lock.json` に記録しています。

```sh
npm ci
npm run dev
```

ターミナルに表示された `/digital-literacy/` 配下の URL を開きます。記事の編集は開発サーバーで確認できます。Starlight 標準の検索は、ビルド時に作られる Pagefind インデックスを使うため、次のコマンドで確認します。

```sh
npm run build
npm run preview
```

## 記事を追加する

1. `src/content/docs/` 内の対象カテゴリーに、`my-topic.md` または `my-topic.mdx` を作ります。下の例のように、先頭にフロントマターを書きます。
2. Markdown で本文を書きます。図解やクイズにコンポーネントを使う場合は MDX を選びます。再利用するコンポーネントは `src/components/` に置き、記事からインポートできます。操作にブラウザー側の処理が必要な教材には Astro のクライアントスクリプトやアイランドが使えます。
3. 開発サーバーで本文とサイドバーを確認し、`npm run build` で公開用の生成を確認します。記事はカテゴリーのサイドバーに自動で追加されます。

たとえば `src/content/docs/data/my-topic.md` は `/digital-literacy/data/my-topic/` で表示されます。

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

## 記事内のリンクと画像

- 内部リンクには、表示中のページの URL からの相対パスを使います。たとえば、`/digital-literacy/data/my-topic/` からサンプル記事へのリンクは `[コンピュータとは何か](../../computer-basics/what-is-a-computer/)` です。
- 記事と同じディレクトリに置いた画像は、Markdown・MDX で `![画像の説明](./diagram.png)` と指定します。Astro が公開パスを含む画像 URL を生成します。
- `public/` 内の画像を MDX で使う場合は、`<img src={import.meta.env.BASE_URL + 'images/diagram.png'} alt="画像の説明" />` のようにベースパスを付けます。

## GitHub Pages で公開する

`astro.config.mjs` の `site` と `base` に、プロジェクトサイトの公開先 `https://pepe092788-sys.github.io/digital-literacy/` を設定しています。

```sh
npm run build
npm run preview
```

公開用の出力先は `dist/` です。`public/.nojekyll` はビルド時に `dist/` にコピーされるので、公開用の成果物にはこのファイルも含めます。

### 初回公開と更新

1. GitHub リポジトリの **Settings → Pages → Build and deployment** で、**Source** が **GitHub Actions** になっていることを確認します。
2. `main` に変更をプッシュすると、**Deploy to GitHub Pages** が依存関係のインストール、ビルド、成果物のアップロード、デプロイを順に実行します。手動で公開するには、**Actions → Deploy to GitHub Pages → Run workflow** で `main` を選びます。
3. **deploy** ジョブの成功後に、公開 URL を開きます。公開先は [Digital Literacy](https://pepe092788-sys.github.io/digital-literacy/) です。

### エラーを確認する

**Actions → Deploy to GitHub Pages** で対象の実行を開きます。**build** が失敗した場合は、**Install, build, and upload the site** のログで失敗した処理を確認します。ビルドが失敗すると **deploy** は実行されません。**deploy** が失敗した場合は、そのジョブのログと **Settings → Pages** の公開元を確認します。

記事や設定を修正したら `npm ci` と `npm run build` でローカル確認し、`main` に反映します。一時的なエラーの場合は、対象の実行画面から **Re-run jobs** を選べます。
