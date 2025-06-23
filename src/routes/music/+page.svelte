<script lang="ts">
	import Project from '$lib/Project.svelte';
	import { ProjectInfo } from '$lib/project_info';
	import ProjectList from '$lib/ProjectList.svelte';
</script>

<h1>Music</h1>

<section>
	<p>
		Most of my music is private (sorry!), however some very few (rather old) tracks are available
		online. Maybe one day I'll publish old projects, who knows.
	</p>

	<ProjectList>
		<Project
			projectInfo={ProjectInfo.youtubeMusic}
			href="https://www.youtube.com/channel/UCu3xe8VjndEcPF1EYGAaTKg/videos"
		>
			Some finished tracks are available here.
		</Project>

		<Project
			projectInfo={ProjectInfo.yourFirstMusicTrack}
			shadowColor="#ffe493"
			href="https://your-first-music-track.weebly.com/"
		>
			University English blog introducing music composition and production to people unfamiliar with
			music theory.
		</Project>

		<!--Also in dev-->
		<Project
			href="/development/project/wav2bar"
			shadowColor="#06a4fa"
			projectInfo={ProjectInfo.wav2bar}
		>
			A free, open source audio visualizer creator. Add visualizers, timers, particle flows, images,
			backgrounds, text, etc; and export your work as a production ready video.
		</Project>

		<Project
			href="https://www.youtube.com/watch?v=ql_KpshKHP0"
			shadowColor="#64f14f"
			projectInfo={ProjectInfo.cubicAdventure}
		>
			A 13 minute long music track and video I made to explore concept music for the Minecraft Community Movie.
			Album art is also by me.
		</Project>
	</ProjectList>
</section>
