<script lang="ts">
	import TagList from "./TagList.svelte";
	import TechList, {Tech} from "./TechList.svelte";
	import type { ProjectData } from "./project_info";
    
    export let title = "title";
    export let href = "/";
    export let shadowColor = "var(--blue-shadow)";
    export let background = "";
    export let techList: Array<Tech> = [];
    export let projectInfo: ProjectData | null = null;
</script>

<div class="project-container" style="box-shadow: 0 0px 24px {shadowColor}; --color: {shadowColor}">
    {#if (projectInfo && projectInfo.thumbnail) || background !== ""}
        <img class="bgnd-img" src={projectInfo?.thumbnail || background} alt="{projectInfo?.name || title} thumbnail">
    {:else}
        <div class="bgnd-img">
            <i class="ri-image-fill"></i>
        </div>
    {/if}
    
    <div class="card-container">
        {#if href !== "/"}
            <h3><a href={href}>{projectInfo?.name || title}</a></h3>
        {:else}
            <h3>{projectInfo?.name || title}</h3>
        {/if}

        <p>
            <span class="year">{projectInfo?.year || ""}</span>
            <TagList tagList={projectInfo?.tags || []}></TagList>
        </p>

        <TechList list={projectInfo?.tech || techList}></TechList>
        
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
        border: 1px solid var(--color);
    }
    @media screen and (max-width: 460px) {
        div.project-container {
            width: 100%;
        }
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

    span.year {
        font-weight: bold;
        margin-right: 0.5em;
    }
</style>