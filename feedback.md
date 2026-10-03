<script setup>
import { ref, onMounted } from 'vue'
const address = ref('')
onMounted(() => { address.value = ['ladiocast', 'kawauso.com'].join('@') })
</script>

# Feedback

Thank you for testing Ladiocast. Please use the channel that fits your report best.

## Crashes: TestFlight

If Ladiocast crashes, send feedback from TestFlight ("Send Beta Feedback"). The build number, your Mac's details and the crash log are attached automatically.

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
