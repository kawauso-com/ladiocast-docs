---
title: Ladiocast 1.2.0-beta.4 リリース
date: 2026-11-17
---

# Ladiocast 1.2.0-beta.4 リリース

![Join the Ladiocast beta - TestFlight - Apple](/images/Join-the-Ladiocast-beta-TestFlight-Apple.png)

Ladiocast 1.2.0-beta.4 をリリースし、App Store TestFlight にて引き続きテストを行っています。
このテストに参加される方は
https://ladiocast-docs.kawauso.com/ja/testing
よりお進みください。

バージョン1.2.0-beta.3から1.2.0-beta.4への変更点は以下のとおりです。

* Icecast、Shoutcast、RTMPのストリーマーで、エラーで切断されたら5秒後に1回だけ接続し直し、それに失敗したときだけアラートを表示するように変更。待っている間は接続ボタンがオンのままで、クリックすると取りやめる。「エラー切断時」のイベントハンドラーを設定したストリーマーでは、これまでどおりハンドラーを呼ぶ。IcecastとShoutcastのストリーマーが切断直後に自分で再接続する動作は廃止。接続中に接続ボタンをもう一度クリックした場合は、最後のクリックの結果だけを知らせるように変更

Icecast、Shoutcast、RTMP のサービスに配信される方は、サーバーが再起動したときや、ネットワークが一瞬切れたときなど、接続がエラーで切れたときの動作を教えてください。5秒ほど後にアラートなしで接続し直し、それに失敗したときだけアラートが表示されるはずです。
beta.3 までは Icecast と Shoutcast のストリーマーがすぐに自分で再接続していたため、これからは配信が5秒ほど止まります。Wi-Fi 経由の配信などで、この間が問題になるかどうかを教えてください。
「エラー切断時」のイベントハンドラーを使っている方は、これまでどおりハンドラーが呼ばれ、ストリーマーが自分で接続し直さないかを教えてください。
[1.2.0-beta.1](/ja/blog/ladiocast-1.2.0-beta.1-released)、[1.2.0-beta.2](/ja/blog/ladiocast-1.2.0-beta.2-released)、[1.2.0-beta.3](/ja/blog/ladiocast-1.2.0-beta.3-released) の変更点(AppleScript、アラート、設定ファイル、Wi-Fi 経由の Icecast と Shoutcast、TLS(SSL)での Icecast、Ogg 形式、曲情報、Icecast 2.5、RTMP ストリーマーの静止画)も引き続き試していただけると助かります。

問題を報告いただく際は、macOS のバージョン、Mac の機種(Intel か Apple silicon)、アプリの表示言語、使用したオーディオデバイス、ストリーマーの種類とサーバーのソフトウェア(バージョンも)、エンコード形式、サンプルレートとビットレート、実行したスクリプト(あれば)、アプリが表示したメッセージを添えてください。クラッシュ、不具合、ご要望の送り方はこちらをご覧ください: https://ladiocast-docs.kawauso.com/ja/feedback

よろしくお願いします。
