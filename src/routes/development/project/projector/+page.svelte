<script lang="ts">
	import ProjectHeader from '$lib/ProjectHeader.svelte';
	import ProjectDetails from '$lib/ProjectDetails.svelte';

	import { ProjectInfo } from '$lib/project_info';

	import inputVid from "$lib/assets/videos/test video.mp4";
	import outputVid from "$lib/assets/videos/projector_laser_sim.mp4";
	import Video from '$lib/Video.svelte';
	import Link from '$lib/Link.svelte';
</script>

<ProjectHeader projectInfo={ProjectInfo.projector} />

<ProjectDetails projectInfo={ProjectInfo.projector} href="https://github.com/Picorims/pi-projector">
	<span slot="strengths">
		<li>Adjusts itself to hardware speed</li>
		<li>Supports all codecs supported by FFmpeg</li>
		<li>Many debugging options</li>
	</span>
	<span slot="weaknesses">
		<li>No stable frame output</li>
		<li>Unfinished bus communication (no synchronization or message system)</li>
		<li>Dirty file structure</li>
		<li>On the Raspberry Pi, a third of the pixels are lost despite multithreading and vectorized operations.</li>
	</span>
	<span slot="explored">
		<li>Raspberry Pi development.</li>
		<li>working with other fields (materials, optronics, electronics) in a common project.</li>
		<li>Video manipulation.</li>
	</span>
</ProjectDetails>

<!-- svelte-ignore a11y-media-has-caption -->
<section>
	<h2><Link href="https://github.com/Picorims/pi-projector" text="GitHub" /></h2>

	<h2>Input</h2>
	<Video src={inputVid} width={100}/>
	
	<h2>Simulated output</h2>
	<p>
		Using laser simulation, full cache, graphical preview and loops, on a laptop.
	</p>
	<Video src={outputVid}/>
</section>
