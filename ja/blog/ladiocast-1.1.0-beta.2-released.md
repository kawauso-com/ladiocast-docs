---
title: Ladiocast 1.1.0-beta.2 リリース
date: 2026-10-23
---

# Ladiocast 1.1.0-beta.2 リリース

![Join the Ladiocast beta - TestFlight - Apple](/images/Join-the-Ladiocast-beta-TestFlight-Apple.png)

Ladiocast 1.1.0-beta.2 をリリースし、App Store TestFlight にて引き続きテストを行っています。
このテストに参加される方は
https://ladiocast-docs.kawauso.com/ja/testing
よりお進みください。

バージョン1.1.0-beta.1から1.1.0-beta.2への変更点は以下のとおりです。

* Ladiocast自身はシステムオーディオ録音の許可を求めないように変更。Loopbackストリーマーから音声を受け取るアプリのみ許可が必要。それに伴いループバックの入力デバイスが無音である時の警告を削除

Loopback を選んでも、macOS が Ladiocast にシステムオーディオ録音の許可を尋ねることはなくなりました。以前のベータ版で Ladiocast を許可した場合も拒否した場合も音声は届くので、一覧から Ladiocast を削除してもかまいません。
音声を受け取るアプリは、これまでどおり、システム設定 > プライバシーとセキュリティ > 画面収録とシステムオーディオ録音 で許可されている必要があります。一覧にない場合は、「システムオーディオ録音のみ」に + ボタンで追加してください。許可がないと無音で録音されます。Ladiocast からはこれを検知できないので、録音中は受け取るアプリのレベルメーターを確かめてください。このことを、Loopback のウインドウとヘルプ > ReadMe に書きました。

問題を報告いただく際は、macOS のバージョン、Mac の機種(Intel か Apple silicon)、アプリの表示言語、使用したオーディオデバイス、Loopback ストリーマーの音声を受け取ったアプリ、アプリが表示したメッセージを添えてください。クラッシュ、不具合、ご要望の送り方はこちらをご覧ください: https://ladiocast-docs.kawauso.com/ja/feedback

よろしくお願いします。
