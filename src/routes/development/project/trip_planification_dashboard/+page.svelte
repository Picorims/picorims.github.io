<script lang="ts">
	import ProjectHeader from '$lib/ProjectHeader.svelte';
	import ProjectDetails from '$lib/ProjectDetails.svelte';

	import { ProjectInfo } from '$lib/project_info';

	import vid from "$lib/assets/videos/2024-09-28_16-22-44_trip_dashboard.mp4";
	import Video from '$lib/Video.svelte';
</script>

<ProjectHeader projectInfo={ProjectInfo.tripDashboard} />

<ProjectDetails projectInfo={ProjectInfo.tripDashboard} href="https://picorims.github.io/wav2bar-website/">
	<span slot="strengths">
		<li>High customization</li>
		<li>Modular</li>
	</span>
	<span slot="weaknesses">
		<li>Not secure</li>
		<li>Unstable</li>
		<li>Complex architecture (two development servers)</li>
	</span>
	<span slot="explored">
		<li>Editable dashboard component</li>
		<li>Discovering Angular</li>
	</span>
</ProjectDetails>

<!-- svelte-ignore a11y-media-has-caption -->
<section>
	<h2>Small demo of the dashboard modification</h2>

	<Video src={vid}/>
</section>
