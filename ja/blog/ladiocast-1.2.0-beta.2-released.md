---
title: Ladiocast 1.2.0-beta.2 リリース
date: 2026-11-15
---

# Ladiocast 1.2.0-beta.2 リリース

![Join the Ladiocast beta - TestFlight - Apple](/images/Join-the-Ladiocast-beta-TestFlight-Apple.png)

Ladiocast 1.2.0-beta.2 をリリースし、App Store TestFlight にて引き続きテストを行っています。
このテストに参加される方は
https://ladiocast-docs.kawauso.com/ja/testing
よりお進みください。

バージョン1.2.0-beta.1から1.2.0-beta.2への変更点は以下のとおりです。

* Ogg Vorbisで、ストリーマーを切断するときに最後の音声とストリーム終了のページを送るように変更。Ogg OpusとOgg PCMで、設定していない放送名、ジャンル、説明、ウェブURLを「(null)」として送っていたのを修正

Ogg 形式で Icecast に配信される方は、プレーヤーや録音でストリームとそのタグが正しく表示されるか、切断したときにストリームがきれいに終わるかを教えてください。
[1.2.0-beta.1](/ja/blog/ladiocast-1.2.0-beta.1-released) の変更点(AppleScript、アラート、設定ファイル、Wi-Fi 経由の Icecast と Shoutcast、TLS(SSL)での Icecast、RTMP ストリーマーの静止画)も引き続き試していただけると助かります。

問題を報告いただく際は、macOS のバージョン、Mac の機種(Intel か Apple silicon)、アプリの表示言語、使用したオーディオデバイス、ストリーマーの種類とサーバーのソフトウェア、エンコード形式、サンプルレートとビットレート、実行したスクリプト(あれば)、アプリが表示したメッセージを添えてください。クラッシュ、不具合、ご要望の送り方はこちらをご覧ください: https://ladiocast-docs.kawauso.com/ja/feedback

よろしくお願いします。
