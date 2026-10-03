# アルファテスト

Ladiocast 1.0.0はアルファ版です。機能が変更される場合があり、不具合に遭遇することがあります。テストへのご協力ありがとうございます。

## 必要な環境

- macOS 13 Ventura以降
- IntelまたはApple siliconのMac
- Mac App Storeの[TestFlight](https://apps.apple.com/jp/app/testflight/id899247664)アプリ
- オーディオ入力デバイス。配信する場合は、ご自身のIcecast、SHOUTcast、RTMPサーバー

## 参加方法

1. Mac App StoreからTestFlightをインストールします。
2. MacでLadiocastのTestFlight公開リンクを開き、招待を受け入れます。
3. TestFlightからLadiocastをインストールします。初めてオーディオ入力が必要になったとき、Ladiocastはマイクの使用許可を求めます。

TestFlightのビルドは90日で期限切れになります。新しいビルドが配信されると、TestFlightが通知します。

## テストしてほしい点

1.0.0のアルファ版には次の変更が含まれています。これらに関する報告は特に助かります。全体は[変更履歴](/ja/changelog)をご覧ください。

- RTMPストリーマーをlibrtmpを使うように書き換え、AACに加えてHE-AACとMP3に対応
- モノラルの入力デバイスを左右のチャンネルの両方に割り当て
- システムサンプルレートのデフォルトを44,100Hzから48,000Hzに変更
- IntelとApple siliconのMacで動くユニバーサルアプリとして再構築

そのほか、長時間の放送、複数のストリーマーの同時使用、通信エラー後の再接続など、普段の使い方でのテストも歓迎です。

## フィードバック

クラッシュ、不具合、要望の報告方法は[フィードバック](/ja/feedback)をご覧ください。
