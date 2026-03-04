<script lang="ts">
	import type { Snippet } from "svelte";
	import { ProjectInfo, type ProjectCategory } from "./project_info";
	import Project from "./Project.svelte";
	import { Tag } from "./TagList.svelte";
	import { Tech, techList } from "./TechList.svelte";

    interface Props {
        category: ProjectCategory;
    }

    let { category }: Props = $props();
    let toggledTags = $state<Tag[]>([]);
    let toggledTechs = $state<string[]>([]);

    function toggleTag(tag: Tag) {
        if (toggledTags.includes(tag)) {
            toggledTags = toggledTags.filter(t => t !== tag);
        } else {
            toggledTags.push(tag);
        }
    }

    function toggleTech(tech: string) {
        if (toggledTechs.includes(tech)) {
            toggledTechs = toggledTechs.filter(t => t !== tech);
        } else {
            toggledTechs.push(tech);
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

        <details>
            <summary>Filter by technologies:</summary>
            <div class="tag-list">
                {#each Object.values(Tech).filter(t => typeof t === "string").sort() as tech}
                    <!--
                        Yes this is ugly but I still prefer TypeScript enums over string literals in this specific context.
                        Maybe I'll change of mind in the future but for now it works and is constrained to this page.
                     -->

                    {@const techKey = Tech[tech as unknown as Tech] as unknown as Tech}

                    <label class="togglable-tech" style="--tech-color: {techList[techKey].color}">
                    <span class="input-and-text">
                        <input type="checkbox" name={tech} value={tech} onchange={() => toggleTech(tech)} />
                        {tech}
                    </span>
                    <span class="icon" style:fill={techList[techKey].color}>
                        {@html techList[techKey].icon}
                    </span>
                    </label>
                {/each}
            </div>
        </details>
    {/if}
</div>


<div class="projects-container">
    {#each Object.keys(ProjectInfo) as key}
        {#if ProjectInfo[key].categories.includes(category)}
            {#if (toggledTags.length === 0 || toggledTags.every(tag => ProjectInfo[key].tags.includes(tag)))
                && (toggledTechs.length === 0 || toggledTechs.every(tech => {
                    const techKey = Tech[tech as unknown as Tech] as unknown as Tech;
                    return ProjectInfo[key].tech.includes(techKey);
                }))}
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
        overflow: hidden;
        box-shadow: 0 4px 12px var(--main-purple-transparent);
        width: 100%;
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
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
    div.projects-container {
        display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 50px;
    }

    div.tag-list {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 10px;
    }

    label.togglable-tech, label.togglable-tag {
        display: inline-flex;
        align-items: center;
        gap: 0.1em;
        margin-right: 15px;
        margin-bottom: 10px;
        font-weight: bold;
        cursor: pointer;
    }

    label.togglable-tag {
        color: var(--main-blue);
        border: 1px solid var(--main-blue);
        border-radius: var(--subtle-border-radius);
        padding: 0.1em 0.2em;
        background-color: var(--main-black-transparent);
    }
    label.togglable-tag:hover {
        background-color: var(--main-blue-transparent);
    }
    label.togglable-tag:has(input:checked) {
        background-color: var(--main-blue);
        color: var(--main-black);
    }

    label.togglable-tech {
        justify-content: space-between;
        margin: 0;
        color: oklch(from var(--tech-color, var(--main-white)) calc(l + 0.5) c h);
        /* border: 1px solid oklch(from var(--tech-color, var(--main-white)) calc(l - 0.15) c h); */
        border: 1px solid oklch(from var(--main-black) calc(l + 0.2) c h);
        border-radius: var(--subtle-border-radius);
        padding: 0.2em 0.4em;
        background-color: var(--main-black);
    }
    label.togglable-tech:has(input:checked) {
        background-color: var(--main-blue);
        color: var(--main-black);
    }
    label.togglable-tech:hover {
        background-color: var(--main-blue-transparent);
    }
    label.togglable-tech span.input-and-text {
        display: inline-flex;
        align-items: center;
        gap: 0.25em;
    }

    input[type="checkbox"] {
        width: 16px;
        height: 16px;
        accent-color: var(--main-white);
    }

    span.icon {
        display: block;
        width: 1.75em;
        height: 1.75em;
        margin-left: 0.75em;
    }

    label.togglable-tech:has(input:checked) span.icon {
        background-color: var(--main-black);
        outline: 2px solid var(--main-black);
        border-radius: var(--subtle-border-radius);
    }

</style>