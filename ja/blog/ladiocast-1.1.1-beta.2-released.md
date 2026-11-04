---
title: Ladiocast 1.1.1-beta.2 リリース
date: 2026-11-05
---

# Ladiocast 1.1.1-beta.2 リリース

![Join the Ladiocast beta - TestFlight - Apple](/images/Join-the-Ladiocast-beta-TestFlight-Apple.png)

Ladiocast 1.1.1-beta.2 をリリースし、App Store TestFlight にて引き続きテストを行っています。
このテストに参加される方は
https://ladiocast-docs.kawauso.com/ja/testing
よりお進みください。

バージョン1.1.1-beta.1から1.1.1-beta.2への変更点は以下のとおりです。

* 入力デバイスの開始のたびに最初の0.8秒を捨てて、Macのオーディオジャックから入る開始直後のノイズが出ないように変更

Macのオーディオジャックから音声を受け取っている入力デバイスがLadiocastの起動時や切り替え時にノイズを発生させるケースに対処しました。
ノイズの出ないデバイスも含めて、すべての入力デバイスで選択直後の0.8秒が無音になります。
オーディオジャックのマイクを使われる方は、Ladiocast の起動時、入力デバイスの切り替え時、Mac のスリープからの復帰後にノイズが残っていないかを教えてください。他のアプリケーションが入力を使っている間はノイズが出ないので、先に終了してください。他の入力デバイスで最初の0.8秒のあともノイズが出る場合も教えてください。

問題を報告いただく際は、macOS のバージョン、Mac の機種(Intel か Apple silicon)、アプリの表示言語、使用したオーディオデバイス、ストリーマーの種類とサーバーのソフトウェア、エンコード形式、サンプルレートとビットレート、アプリが表示したメッセージを添えてください。クラッシュ、不具合、ご要望の送り方はこちらをご覧ください: https://ladiocast-docs.kawauso.com/ja/feedback

よろしくお願いします。
