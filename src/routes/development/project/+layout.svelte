<script>
    /** @type {{children?: import('svelte').Snippet}} */
    let { children } = $props();
</script>

<article>
    {@render children?.()}
</article>

<style>
    article {
        padding: 0 5%;
        margin: auto;
        max-width: 1280px;
    }
</style>