<script lang="ts">
	import ProjectHeader from '$lib/ProjectHeader.svelte';
	import ProjectDetails from '$lib/ProjectDetails.svelte';

	import { ProjectInfo } from '$lib/project_info';
</script>

<ProjectHeader projectInfo={ProjectInfo.wav2bar} />

<ProjectDetails projectInfo={ProjectInfo.wav2bar} href="https://picorims.github.io/wav2bar-website/">
	<span slot="strengths">
		<li>published</li>
		<li>positive feedback from users and small activity</li>
		<li>automated builds</li>
	</span>
	<span slot="weaknesses">
		<li>architecture and tech debt</li>
		<li>performance</li>
		<li>lack of unit tests</li>
	</span>
	<span slot="explored">
		<li>native web app</li>
		<li>canvas and audio processing</li>
		<li>custom components in pure HTML5 (standard API)</li>
		<li>states</li>
		<li>user interface</li>
		<li>CI / CD</li>
	</span>
</ProjectDetails>

<section>
	<p>
		The idea of Wav2Bar came a few months after the discontinuation of Sonic Candle. It was a
		similar tool that allowed you to make and export basic audio visualization. I always felt
		limited, and couldn't imagine the only open source option I knew and enjoyed would die. So, I
		tried my best to take what made Sonic Candle a great tool, and focused on the ability to add
		more customization. While being a project on my spare time, I still try to provide something as
		professional as possible. I am also open to suggestions.
	</p>

	<p>
		Currently, some brainstorming is happening for a rewrite with better architecture, improved
		performance and an improved user interface, using Tauri as a replacement.
	</p>
	<ul>
		<li><strong><a target="_blank" href="https://design.penpot.app/#/view/82e31d90-3829-8139-8002-c506ce8814c1?page-id=82e31d90-3829-8139-8002-c506ce8814c2&section=interactions&index=0&share-id=dbcc1ffd-3b06-8112-8002-ee511a3f3cd7">PenPot mockup</a></strong></li>
		<li><strong><a target="_blank" href="https://github.com/Picorims/audio-visualization-tauri">prototype</a></strong></li>
		<li><strong><a target="_blank" href="https://github.com/Picorims/wav2bar-reborn">rewrite (WIP)</a></strong></li>
	</ul>
</section>
