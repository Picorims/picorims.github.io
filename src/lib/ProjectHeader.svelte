<script lang="ts">
	import type { ProjectData } from "./project_info";

    interface Props {
        projectInfo: ProjectData;
    }

    let { projectInfo }: Props = $props();
</script>

<header>
    <h1>{projectInfo.name}</h1>
    {#if projectInfo.thumbnail}
        <img src={projectInfo.thumbnail} alt={projectInfo.name + " thumbnail"}>
    {/if}
</header>

<style>
    img {
        display: block;
        width: 90%;
        max-width: 700px;
        margin: auto;
        border-radius: var(--main-border-radius);
        box-shadow: 0 0 16px var(--main-black);
    }
</style>