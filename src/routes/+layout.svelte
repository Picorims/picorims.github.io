<script lang="ts">
    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
</script>

<Header></Header>
<div id="page-content">
    {@render children?.()}
</div>
<Footer></Footer>

<style>
    div#page-content {
        padding-top: calc(6rem + var(--header-height));
        /*make footer stick to bottom of the page if needed*/
        flex: 1;
    }

    :global(body) {
        background-color: var(--color-background);
        background-image: 
            repeating-linear-gradient(60deg, transparent, var(--color-primary-transparent-very-light) 1100px, transparent 2200px),
            repeating-linear-gradient(30deg, transparent, var(--color-secondary-transparent-very-light) 800px, transparent 1600px),
            repeating-linear-gradient(45deg, transparent, var(--color-tertiary-transparent-very-light) 1300px, transparent 2600px);
    }
</style>