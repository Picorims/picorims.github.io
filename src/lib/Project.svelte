<script lang="ts">
    import TagList from "./TagList.svelte";
	import TechList, {Tech} from "./TechList.svelte";
	import { ProjectInfo, ProjectKind, type ProjectData } from "./project_info";

    
    interface Props {
        key: string,
        title?: string;
        href?: string;
        shadowColor?: string;
        background?: string;
        techList?: Array<Tech>;
        projectInfo?: ProjectData | null;
        children?: import('svelte').Snippet;
    }

    let {
        key,
        title = "title",
        href = "/",
        shadowColor = "#30353d",
        background = "",
        techList = [],
        projectInfo = null,
        children
    }: Props = $props();

    let kind: ProjectKind = $derived(projectInfo?.kind ?? ProjectKind.UNKNOWN);
    
    let rgbRatioColor: [number, number, number] = $derived((() => {
        const rStr = shadowColor.slice(1, 3);
        const gStr = shadowColor.slice(3, 5);
        const bStr = shadowColor.slice(5, 7);
        let r = parseInt(rStr, 16);
        let g = parseInt(gStr, 16);
        let b = parseInt(bStr, 16);

        // // make darker
        // r *= 0.2;
        // g *= 0.2;
        // b *= 0.2;

        return [r / 256, g / 256, b / 256];
    })());
</script>

