<script lang="ts">
	import Project from '$lib/Project.svelte';
	import w2bThumb from '$lib/assets/project_thumbnails/wav2bar_background.jpg';
	import plantThumb from '$lib/assets/project_thumbnails/plant_background.jpg';
	import cursorophoneThumb from '$lib/assets/project_thumbnails/cursorophone_background.png';
	import { Tech } from '$lib/TechList.svelte';
	import { TechLists } from '$lib/techlists';
</script>

<h1>Development</h1>

<section id="projects-section">
	<h2>Projects</h2>
	<div id="projects">
		<Project
			title="Wav2Bar"
			href="/development/project/wav2bar"
			shadowColor="#06a4fa"
			background={w2bThumb}
			techList={TechLists.wav2bar}
		>
			A free, open source audio visualizer creator. Add visualizers, timers, particle flows, images,
			backgrounds, text, etc; and export your work as a production ready video.
		</Project>

		<Project
			title="Directogallery"
			href="https://github.com/Picorims/directogallery"
            techList={[Tech.ts, Tech.css, Tech.html, Tech.tauri, Tech.rust, Tech.svelte]}
		>
			Application to browse a file system directory as a gallery.
		</Project>
        
		<Project
			title="Trip planification dashboard"
            techList={[Tech.ts, Tech.css, Tech.scss, Tech.html, Tech.angular, Tech.php, Tech.mariadb]}
		>
			Customizable dashboard (size and position of cards) designed to display data about a given location. 
		</Project>
        
		<Project
			title="Billiard"
            techList={[Tech.cpp, Tech.opengl]}
		>
			Billiard made from scratch, including the rendering of the objects through glu and the development
            of a simple 3D engine.
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

		<Project
			title="Spotify playlist analyzer"
			href="https://github.com/Picorims/spotify-playlist-analyzer"
            techList={[Tech.python]}
		>
			Explore all kind of data about a given spotify playlist. All results are provided
            through an exported PDF file and additional CSV indexes.
		</Project>

		<Project
			title="The Melodic Chrono"
			href="https://github.com/Picorims/spotify-playlist-analyzer"
            techList={[Tech.android]}
		>
			Very basic application to play sequence of notes synchronized with a chronometer,
            allowing to know its progression without having to turn on the phone.
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
