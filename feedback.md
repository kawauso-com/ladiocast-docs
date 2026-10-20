<script setup>
import { ref, onMounted } from 'vue'
const address = ref('')
onMounted(() => { address.value = ['ladiocast', 'kawauso.com'].join('@') })
</script>

# Feedback

Thank you for using Ladiocast. Please use the channel that fits your report best.

## Crashes

If Ladiocast crashes, attach the crash report to an issue or an email (see below). Open Console (`/Applications/Utilities/Console.app`), choose "Crash Reports" in the sidebar, and select the latest report of Ladiocast.

If you are testing a TestFlight build, send feedback from TestFlight ("Send Beta Feedback") instead. The build number, your Mac's details and the crash log are attached automatically.

## Bugs and requests: GitHub Issues

For other problems, questions about behavior and feature requests, please [open an issue](https://github.com/kawauso-com/ladiocast-docs/issues/new/choose). You can browse the [existing issues](https://github.com/kawauso-com/ladiocast-docs/issues) first to see if yours has already been reported.

Before posting, please see [In error cases](/guide/troubleshooting) for how to check Console for messages from Ladiocast.

::: warning
Issues are public. Do not paste passwords, stream keys or server addresses you want to keep private.
:::

## Email

If you do not use GitHub, you can write to
<span v-if="address"><a :href="'mailto:' + address">{{ address }}</a></span><span v-else>(enable JavaScript to show the address)</span>.
Replies may take a while.
