<script lang="ts">
	import Project from '$lib/Project.svelte';
	import w2bThumb from '$lib/assets/project_thumbnails/wav2bar_background.jpg';
	import plantThumb from '$lib/assets/project_thumbnails/plant_background.jpg';
	import cursorophoneThumb from '$lib/assets/project_thumbnails/cursorophone_background.png';
	import { Tech } from '$lib/TechList.svelte';
	import { ProjectInfo } from '$lib/project_info';
</script>

<h1>Development</h1>

<section id="projects-section">
	<h2>Projects</h2>
	<div id="projects">
		<Project
			shadowColor="rgba(240,16,120,1)"
			projectInfo={ProjectInfo.thisWebsite}
		>
			From a single HTML file to a Svelte static website.
		</Project>

		<Project
			href="/development/project/wav2bar"
			shadowColor="#06a4fa"
			projectInfo={ProjectInfo.wav2bar}
		>
			A free, open source audio visualizer creator. Add visualizers, timers, particle flows, images,
			backgrounds, text, etc; and export your work as a production ready video.
		</Project>

		<Project
			href="https://github.com/Picorims/directogallery"
            projectInfo={ProjectInfo.directogallery}
			shadowColor="#0a91d4"
		>
			Application to browse a file system directory as a gallery.
		</Project>
        
		<Project
			projectInfo={ProjectInfo.tripDashboard}
			shadowColor="#ffb800"
		>
			Customizable dashboard (size and position of cards) designed to display data about a given location. 
		</Project>
        
		<Project
			href="https://github.com/Picorims/app3-transverse-billiard"
			projectInfo={ProjectInfo.billiard}
			shadowColor="#e29400"
		>
			Billiard made from scratch, including the rendering of the objects through glu and the development
            of a simple 3D engine.
		</Project>
        
		<Project
			projectInfo={ProjectInfo.compilator}
		>
			A compilator for a subset of C. It supports integers, variables, conditionals, for and while loops,
			functions, pointers and arrays.
		</Project>
        
		<Project
			projectInfo={ProjectInfo.projector}
		>
			A projector supporting static image and video display, with a resolution of 100x100 and a framerate
			of 10fps. I contributed to the development of the video preprocessing, and pixel handling inside
			microcontrollers.
		</Project>
        
		<Project
			href="https://github.com/Picorims/plant-game"
			shadowColor="#26df4e"
			projectInfo={ProjectInfo.plant}
		>
			A two players strategy game about growing plants in a small grid. Grow in a smart way to block
			your opponent from growing further. Maximize your score by taking advantage of various
			bonuses.
		</Project>
        
		<Project
			href="https://picorims.github.io/cursorophone"
			shadowColor="#625a8f"
			projectInfo={ProjectInfo.cursorophone}
		>
			Play music with your mouse on a keyboard like layout. Keep your mouse click down (or
			spacebar), and slide it to play. Customize the sound to your needs.
		</Project>

		<Project
			href="https://github.com/Picorims/spotify-playlist-analyzer"
			projectInfo={ProjectInfo.spotifyAnalyzer}
		>
			Explore all kind of data about a given spotify playlist. All results are provided
            through an exported PDF file and additional CSV indexes.
		</Project>

		<Project
			href="https://github.com/Picorims/the-melodic-chrono"
			projectInfo={ProjectInfo.melodicChrono}
			shadowColor="#bb86fc"
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
