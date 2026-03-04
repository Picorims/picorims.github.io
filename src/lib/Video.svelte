<script lang="ts">
    interface Props {
        src?: string;
        loop?: boolean;
        type?: string;
        width?: number | undefined;
    }

    let {
        src = "",
        loop = true,
        type = "video/mp4",
        width = undefined
    }: Props = $props();
</script>

<!-- svelte-ignore a11y_media_has_caption -->
<video {loop} preload="metadata" controls {width}>
    <source {src} {type}>
</video>

<style>
    video {
        max-width: 100%;
        height: auto;
        margin: 1em auto;
    }
</style>