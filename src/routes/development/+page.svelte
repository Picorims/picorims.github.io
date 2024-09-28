<script lang="ts">
	import Project from '$lib/Project.svelte';
	import { ProjectInfo } from '$lib/project_info';
	import ProjectList from '$lib/ProjectList.svelte';
</script>

<h1>Development</h1>

<section id="projects-section">
	<h2>Projects</h2>
	<ProjectList>
		<Project
			shadowColor="rgba(240,16,120,1)"
			projectInfo={ProjectInfo.thisWebsite}
		>
			From a single HTML file to a Svelte static website.
		</Project>

		<!--Also in music-->
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
			projectInfo={ProjectInfo.compiler}
		>
			A compiler for a subset of C. It supports integers, variables, conditionals, for and while loops,
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
			href="https://picorims.github.io/station-games"
			shadowColor="#77CBD5"
			projectInfo={ProjectInfo.stationGames}
		>
			A game about guessing all subway, train, tramway and bus stations of Ile-De-France.
			The game's database is obtained from Ile-De-France Mobilités' open data files.
			See in-game information for more details.
		</Project>

		<Project
			href="https://picorims.github.io/network-graph-display/"
			projectInfo={ProjectInfo.localGps}
		>
			Display a network graph on top of a given background, and allow to perform
			Dijkstra's algorithm on selected nodes. Built on top of the network graph from bitmap project.
		</Project>

		<Project
			href="https://github.com/Picorims/network-graph-display"
			projectInfo={ProjectInfo.networkGraphFromBitmap}
		>
			Transform a bitmap image into a non directed weighted network graph, and display it
			using a web viewer to perform Dijkstra's algorithm on selected nodes.
		</Project>

		<Project
			projectInfo={ProjectInfo.imageAnnotationTool}
		>
			This software allows to place points for the different features of a face, to then compare
			a face with other faces and display the closest one. The focus was on creating a great user
			interface and experience.
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
			href="https://picorims.github.io/desktop-icon-maker/"
			projectInfo={ProjectInfo.desktopIconMaker}
		>
			A small tool to generate a desktop icon (or whatever other purpose)
			as .ico, .png or .jpeg file. The user can provide a svg document, and
			customize the appearance (colors, size, padding, radius, etc).
		</Project>

		<Project
			href="https://github.com/Picorims/the-melodic-chrono"
			projectInfo={ProjectInfo.melodicChrono}
			shadowColor="#bb86fc"
		>
			Very basic application to play sequence of notes synchronized with a chronometer,
			allowing to know its progression without having to turn on the phone.
		</Project>	
	</ProjectList>
</section>
