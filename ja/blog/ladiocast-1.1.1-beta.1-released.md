---
title: Ladiocast 1.1.1-beta.1 リリース
date: 2026-11-04
---

# Ladiocast 1.1.1-beta.1 リリース

![Join the Ladiocast beta - TestFlight - Apple](/images/Join-the-Ladiocast-beta-TestFlight-Apple.png)

Ladiocast 1.1.1-beta.1 をリリースし、App Store TestFlight にて引き続きテストを行っています。
このテストに参加される方は
https://ladiocast-docs.kawauso.com/ja/testing
よりお進みください。

バージョン1.1.1-beta.0から1.1.1-beta.1への変更点は以下のとおりです。

* Icecastストリーマーで、Ogg形式の配信が自動再接続後にリスナーに届かなくなっていたのを修正

Ogg Vorbis や Ogg Opus の配信中にサーバーとの接続が切れると、Ladiocast は再接続してエラーも出さずに接続中のままになりますが、切断して接続し直すまでリスナーに音声が届きませんでした。これは 1.1.1 より前からある問題です。MP3 と AAC に影響はありません。
Ogg 形式で配信される方は、配信中にサーバーを再起動するなどして再接続したあと、リスナーが再生できるかを教えてください。接続が切れたときに再生していたリスナーは、再生し直す必要があるかもしれません。

問題を報告いただく際は、macOS のバージョン、Mac の機種(Intel か Apple silicon)、アプリの表示言語、使用したオーディオデバイス、ストリーマーの種類とサーバーのソフトウェア、エンコード形式、サンプルレートとビットレート、アプリが表示したメッセージを添えてください。クラッシュ、不具合、ご要望の送り方はこちらをご覧ください: https://ladiocast-docs.kawauso.com/ja/feedback

よろしくお願いします。
