<script lang="ts">
	import TagList from "./TagList.svelte";
	import TechList, {Tech} from "./TechList.svelte";
	import type { ProjectData } from "./project_info";
    
    interface Props {
        title?: string;
        href?: string;
        shadowColor?: string;
        background?: string;
        techList?: Array<Tech>;
        projectInfo?: ProjectData | null;
        children?: import('svelte').Snippet;
    }

    let {
        title = "title",
        href = "/",
        shadowColor = "var(--blue-shadow)",
        background = "",
        techList = [],
        projectInfo = null,
        children
    }: Props = $props();
</script>

<div class="project-container" style="--color: {shadowColor}">
    {#if (projectInfo && projectInfo.thumbnail) || background !== ""}
        <img class="bgnd-img" srcset={`${projectInfo?.thumbnailSmall ?? projectInfo?.thumbnail ?? background}, ${projectInfo?.thumbnail ?? background} 2x`} alt="{projectInfo?.name || title} thumbnail">
    {:else}
        <div class="bgnd-img">
            <i class="ri-image-fill"></i>
        </div>
    {/if}
    
    <div class="card-container">
        <div class="card-header">
            <h3>{projectInfo?.name || title}</h3>
            <span class="year">{projectInfo?.year || ""}</span>
        </div>

        <p class="tag-list">
            <TagList tagList={projectInfo?.tags || []}></TagList>
        </p>

        <TechList list={projectInfo?.tech || techList}></TechList>
        
        <p class="text">
            {@render children?.()}
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
        min-height: 300px;
        border-radius: var(--large-border-radius);
        overflow: hidden;
        background-color: var(--color-background-contrast);
        /* border: 1px solid var(--color); */
        border: 12px solid oklch(from var(--color-background-contrast) calc(l - 0.025) c h)
    }
    @media screen and (max-width: 460px) {
        div.project-container {
            width: 100%;
        }
    }

    div.card-container {
        padding: 0.5rem;
        padding-top: 0.25rem;
    }

    div.card-header {
        display: flex;
        align-items: baseline;
        gap: 1rem;
        border-bottom: 1px solid var(--color-background-contrast-lighter-1);
    }

    div.card-container h3 {
        font-size: 1.25rem;
        margin: 0;
        margin-bottom: 0.25em;
        color: var(--color-text-darker-1);
    }

    span.year {
        font-size: 1.05rem;
        color: var(--color-text-darker-1);
    }

    p.tag-list {
        margin: 0;
        margin-top: 0.5rem;
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
        background-color: var(--color-background);
        color: var(--black-contrast);
    }

    p.text {
        margin: 0.5rem 0;
        font-size: 1rem;
        line-height: 1.1lh;
        color: var(--color-text-darker-2);
    }

    a {
        margin-top: 0.25rem;
    }
</style>