<script lang="ts">
	import TechList, {Tech} from "./TechList.svelte";
    
    export let title = "title";
    export let href = "/";
    export let shadowColor = "var(--blue-shadow)";
    export let background = "";
    export let techList: Array<Tech> = [];
</script>

<div class="project-container" style="box-shadow: 0 5px 10px {shadowColor}">
    {#if background !== ""}
        <img class="bgnd-img" src={background} alt="{title} thumbnail">
    {:else}
        <div class="bgnd-img">
            <i class="ri-image-fill"></i>
        </div>
    {/if}
    <div class="card-container">
        {#if href !== "/"}
            <h3><a href={href}>{title}</a></h3>
        {:else}
            <h3>{title}</h3>
        {/if}
        <TechList list={techList}></TechList>
        <p>
            <slot></slot>
        </p>
        {#if href !== "/"}
            <a class="button" href={href}>Explore</a>
        {/if}
    </div>
</div>

<style>
    div.project-container {
        position: relative;
        display: block;
        flex: 1 0 auto;
        width: 300px;
        min-height: 300px;
        border-radius: var(--main-border-radius);
        overflow: hidden;
        background-color: var(--black-contrast);
    }
    div.card-container {
        padding: 20px;
    }
    div.card-container h3 {
        font-size: 1.8rem;
        margin: 0;
        margin-bottom: 0.25em;
    }
    div.card-container p {
        margin: 0.5em 0;
        font-size: 1.1rem;
    }
    div.project-container .bgnd-img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
    div.project-container div.bgnd-img {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 5rem;
        background-color: var(--main-black);
        color: var(--black-contrast);
    }

    a.button {
        display: inline-block;
        padding: 0.5rem;
        background-color: var(--main-purple);
        cursor: pointer;
        border-radius: 5px;
        font-weight: bold;
    }
</style>