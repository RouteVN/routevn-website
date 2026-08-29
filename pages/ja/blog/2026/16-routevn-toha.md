---
template: post
author: han4wluc
authorDisplay: RouteVN
title: RouteVN とは
url: /ja/blog/routevn-toha/
tags: [blogPost]
date: '2026-08-21'
thumbnail: /public/images/routevn_og.png
seo:
  title: RouteVN とは - 無料・オープンソースのノベルゲーム制作プラットフォーム
  description: RouteVN は、ノベルゲーム（ビジュアルノベル）のための専用プラットフォームです。プログラミング不要で制作できる無料・オープンソースの制作ツール「RouteVN Creator」の特徴と、今後の展望を紹介します。
  ogType: article
  ogImage: https://routevn.com/public/images/routevn_og.png
  ogImageWidth: 1200
  ogImageHeight: 630
  ogImageAlt: RouteVN – The Dedicated Platform for Visual Novels
  ogImageType: image/png
---

こんにちは。RouteVN（ルートヴィエン）チームです。

この記事は RouteVN の最初の日本語記事です。RouteVN が何で、何を目指しているのかを紹介します。

## RouteVN とは

RouteVN は、ノベルゲーム（ビジュアルノベル）のための専用プラットフォームです。

開発は 2024 年に始まり、2025 年 12 月に最初の公開リリースを行いました。現在提供しているプロダクトは、RouteVN Creator（ルートヴィエン・クリエイター）です。プログラミング不要でノベルゲームを制作できる、無料・オープンソースのデスクトップアプリです。

## なぜ RouteVN を作っているのか

ノベルゲーム制作には、優れたツールがすでにあります。ティラノスクリプトや Ren'Py は長い歴史があり、多くの作品を支えてきました。

一方で、ノベルゲームを作りたい人の多くは、物語を書く人、イラストを描く人です。スクリプトの書き方や開発環境の準備が最初の壁になり、せっかくのアイデアが形にならないことがあります。

RouteVN が目指すのは、その壁をなくし、創作だけに集中できる環境を作ることです。

## RouteVN Creator の特徴

RouteVN Creator は、Windows・macOS・Linux で使えるデスクトップアプリです。コードを書かなくても、ノベルゲームを最初から最後まで制作できます。

内部は JavaScript をベースとするモダンな技術で作られています。そのため、制作した作品はブラウザ上でそのまま動かせます。

主な機能は次のとおりです。

- **リアルタイムプレビュー** – シナリオや演出への変更が、すぐプレビューに反映されます。
- **シーンエディタ** – シナリオを書きながら、立ち絵・背景・BGM・効果音を設定できます。
- **シーンマップ** – シーンの流れと分岐を図で確認しながら、物語全体を整理できます。
- **画面レイアウト編集** – タイトル画面や会話画面など、作品に合わせた UI を作れます。
- **素材管理** – 立ち絵、背景、音声などの素材をプロジェクト内で整理できます。
- **選択肢と分岐** – 選択肢を作り、分岐先のシーンへつなげられます。
- **公開** – 完成した作品を Web 向け（HTML と JavaScript）に加え、Windows と macOS のアプリ（ベータ版）としても出力できます。まもなく Android アプリと iOS アプリとしても出力できるようになります。

シナリオは日本語で書けます。プロジェクトの言語設定では、日本語のように文字数で数える言語に対応しています。

ドキュメントは現在英語で公開しています。日本語での情報発信は、このブログから始めていく予定です。

## オープンソースについて

RouteVN のコードはすべて MIT ライセンスで [GitHub](https://github.com/RouteVN) 上に公開しています。MIT ライセンスとは、簡単に言うと「このコードは誰でも無料で、自由に使って・改変して・配布してよい」という意味です。

- [route-engine](https://github.com/RouteVN/route-engine) – JavaScript で書かれた軽量なノベルゲームエンジンです。
- [route-graphics](https://github.com/RouteVN/route-graphics) – PixiJS をベースにしたグラフィックスライブラリです。
- [routevn-creator-client](https://github.com/RouteVN/routevn-creator-client) – RouteVN Creator 本体です。
- [routevn-website](https://github.com/RouteVN/routevn-website) – このウェブサイトのソースコードです。

アプリはオフラインで動作するため、制作内容が外部に送信されることはありません。

## 始め方

1. [ダウンロードページ](/ja/creator/download/)から RouteVN Creator をダウンロードします。
2. アプリを起動して、新しいプロジェクトを作成します。
3. シナリオを書いて、立ち絵・背景・音声を配置します。
4. プレビューで動作を確認します。
5. 完成したら Web 向けに出力して公開します。

はじめての方は、[クイックスタート](/en/creator/docs/quickstart/)（英語）も参照してください。

## 今後の予定

RouteVN は、制作ツールだけでなく、ノベルゲームのためのプラットフォームになることを目指しています。

- 現在の出力対象は Web、Windows、macOS（ベータ版）です。まもなく Android アプリと iOS アプリへの対応を予定しており、その後 Linux にも対応していく予定です。
- 作品を届けるための配信の仕組みや、ノベルゲームを読む体験の改善も構想しています。

## 詳しくは

RouteVN についてもっと知りたい方は、次のリンクをご覧ください。

- [RouteVN Creator をダウンロード](/ja/creator/download/)
- 感想や要望は [Discord](https://discord.gg/8J9dyZSu9C) で受け付けています。
- 最新情報は [X](https://x.com/routevn) で発信しています。

RouteVN をどうぞよろしくお願いします。