{#snippet circle(radius: number, cssClass: string)}
    <svg
        class={cssClass}
        xmlns="http://www.w3.org/2000/svg"
        width={radius * 4}
        height={radius * 4}
        viewBox={`0 ${4*radius} ${4*radius}`}
    >
        <circle cx={radius*2} cy={radius*2} r={radius}></circle>
    </svg>
{/snippet}

{#snippet lucideCircleQuestionMark(cssClass: string)}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={`${cssClass} lucide lucide-circle-question-mark preview-icon`}><circle cx="12" cy="12" r="10"/><path d="M9 9.5a3 2.5 0 016 0c0 2-2 2-3 3.5"/><path d="M12 17h.01"/></svg>
{/snippet}

{#snippet lucideGamepad2(cssClass: string)}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={`${cssClass} lucide lucide-gamepad-2 preview-icon`}><line x1="6" x2="10" y1="11" y2="11"/><line x1="8" x2="8" y1="9" y2="13"/><line x1="15" x2="15.01" y1="12" y2="12"/><line x1="18" x2="18.01" y1="10" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/></svg>
{/snippet}

{#snippet lucideGlobe(cssClass: string)}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={`${cssClass} lucide lucide-globe preview-icon`}><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
{/snippet}

{#snippet lucideGpu(cssClass: string)}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={`${cssClass} lucide lucide-gpu preview-icon`}><path d="M2 17h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H2"/><path d="M2 21V3"/><path d="M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3"/><circle cx="16" cy="11" r="2"/><circle cx="8" cy="11" r="2"/></svg>
{/snippet}

{#snippet lucideOrbit(cssClass: string)}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={`${cssClass} lucide lucide-orbit preview-icon`}><path d="M20.341 6.484A10 10 0 0 1 10.266 21.85"/><path d="M3.659 17.516A10 10 0 0 1 13.74 2.152"/><circle cx="12" cy="12" r="3"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/></svg>
{/snippet}

{#snippet lucideMonitor(cssClass: string)}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={`${cssClass} lucide lucide-monitor preview-icon`}><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
{/snippet}

{#snippet lucideCpuAi(cssClass: string)}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={`${cssClass} lucide lucide-cpu-ai preview-icon`}><path d="M12 20v2"/><path d="M12 2v2"/><path d="M16 9v6"/><path d="M17 20v2"/><path d="M17 2v2"/><path d="M2 12h2"/><path d="M2 17h2"/><path d="M2 7h2"/><path d="M20 12h2"/><path d="M20 17h2"/><path d="M20 7h2"/><path d="M7 20v2"/><path d="M7 2v2"/><path d="M8 13h4"/><path d="M8 15v-4a2 2 0 014 0v4"/><rect x="4" y="4" width="16" height="16" rx="2"/></svg>
{/snippet}

{#snippet lucideBoxes(cssClass: string)}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={`${cssClass} lucide lucide-boxes preview-icon`}><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"/><path d="m7 16.5-4.74-2.85"/><path d="m7 16.5 5-3"/><path d="M7 16.5v5.17"/><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"/><path d="m17 16.5-5-3"/><path d="m17 16.5 4.74-2.85"/><path d="M17 16.5v5.17"/><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"/><path d="M12 8 7.26 5.15"/><path d="m12 8 4.74-2.85"/><path d="M12 13.5V8"/></svg>
{/snippet}

{#snippet lucideEighthNotes(cssClass: string)}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={`${cssClass} lucide lucide-eighth-notes preview-icon`}><path d="M21 16V3a1 1 0 0 0-1.28-.96l-10 2.917a1 1 0 0 0-.72.96V19"/><circle cx="18" cy="16" r="3"/><circle cx="6" cy="19" r="3"/></svg>
{/snippet}

{#snippet lucideNotebookPen(cssClass: string)}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={`${cssClass} lucide lucide-notebook-pen preview-icon`}><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/></svg>
{/snippet}

{#snippet lucideRectangleGoggles(cssClass: string)}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={`${cssClass} lucide lucide-rectangle-goggles preview-icon`}><path d="M20 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.6-.8l-1.6-2.13a1 1 0 0 0-1.6 0L9.6 17.2A2 2 0 0 1 8 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/></svg>
{/snippet}

{#snippet lucideToolbox(cssClass: string)}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={`${cssClass} lucide lucide-toolbox preview-icon`}><path d="M16 12v4"/><path d="M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><path d="M17 6a2 2 0 011.414.586l3 3A2 2 0 0122 11v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8a2 2 0 01.586-1.414l3-3A2 2 0 017 6z"/><path d="M2 14h20"/><path d="M8 12v4"/></svg>
{/snippet}

{#snippet lucideToyBrick(cssClass: string)}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={`${cssClass} lucide lucide-toy-brick preview-icon`}><rect width="18" height="12" x="3" y="8" rx="1"/><path d="M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3"/><path d="M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"/></svg>
{/snippet}

{#snippet lucideSmartphone(cssClass: string)}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={`${cssClass} lucide lucide-smartphone preview-icon`}><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
{/snippet}

<div class="project-container" style="--color: {shadowColor}">
    <div class="background" style:--filter={`url(#pattern-filter-${key})`}></div>
    <div class="corners">
        {@render circle(16, "corner-circle top-left")}
        {@render circle(24, "corner-circle top-right")}
        {@render circle(24, "corner-circle bottom-left")}
        {@render circle(16, "corner-circle bottom-right")}
        {#each [0, 1] as index}
            {@const side = index === 1 ? "bottom-left" : "top-right"}
            {#if kind === ProjectKind.GAME}
                {@render lucideGamepad2(`kind-icon ${side}`)}
            {:else if kind === ProjectKind.RENDERING}
                {@render lucideGpu(`kind-icon ${side}`)}
            {:else if kind === ProjectKind.WEB}
                {@render lucideGlobe(`kind-icon ${side}`)}
            {:else if kind === ProjectKind.PHYSICS}
                {@render lucideOrbit(`kind-icon ${side}`)}
            {:else if kind === ProjectKind.VR}
                {@render lucideRectangleGoggles(`kind-icon ${side}`)}
            {:else if kind === ProjectKind.AI}
                {@render lucideCpuAi(`kind-icon ${side}`)}
            {:else if kind === ProjectKind.MINECRAFT}
                {@render lucideBoxes(`kind-icon ${side}`)}
            {:else if kind === ProjectKind.BLOG}
                {@render lucideNotebookPen(`kind-icon ${side}`)}
            {:else if kind === ProjectKind.SOFTWARE}
                {@render lucideMonitor(`kind-icon ${side}`)}
            {:else if kind === ProjectKind.MUSIC}
                {@render lucideEighthNotes(`kind-icon ${side}`)}
            {:else if kind === ProjectKind.TOOL}
                {@render lucideToolbox(`kind-icon ${side}`)}
            {:else if kind === ProjectKind.PLUGIN}
                {@render lucideToyBrick(`kind-icon ${side}`)}
            {:else if kind === ProjectKind.APP}
                {@render lucideSmartphone(`kind-icon ${side}`)}
            {:else if kind === ProjectKind.UNKNOWN}
                {@render lucideCircleQuestionMark(`kind-icon ${side}`)}
            {/if}
        {/each}
    </div>
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

    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
        <filter id={`pattern-filter-${key}`}>
            <feColorMatrix in="SourceGraphic" type="matrix" values={`${rgbRatioColor[0]} 0 0 0 0
                                                                     0 ${rgbRatioColor[1]} 0 0 0
                                                                     0 0 ${rgbRatioColor[2]} 0 0
                                                                     0 0 0 0 0.15`}></feColorMatrix>
        </filter>
    </svg>
</div>


<style>
    div.project-container {
        position: relative;
        display: block;
        padding: 12px;
        padding-bottom: 24px;
        flex: 1 0 auto;
        min-height: 300px;
        border-radius: var(--large-border-radius);
        overflow: hidden;
        background-color: var(--color-background-contrast);
    }
    div.project-container > *:not(.background):not(.corners) {
        position: relative;
        z-index: 1;
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
    div.background{
        position: absolute;
        width: 200%;
        height: 200%;
        top: -50%;
        left: -50%;
        z-index: 0;
        background-image: url("$lib/assets/card_pattern.svg");
        background-size: 196px, 196px;
        background-repeat: repeat, repeat;
        transform: rotate(20deg);
        filter: var(--filter);
    }
    div.corners {
        position: absolute;
        z-index: 5;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        overflow: visible;
        border: 12px solid oklch(from var(--color-background-contrast) calc(l - 0.025) c h)
    }
    svg.corner-circle {
        position: absolute;
        z-index: 2;
        fill: var(--color);
        stroke: var(--color-background-contrast);
        stroke-width: 8px;
    }
    svg.corner-circle.top-left {
        top: 0;
        left: 0;
        transform: translate(-40%, -40%);
    }
    svg.corner-circle.top-right {
        top: 0;
        right: 0;
        transform: translate(40%, -40%);
        fill: oklch(from var(--color) calc(max(0.85, min(0.95, l + 0.3))) c h);
    }
    svg.corner-circle.bottom-left {
        bottom: 0;
        left: 0;
        transform: translate(-40%, 40%);
        fill: oklch(from var(--color) calc(max(0.85, min(0.85, l + 0.3))) c h);
    }
    svg.corner-circle.bottom-right {
        bottom: 0;
        right: 0;
        transform: translate(40%, 40%);
    }
    svg.kind-icon {
        position: absolute;
        z-index: 3;
        width: 32px;
        height: 32px;
        stroke: black;
        stroke-width: 2.5px;
    }
    svg.kind-icon.top-right {
        top: 0;
        right: 0;
        transform: translate(20%, -20%);
    }
    svg.kind-icon.bottom-left {
        bottom: 0;
        left: 0;
        transform: translate(-20%, 20%);
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
        background-color: rgb(from var(--color-background-contrast) r g b / 0.75);
        border-radius: var(--small-border-radius);
    }

    a {
        margin-top: 0.25rem;
    }
</style>