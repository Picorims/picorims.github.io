<script lang="ts">
	import ProjectHeader from '$lib/ProjectHeader.svelte';
	import ProjectDetails from '$lib/ProjectDetails.svelte';

	import { ProjectInfo } from '$lib/project_info';

	import vid1 from "$lib/assets/videos/2024-09-28 17-59-21_billiard_1.mp4";
	import vid2 from "$lib/assets/videos/2024-09-28 18-02-06_billiard_2.mp4";
	import Video from '$lib/Video.svelte';
	import Link from '$lib/Link.svelte';
</script>

<ProjectHeader projectInfo={ProjectInfo.billiard} />

<ProjectDetails projectInfo={ProjectInfo.billiard} href="https://github.com/Picorims/app3-transverse-billiard">
	<span slot="strengths">
		<li>Accurate simple physics</li>
	</span>
	<span slot="weaknesses">
		<li>Unintuitive controls</li>
		<li>clipping in case of freezing (bad performance, moving the window)</li>
		<li>Not very flexible architecture</li>
	</span>
	<span slot="explored">
		<li>Writing a physics engine from scratch (I personally worked on sphere/sphere collision)</li>
		<li>OpenGL rendering</li>
	</span>
</ProjectDetails>

<!-- svelte-ignore a11y-media-has-caption -->
<section>
	<h2><Link href="https://github.com/Picorims/app3-transverse-billiard" text="GitHub" /></h2>

	<h2>Classic demo</h2>
	<Video src={vid1}/>
	
	<h2>Stop-shot (Carreau)</h2>
	<Video src={vid2}/>
</section>
