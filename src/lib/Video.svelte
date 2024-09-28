<script lang="ts">
    export let src = "";
    export let loop = true;
    export let type = "video/mp4";
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video {loop} preload="metadata" controls>
    <source {src} {type}>
</video>

<style>
    video {
        width: 100%;
        max-width: 100%;
        height: auto;
        margin: 1em 0;
    }
</style>