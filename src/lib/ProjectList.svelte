<script lang="ts">
	import type { Snippet } from "svelte";
	import { ProjectInfo, type ProjectCategory } from "./project_info";
	import Project from "./Project.svelte";
	import { Tag } from "./TagList.svelte";

    interface Props {
        category: ProjectCategory;
    }

    let { category }: Props = $props();
    let toggledTags = $state<Tag[]>([]);

    function toggleTag(tag: Tag) {
        if (toggledTags.includes(tag)) {
            toggledTags = toggledTags.filter(t => t !== tag);
        } else {
            toggledTags.push(tag);
        }
    }
</script>

<div class="filters">
    {#if category === "dev"}
        <details>
            <summary>Filter by tags:</summary>
            <div>
                {#each Object.values(Tag) as tag}
                    <label class="togglable-tag">
                        <input type="checkbox" name={tag} value={tag} onchange={() => toggleTag(tag)} />
                        {tag}
                    </label>
                {/each}
            </div>
        </details>
    {/if}
</div>


<div class="projects-container">
    {#each Object.keys(ProjectInfo) as key}
        {#if ProjectInfo[key].categories.includes(category)}
            {#if toggledTags.length === 0 || toggledTags.every(tag => ProjectInfo[key].tags.includes(tag))}
                <Project
                    href={ProjectInfo[key].href}
                    shadowColor={ProjectInfo[key].shadowColor}
                    projectInfo={ProjectInfo[key]}
                >
                    {ProjectInfo[key].description}
                </Project>
            {/if}
        {/if}
    {/each}
</div>

<style>
    details {
        border: 1px solid var(--main-purple);
        border-radius: var(--main-border-radius);
        width: fit-content;
        overflow: hidden;
        box-shadow: 0 4px 12px var(--main-purple-transparent);
    }
    /*Yes I know but native CSS is still relatively recent
    and I don't want this to break.*/
    details summary {
        font-weight: bold;
        cursor: pointer;
        background-color: var(--main-purple);
        padding: 0.5em;
    }
    details div {
        padding: 0.5em;
    }
    div.filters {
        margin-bottom: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    div.projects-container {
        display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 50px;
    }
    label.togglable-tag {
        display: inline-flex;
        align-items: center;
        gap: 0.1em;
        margin-right: 15px;
        font-weight: bold;
        color: var(--main-blue);
        border: 1px solid var(--main-blue);
        border-radius: var(--subtle-border-radius);
        padding: 0.1em 0.2em;
        background-color: var(--main-black-transparent);
    }
</style>