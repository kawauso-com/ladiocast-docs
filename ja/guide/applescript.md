# AppleScript

## AppleScriptインタフェース

AppleScriptを使ってLadiocastに接続設定ファイルを読み込ませたり、サーバーに接続させたりすることができます。

```applescript
tell application "Ladiocast" to open "/Users/kawauso/Desktop/foo.plist"
tell application "Ladiocast" to connect
tell application "Ladiocast" to disconnect
```

Ladiocastのメタデータの曲情報フィールドは属性"metadata song"としてAppleScriptから参照し変更することができます。 例えばiTunesの現在の曲名をLadiocastのメタデータにコピーして終了するAppleScriptは

```applescript
tell application "iTunes" to set currentTrack to name of current track
tell application "Ladiocast" to set metadata song to currentTrack
```

と書くことができます。

## イベントハンドラーAppleScript

ストリーマー上で所定のイベントが発生した場合、あらかじめ読み込んでおいたAppleScript内の指定したハンドラーを実行させることができます。 例えば以下のような内容のAppleScriptファイルを用意したとします。

```applescript
on disconnected(streamer_index)
    repeat 3 times
        delay 10
        try
            tell application "Ladiocast" to connect streamer_index
            return
        end try
    end repeat
end disconnected
```

ストリーマーウィンドウの“イベント”タブの“イベントハンドラーAppleScript”にこのファイルを選択して読み込み、イベントハンドラー名の“エラーで接続切れ”フィールドに`disconnected`と入力します。 このように設定することでエラーによる接続切れイベントが発生した場合にAppleScriptにより10秒間隔で3回まで接続を繰り返す動作を行わせることができます。

現在用意されているイベントは“エラーで接続切れ”のみです。

### 注意

AppleScriptを実行している間はグラフィックユーザーインターフェースからの操作を実行することはできません。

AppleScriptファイルは選択される度、およびストリーマーウィンドウが開かれる度にその内容が実行されます。
