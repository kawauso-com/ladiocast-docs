---
title: Ladiocast 1.2.0-beta.3 リリース
date: 2026-11-17
---

# Ladiocast 1.2.0-beta.3 リリース

![Join the Ladiocast beta - TestFlight - Apple](/images/Join-the-Ladiocast-beta-TestFlight-Apple.png)

Ladiocast 1.2.0-beta.3 をリリースし、App Store TestFlight にて引き続きテストを行っています。
このテストに参加される方は
https://ladiocast-docs.kawauso.com/ja/testing
よりお進みください。

バージョン1.2.0-beta.2から1.2.0-beta.3への変更点は以下のとおりです。

* IcecastとShoutcastのストリーマーで、曲情報を別の接続でサーバーに送り、サーバーの応答を待つ間も音声を送り続けるように変更。Icecastストリーマーで、Icecast 2.5に接続すると接続中のまま止まっていたのを修正。Ogg Vorbisで、接続前に設定した曲情報も表示されるように変更

Icecast や Shoutcast に配信される方は、接続前に入力した曲情報と、接続中に変えた曲情報が、プレーヤーやサーバーの状態ページに表示されるかを教えてください。
サーバーが Icecast 2.5(Ubuntu 26.04 の icecast2 パッケージなど)の方は、接続できるか、曲情報が更新されるかを教えてください。Icecast 2.5 は曲情報を更新するたびに "legacy" なメタデータについての警告をログに書きますが、これは想定どおりです。
[1.2.0-beta.1](/ja/blog/ladiocast-1.2.0-beta.1-released) と [1.2.0-beta.2](/ja/blog/ladiocast-1.2.0-beta.2-released) の変更点(AppleScript、アラート、設定ファイル、Wi-Fi 経由の Icecast と Shoutcast、TLS(SSL)での Icecast、Ogg 形式、RTMP ストリーマーの静止画)も引き続き試していただけると助かります。

問題を報告いただく際は、macOS のバージョン、Mac の機種(Intel か Apple silicon)、アプリの表示言語、使用したオーディオデバイス、ストリーマーの種類とサーバーのソフトウェア(バージョンも)、エンコード形式、サンプルレートとビットレート、実行したスクリプト(あれば)、アプリが表示したメッセージを添えてください。クラッシュ、不具合、ご要望の送り方はこちらをご覧ください: https://ladiocast-docs.kawauso.com/ja/feedback

よろしくお願いします。
