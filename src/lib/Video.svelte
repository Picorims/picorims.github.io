<script lang="ts">
    export let src = "";
    export let loop = true;
    export let type = "video/mp4";
    export let width: number | undefined = undefined;
</script>

<!-- svelte-ignore a11y-media-has-caption -->
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