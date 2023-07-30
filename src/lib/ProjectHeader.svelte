<script lang="ts">
	import type { ProjectData } from "./project_info";

    export let projectInfo: ProjectData;
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
    }
</style>