<script lang="ts">
    export let title = "";
    export let background = "";
</script>

<header>
    <h1>{title}</h1>
    {#if background !== ""}
        <img src={background} alt={title + " thumbnail"}>
    {/if}
</header>

<style>
    img {
        display: block;
        width: 90%;
        max-width: 700px;
        margin: auto;
    }
</style>