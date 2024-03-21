<script lang="ts">
	import Project from '$lib/Project.svelte';
	import { ProjectInfo } from '$lib/project_info';
	import ProjectList from '$lib/ProjectList.svelte';
</script>

<h1>Minecraft</h1>

<section>
    <h2>Projects</h2>
    <ProjectList>
        <Project
            projectInfo={ProjectInfo.projectZearth}
            href="https://project-zearth.com/"
            shadowColor="#e53b44"
        >
            Member of the Project Zearth team, one of the oldest Minecraft
            city map still actively maintained. Come have fun with us!
        </Project>

        <Project
            projectInfo={ProjectInfo.divercity}
            href="https://www.planetminecraft.com/project/divercity-alpha-1-0-city-map-est-2015-2019/"
            shadowColor="#1ea7b2"
        >
            An old personal Minecraft city map project. If you want to try it out,
            pick the unfinished version linked in the description of the map.
        </Project>
    </ProjectList>

    <h2>Gallery</h2>
    <h3>Coming soon!</h3>
</section>