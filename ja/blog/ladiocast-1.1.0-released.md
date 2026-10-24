---
title: Ladiocast 1.1.0 リリース
date: 2026-10-24
---

# Ladiocast 1.1.0 リリース

![Ladiocast Loopback Streamer](/images/ladiocast-1.1.0-released.1.png)

Ladiocast 1.1.0 を [Mac App Store](https://apps.apple.com/app/ladiocast/id411213048) でリリースしました。1.1.0-beta.0、1.1.0-beta.1、1.1.0-beta.2 の TestFlight でのテストにご参加いただいた皆さま、ありがとうございました。

ベータ版のテストは終了しました。アプリ本体は 1.1.0-beta.2 から変更ありません。

バージョン1.0.0から1.1.0への変更点は以下のとおりです。

* Loopbackストリーマーを追加。サーバーへは送信せず、「Ladiocast Loopback」という入力デバイスとして、このMac上の他のアプリへ音声を渡す。(macOS 14.2以降)

ストリーマー > ストリーマー 1 > Loopback を選び、OBS Studio や QuickTime Player などの録音アプリや配信アプリで、音声入力に「Ladiocast Loopback」を選んでください。Loopbackにできるストリーマーは1つだけです。ドライバはインストールしません。デバイスは、Ladiocast が起動していて、このストリーマーが選択されている間だけ存在します。このデバイスはシステム設定 > サウンド > 入力 には表示されないので、受け取るアプリの側で選んでください。
音声を受け取るアプリが、システム設定 > プライバシーとセキュリティ > 画面収録とシステムオーディオ録音 で許可されている必要があります。Ladiocast 自身には許可は不要です。受け取るアプリが一覧にない場合は、「システムオーディオ録音のみ」に + ボタンで追加してください。許可がないと無音で録音されるので、録音中はそのアプリのレベルメーターを確かめてください。詳しくはガイドの[Loopbackストリーマー](/ja/guide/usage#loopbackストリーマー)をご覧ください。

この1.1.0によって予定していた作業は一通り終わり一区切りついたかなと思います。

全体は[変更履歴](/ja/changelog)をご覧ください。

クラッシュ、不具合、ご要望の送り方はこちらをご覧ください: https://ladiocast-docs.kawauso.com/ja/feedback
