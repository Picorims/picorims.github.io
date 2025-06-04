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
			href="/development/project/trip_planification_dashboard"
			projectInfo={ProjectInfo.tripDashboard}
			shadowColor="#ffb800"
		>
			Customizable dashboard (size and position of cards) designed to display data about a given location. 
		</Project>
		
		<Project
			href="/development/project/billiard"
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
			href="/development/project/projector"
			projectInfo={ProjectInfo.projector}
		>
			A projector supporting static image and video display, with a resolution of 100x100 and a framerate
			of 10fps. I contributed to the development of the video preprocessing, and pixel handling inside
			microcontrollers.
		</Project>

		<Project
			href="https://www.shadertoy.com/view/Wf3XR7"
			projectInfo={ProjectInfo.shader3D}
			shadowColor="#64ccf5"
		>
			An infinite 3D GLSL landscape made out of SDFs (Signed Distance Functions). WARNING: link to the project is resource intensive!
		</Project>

		<Project
			href="https://www.shadertoy.com/view/tXfGDB"
			projectInfo={ProjectInfo.shader2D}
			shadowColor="#5e00b2"
		>
			A 2D GLSL landscape made out of SDFs (Signed Distance Functions). WARNING: link to the project may be resource intensive on mobile!
		</Project>

		<Project
			href="https://github.com/Picorims/app5-broccolii"
			projectInfo={ProjectInfo.broccolii}
			shadowColor="#37e04d"
		>
			A 2D live multiplayer game where a bunch of words are displayed on the screen, and players need to write them as fast as possible.
			Worked on the websocket server, UI design, token based login system, as well as Temporarily deploying online with Docker
			to test with the class during demo.
		</Project>

		<Project
			href="https://github.com/nano1342/Broccol-E"
			projectInfo={ProjectInfo.broccolEVR}
			shadowColor="#2aeecd"
		>
			A VR game where you need to survive as long as possible by completing missions involving object target and manipulation.
			The player moves by teleporting to glowing cylinders. I worked on a dynamic 3D vessel map, menus, random mission picking,
			dynamic music based on time left, and sounds.
		</Project>

		<Project
			href="https://github.com/Picorims/app5-ai-french-phonetics"
			projectInfo={ProjectInfo.fr2phonAI}
		>
			AI CLI sequence to sequence model that converts French text to phonetic transcription, based on existing tutorials
			and Open Lexicon data. It uses an encoder-decoder model with LSTM (Long short-term memory) layers.
			Best reached rate is around 50% accuracy on a test set of 1000 words, with mistakes equivalent to those of a young child.
		</Project>

		<Project
			projectInfo={ProjectInfo.brocampia}
		>
			Decision tree based "old school" AI for the game Escampe (also known as Mana).
			UI and client server interaction were provided.
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
			href="https://github.com/Picorims/app5-bruicolis-front"
			projectInfo={ProjectInfo.bruicolis}
		>
			Developed the front-end of a web application to manage a library of music tracks, and make tag based playlists.
			Contributed a bit to the back-end routes (clean architecture, REST API), but didn't work on its architecture.
		</Project>

		<Project
			href="https://picorims.github.io/svelte-blogging-kit/"
			projectInfo={ProjectInfo.bloggingKit}
		>
			Simple svelte library to help creating blog post pages (only). Not production ready,
			wrote only for the purpose of powering my blog "Your first music track"
			(showcased on the music page).
		</Project>

		<Project
			href="https://github.com/Picorims/directogallery"
			projectInfo={ProjectInfo.directogallery}
			shadowColor="#0a91d4"
		>
			Application to browse a file system directory as a gallery.
		</Project>

		<Project
			href="https://penpot.app/penpothub/plugins/tiling-utility"
			projectInfo={ProjectInfo.penpotPlugin}
			shadowColor="#31efb8"
		>
			Penpot plugin contest entry, allowing to create a grid or revolution patterns from a source element,
			with support for offsets and randomization.
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
