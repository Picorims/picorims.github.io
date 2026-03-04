<script lang="ts">
	import type { Snippet } from "svelte";
	import { ProjectInfo, type ProjectCategory } from "./project_info";
	import Project from "./Project.svelte";

    interface Props {
        category: ProjectCategory;
    }

    let { category }: Props = $props();
</script>

<div class="container">
    {#each Object.keys(ProjectInfo) as key}
        {#if ProjectInfo[key].categories.includes(category)}
            <Project
                href={ProjectInfo[key].href}
                shadowColor={ProjectInfo[key].shadowColor}
                projectInfo={ProjectInfo[key]}
            >
                {ProjectInfo[key].description}
            </Project>
        {/if}
    {/each}
</div>

<style>
    div.container {
        display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 50px;
    }
</style>