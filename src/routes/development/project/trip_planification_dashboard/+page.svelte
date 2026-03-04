<script lang="ts">
	import ProjectHeader from '$lib/ProjectHeader.svelte';
	import ProjectDetails from '$lib/ProjectDetails.svelte';

	import { ProjectInfo } from '$lib/project_info';

	import vid from "$lib/assets/videos/2024-09-28_16-22-44_trip_dashboard.mp4";
	import Video from '$lib/Video.svelte';
</script>

<ProjectHeader projectInfo={ProjectInfo.tripDashboard} />

<ProjectDetails projectInfo={ProjectInfo.tripDashboard}>
	{#snippet strengths()}
		<span >
			<li>High customization</li>
			<li>Modular</li>
		</span>
	{/snippet}
	{#snippet weaknesses()}
		<span >
			<li>Not secure</li>
			<li>Unstable</li>
			<li>Complex architecture (two development servers)</li>
		</span>
	{/snippet}
	{#snippet explored()}
		<span >
			<li>Editable dashboard component</li>
			<li>Discovering Angular</li>
		</span>
	{/snippet}
</ProjectDetails>

<!-- svelte-ignore a11y_media_has_caption -->
<section>
	<h2>Small demo of the dashboard modification</h2>

	<Video src={vid}/>
</section>
