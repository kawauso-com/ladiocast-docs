---
title: Ladiocast 1.1.0-beta.1 リリース
date: 2026-10-22
---

# Ladiocast 1.1.0-beta.1 リリース

![Join the LadioCast beta - TestFlight - Apple](/images/Join-the-LadioCast-beta-TestFlight-Apple.png)

Ladiocast 1.1.0-beta.1 をリリースし、App Store TestFlight にて引き続きテストを行っています。
このテストに参加される方は
https://ladiocast-docs.kawauso.com/ja/testing
よりお進みください。

バージョン1.1.0-beta.0から1.1.0-beta.1への変更点は以下のとおりです。

* Loopbackストリーマーの入力デバイス名を「Ladiocast Loopback」に変更

beta.0 では、デバイス名は「Ladiocast Loopback Streamer」でした。OBS Studio や QuickTime Player などの録音アプリや配信アプリで、音声入力に「Ladiocast Loopback」を選んでください。beta.0 でこのデバイスをアプリで選んでいた場合は、選び直さなくても、新しい名前のままそのアプリがデバイスを使い続けるか確認してください。
このデバイスはシステム設定の「サウンド」>「入力」には表示されないので、音声を受け取るアプリの側で選んでください。このことを、Loopback のウインドウとヘルプ > ReadMe に書き加えました。
Ladiocast と音声を受け取るアプリの両方が、システム設定 > プライバシーとセキュリティ > 画面収録とシステムオーディオ録音 で許可されている必要があります。受け取るアプリが一覧にない場合は、「システムオーディオ録音のみ」に + ボタンで追加してください。許可がないと無音で録音されます。

問題を報告いただく際は、macOS のバージョン、Mac の機種(Intel か Apple silicon)、アプリの表示言語、使用したオーディオデバイス、Loopback ストリーマーの音声を受け取ったアプリ、アプリが表示したメッセージを添えてください。クラッシュ、不具合、ご要望の送り方はこちらをご覧ください: https://ladiocast-docs.kawauso.com/ja/feedback

よろしくお願いします。
