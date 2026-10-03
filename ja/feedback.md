<script setup>
import { ref, onMounted } from 'vue'
const address = ref('')
onMounted(() => { address.value = ['ladiocast', 'kawauso.com'].join('@') })
</script>

# フィードバック

Ladiocastのテストにご協力いただきありがとうございます。内容に合った方法でご連絡ください。

## クラッシュ: TestFlight

Ladiocastがクラッシュしたときは、TestFlightの「ベータ版のフィードバックを送信」から送ってください。ビルド番号、Macの情報、クラッシュログが自動で添付されます。

## 不具合・要望: GitHub Issues

それ以外の不具合、動作に関する質問、機能の要望は[Issueを作成](https://github.com/kawauso-com/ladiocast-docs/issues/new/choose)してください。同じ内容がすでに報告されていないか、先に[既存のIssue](https://github.com/kawauso-com/ladiocast-docs/issues)をご確認いただくと助かります。

投稿の前に、コンソールでLadiocastのメッセージを確認する方法を[エラー等の対処](/ja/guide/troubleshooting)で確認してください。

::: warning
Issueは公開されます。パスワード、ストリームキー、公開したくないサーバーアドレスは貼り付けないでください。
:::

## メール

GitHubを使わない場合は
<span v-if="address"><a :href="'mailto:' + address">{{ address }}</a></span><span v-else>(アドレスの表示にはJavaScriptを有効にしてください)</span>
までご連絡ください。返信にお時間をいただくことがあります。
