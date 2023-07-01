<script lang="ts">
    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";
</script>

<Header></Header>
<div id="page-content">
    <slot></slot>
</div>
<Footer></Footer>

<style>
    div#page-content {
        padding-top: var(--header-height);
    }
</style>