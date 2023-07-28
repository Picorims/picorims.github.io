<script lang="ts">
	import Project from '$lib/Project.svelte';
	import w2bThumb from '$lib/assets/project_thumbnails/wav2bar_background.jpg';
	import plantThumb from '$lib/assets/project_thumbnails/plant_background.jpg';
	import cursorophoneThumb from '$lib/assets/project_thumbnails/cursorophone_background.png';
	import { Tech } from '$lib/TechList.svelte';
</script>

<h1>Development</h1>

<section id="projects-section">
	<h2>Projects</h2>
	<div id="projects">
		<Project
			title="Wav2Bar"
			href="https://picorims.github.io/wav2bar-website/"
			shadowColor="#06a4fa"
			background={w2bThumb}
			techList={[Tech.js, Tech.css, Tech.html, Tech.electron]}
		>
			A free, open source audio visualizer creator. Add visualizers, timers, particle flows, images,
			backgrounds, text, etc; and export your work as a production ready video.
		</Project>
		<Project
			title="Plant"
			href="https://github.com/Picorims/plant-game"
			shadowColor="#26df4e"
			background={plantThumb}
            techList={[Tech.js, Tech.css, Tech.html, Tech.electron]}
		>
			A two players strategy game about growing plants in a small grid. Grow in a smart way to block
			your opponent from growing further. Maximize your score by taking advantage of various
			bonuses.
		</Project>
		<Project
			title="Cursorophone"
			href="https://picorims.github.io/cursorophone"
			shadowColor="#625a8f"
			background={cursorophoneThumb}
            techList={[Tech.js, Tech.css, Tech.html]}
		>
			Play music with your mouse on a keyboard like layout. Keep your mouse click down (or
			spacebar), and slide it to play. Customize the sound to your needs.
		</Project>
	</div>
</section>

<style>
	#projects {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		/* align-items: stretch; */
		padding: 0 10%;
		gap: 50px;
	}
</style>
