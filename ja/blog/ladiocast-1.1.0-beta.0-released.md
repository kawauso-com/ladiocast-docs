---
title: Ladiocast 1.1.0-beta.0 リリース
date: 2026-10-21
---

# Ladiocast 1.1.0-beta.0 リリース

![Join the Ladiocast beta - TestFlight - Apple](/images/Join-the-Ladiocast-beta-TestFlight-Apple.png)

Ladiocast 1.1.0-beta.0 をリリースし、そのテストが App Store TestFlight にて始まりました。
このテストに参加される方は
https://ladiocast-docs.kawauso.com/ja/testing
よりお進みください。

バージョン1.0.0から1.1.0-beta.0への変更点は以下のとおりです。

* Loopbackストリーマーを追加。サーバーへは送信せず、「Ladiocast Loopback Streamer」という入力デバイスとして、このMac上の他のアプリへ音声を渡す。Loopbackにできるストリーマーは1つだけ(macOS 14.2以降)
* Loopbackストリーマーに必要な、システムオーディオ録音の使用目的の説明を追加

ストリーマー > ストリーマー 1 > Loopback を選び、OBS Studio や QuickTime Player などの録音アプリや配信アプリで、音声入力に「Ladiocast Loopback Streamer」を選んでください。ドライバはインストールしません。デバイスは、Ladiocast が起動していて、このストリーマーが選択されている間だけ存在します。
Ladiocast と音声を受け取るアプリの両方が、システム設定 > プライバシーとセキュリティ > 画面収録とシステムオーディオ録音 で許可されている必要があります。受け取るアプリが一覧にない場合は、「システムオーディオ録音のみ」に + ボタンで追加してください。許可がないと無音で録音されます。
長時間使ってもノイズや途切れなく音声が届くか、他の種類のストリーマーを選んだり Ladiocast を終了したりするとデバイスが消えるかを教えてください。macOS 13 と macOS 14.0〜14.1 では、メニューに Loopback は表示されません。それ以外がこれまでどおり動作するか確認してください。

問題を報告いただく際は、macOS のバージョン、Mac の機種(Intel か Apple silicon)、アプリの表示言語、使用したオーディオデバイス、Loopback ストリーマーの音声を受け取ったアプリ、アプリが表示したメッセージを添えてください。クラッシュ、不具合、ご要望の送り方はこちらをご覧ください: https://ladiocast-docs.kawauso.com/ja/feedback

よろしくお願いします。
