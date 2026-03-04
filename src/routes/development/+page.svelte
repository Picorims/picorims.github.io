<script lang="ts">
	import Project from '$lib/Project.svelte';
	import { ProjectInfo } from '$lib/project_info';
	import ProjectList from '$lib/ProjectList.svelte';
</script>

<h1>Development</h1>

<section id="projects-section">
	<h2>Projects</h2>
	<ProjectList category="dev" />
</section>
