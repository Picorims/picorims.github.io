<script>
    /** @type {{children?: import('svelte').Snippet}} */
    let { children } = $props();
</script>

<div class="container">
    {@render children?.()}
</div>

<style>
    div.container {
        display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 50px;
    }
</style>