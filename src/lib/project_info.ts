import { Tag } from "./TagList.svelte";
import { Tech } from "./TechList.svelte";

import w2bThumb from '$lib/assets/project_thumbnails/wav2bar_background.jpg';
import w2bThumbSmall from '$lib/assets/project_thumbnails/wav2bar_background@thumb.jpg';
import plantThumb from "$lib/assets/project_thumbnails/plant_background.jpg";
import plantThumbSmall from "$lib/assets/project_thumbnails/plant_background@thumb.jpg";
import cursoThumb from "$lib/assets/project_thumbnails/cursorophone_background.png";
import cursoThumbSmall from "$lib/assets/project_thumbnails/cursorophone_background@thumb.png";
import dashboardThumb from "$lib/assets/project_thumbnails/trip_dashboard_background.jpg";
import dashboardThumbSmall from "$lib/assets/project_thumbnails/trip_dashboard_background@thumb.jpg";
import directoThumb from "$lib/assets/project_thumbnails/directogallery_background.png";
import directoThumbSmall from "$lib/assets/project_thumbnails/directogallery_background@thumb.png";
import billardThumb from "$lib/assets/project_thumbnails/billiard_background.png";
import billardThumbSmall from "$lib/assets/project_thumbnails/billiard_background@thumb.png";
import playlistThumb from "$lib/assets/project_thumbnails/playlist_analyzer_background.png";
import playlistThumbSmall from "$lib/assets/project_thumbnails/playlist_analyzer_background@thumb.png";
import chronoThumb from "$lib/assets/project_thumbnails/melodic_chrono_background.jpg";
import chronoThumbSmall from "$lib/assets/project_thumbnails/melodic_chrono_background@thumb.jpg";
import stationThumb from "$lib/assets/project_thumbnails/station_games_background.jpg";
import stationThumbSmall from "$lib/assets/project_thumbnails/station_games_background@thumb.jpg";
import gpsThumb from "$lib/assets/project_thumbnails/gps_background.png";
import gpsThumbSmall from "$lib/assets/project_thumbnails/gps_background@thumb.png";
import iconMakerThumb from "$lib/assets/project_thumbnails/desktop_icon_maker_background.png";
import iconMakerThumbSmall from "$lib/assets/project_thumbnails/desktop_icon_maker_background@thumb.png";
import projectorThumb from "$lib/assets/project_thumbnails/projector_background.png";
import shader3dThumb from "$lib/assets/project_thumbnails/shader_3d_background.png";
import shader3dThumbSmall from "$lib/assets/project_thumbnails/shader_3d_background@thumb.png";
import shader2dThumb from "$lib/assets/project_thumbnails/shader_2d_background.png";
import shader2dThumbSmall from "$lib/assets/project_thumbnails/shader_2d_background@thumb.png";
import broccolEVRThumb from "$lib/assets/project_thumbnails/broccole_vr_background.png";
import broccolEVRThumbSmall from "$lib/assets/project_thumbnails/broccole_vr_background@thumb.png";
import fr2phonAIThumb from "$lib/assets/project_thumbnails/fr2phon_ai_background.png";
import broccoliiThumb from "$lib/assets/project_thumbnails/broccolii_background.png";
import broccoliiThumbSmall from "$lib/assets/project_thumbnails/broccolii_background@thumb.png";
import brocampiaThumb from "$lib/assets/project_thumbnails/brocampia_background.png";
import brocampiaThumbSmall from "$lib/assets/project_thumbnails/brocampia_background@thumb.png";
import bruicolisThumb from "$lib/assets/project_thumbnails/bruicolis_background.png";
import bruicolisThumbSmall from "$lib/assets/project_thumbnails/bruicolis_background@thumb.png";
import musicBlogThumb from "$lib/assets/project_thumbnails/music_blog_background.png";
import musicBlogThumbSmall from "$lib/assets/project_thumbnails/music_blog_background@thumb.png";
import bloggingKitThumb from "$lib/assets/project_thumbnails/blogging_kit_background.png";
import bloggingKitThumbSmall from "$lib/assets/project_thumbnails/blogging_kit_background@thumb.png";
import penpotPluginThumb from "$lib/assets/project_thumbnails/penpot_plugin_background.png";
import penpotPluginThumbSmall from "$lib/assets/project_thumbnails/penpot_plugin_background@thumb.png";
import cubicAdventureThumb from "$lib/assets/project_thumbnails/cubic_adventure_background.png";
import openStreetKartThumb from "$lib/assets/project_thumbnails/open_street_kart_background.png";
import openStreetKartThumbSmall from "$lib/assets/project_thumbnails/open_street_kart_background.png@thumb.png"

import pzThumb from "$lib/assets/project_thumbnails/project_zearth_background.jpg";
import pzThumbSmall from "$lib/assets/project_thumbnails/project_zearth_background@thumb.jpg";
import dvThumb from "$lib/assets/project_thumbnails/divercity_background.png";

export type ProjectCategory = "dev" | "minecraft" | "music"

export interface ProjectData {
    readonly categories: ProjectCategory[]
    readonly name: string,
    readonly tech: Array<Tech>,
    readonly year: string,
    readonly tags: Array<Tag>,
    readonly thumbnail?: string,
    readonly thumbnailSmall?: string,
    readonly shadowColor?: string,
    readonly href?: string,
    readonly description?: string,
}

export const ProjectInfo: {[index: string]: ProjectData} = {
    //dev =======================
    thisWebsite: {
        categories: ["dev"],
        name: "This website!",
        tech: [Tech.ts, Tech.css, Tech.html, Tech.svelte],
        year: "2019-now",
        tags: [Tag.personal, Tag.public],
        shadowColor: "rgba(240,16,120,1)",
        description: "From a single HTML file to a Svelte static website.",
    },
    wav2bar: {
        categories: ["dev", "music"],
        name: "Wav2Bar",
        tech: [Tech.ts, Tech.tauri, Tech.svelte, Tech.rust, Tech.js, Tech.css, Tech.html, Tech.electron, Tech.hexo, Tech.mocha, Tech.chai, Tech.ffmpeg],
        year: "2019-now",
        tags: [Tag.personal, Tag.heavy, Tag.public],
        thumbnail: w2bThumb,
        thumbnailSmall: w2bThumbSmall,
        shadowColor: "#06a4fa",
        href: "/development/project/wav2bar",
        description: "A free, open source audio visualizer creator. Add visualizers, timers, particle flows, images, backgrounds, text, etc; and export your work as a production ready video."
    },
    tripDashboard: {
        categories: ["dev"],
        name: "Trip planification dashboard",
        tech: [Tech.ts, Tech.css, Tech.scss, Tech.html, Tech.angular, Tech.php, Tech.mariadb, Tech.xampp],
        year: "2022-2023",
        tags: [Tag.team, Tag.university],
        thumbnail: dashboardThumb,
        thumbnailSmall: dashboardThumbSmall,
        href: "/development/project/trip_planification_dashboard",
        shadowColor: "#ffb800",
        description: "Customizable dashboard (size and position of cards) designed to display data about a given location."
    },
    billiard: {
        categories: ["dev"],
        name: "Billiard",
        tech: [Tech.cpp, Tech.opengl],
        year: "2023",
        tags: [Tag.team, Tag.university],
        thumbnail: billardThumb,
        thumbnailSmall: billardThumbSmall,
        href: "/development/project/billiard",
        shadowColor: "#01e300",
        description: "Billiard made from scratch, including the rendering of the objects through glu and the development of a simple 3D engine."
    },
    compiler: {
        categories: ["dev"],
        name: "C subset compiler",
        tech: [Tech.js, Tech.ts, Tech.mocha],
        year: "2023",
        tags: [Tag.team, Tag.university],
        description: "A compiler for a subset of C. It supports integers, variables, conditionals, for and while loops, functions, pointers and arrays."
    },
    projector: {
        categories: ["dev"],
        name: "Projector",
        tech: [Tech.cpp, Tech.ffmpeg, Tech.raspberrypi],
        year: "2023",
        tags: [Tag.team, Tag.university, Tag.heavy],
        thumbnail: projectorThumb,
        href: "/development/project/projector",
        description: "A projector supporting static image and video display, with a resolution of 100x100 and a framerate of 10fps. I contributed to the development of the video preprocessing, and pixel handling inside microcontrollers."
    },
    shader3D: {
        categories: ["dev"],
        name: "3D shader - Infinite islands",
        tech: [Tech.glsl],
        year: "2025",
        tags: [Tag.university, Tag.public, Tag.heavy],
        thumbnail: shader3dThumb,
        thumbnailSmall: shader3dThumbSmall,
        href: "https://www.shadertoy.com/view/Wf3XR7",
        shadowColor: "#64ccf5",
        description: "An infinite 3D GLSL landscape made out of SDFs (Signed Distance Functions). WARNING: link to the project is resource intensive!"
    },
    shader2D: {
        categories: ["dev"],
        name: "2D shader - Sunset on water",
        tech: [Tech.glsl],
        year: "2025",
        tags: [Tag.university, Tag.public, Tag.heavy],
        thumbnail: shader2dThumb,
        thumbnailSmall: shader2dThumbSmall,
        href: "https://www.shadertoy.com/view/tXfGDB",
        shadowColor: "#5e00b2",
        description: "A 2D GLSL landscape made out of SDFs (Signed Distance Functions). WARNING: link to the project may be resource intensive on mobile!"
    },
    broccolii: {
        categories: ["dev"],
        name: "Broccolii - 2D live multiplayer keyboard game",
        tech: [Tech.ts, Tech.html, Tech.css, Tech.react, Tech.python, Tech.fastapi, Tech.docker, Tech.sqlite],
        year: "2024-2025",
        tags: [Tag.team, Tag.university, Tag.heavy],
        thumbnail: broccoliiThumb,
        thumbnailSmall: broccoliiThumbSmall,
        href: "https://github.com/Picorims/app5-broccolii",
        shadowColor: "#37e04d",
        description: "A 2D live multiplayer game where a bunch of words are displayed on the screen, and players need to write them as fast as possible. Worked on the websocket server, UI design, token based login system, as well as Temporarily deploying online with Docker to test with the class during demo."
    },
    openStreetKart: {
        categories: ["dev"],
        name: "Open Street Kart - Kart game with real world maps",
        tech: [Tech.godot, Tech.openstreetmap],
        year: "2025-now",
        tags: [Tag.personal, Tag.public, Tag.heavy],
        thumbnail: openStreetKartThumb,
        thumbnailSmall: openStreetKartThumbSmall,
        href: "https://picorims.itch.io/open-street-kart",
        shadowColor: "#0ef39f",
        description: "An open-source arcade karting game where you drive in procedurally recreated real world places."
    },
    broccolEVR: {
        categories: ["dev"],
        name: "Broccol-E - VR game",
        tech: [Tech.csharp, Tech.unity, Tech.pico],
        year: "2024-2025",
        tags: [Tag.team, Tag.university, Tag.heavy],
        thumbnail: broccolEVRThumb,
        thumbnailSmall: broccolEVRThumbSmall,
        href: "https://github.com/nano1342/Broccol-E",
        shadowColor: "#2aeecd",
        description: "A VR game where you need to survive as long as possible by completing missions involving object target and manipulation. The player moves by teleporting to glowing cylinders. I worked on a dynamic 3D vessel map, menus, random mission picking, dynamic music based on time left, and sounds."
    },
    fr2phonAI: {
        categories: ["dev"],
        name: "Fr2PhonAI - French to phonetic transcription AI",
        tech: [Tech.python, Tech.scikitlearn],
        year: "2024",
        tags: [Tag.university, Tag.team, Tag.heavy],
        thumbnail: fr2phonAIThumb,
        href: "https://github.com/Picorims/app5-ai-french-phonetics",
        description: "AI CLI sequence to sequence model that converts French text to phonetic transcription, based on existing tutorials and Open Lexicon data. It uses an encoder-decoder model with LSTM (Long short-term memory) layers. Best reached rate is around 50% accuracy on a test set of 1000 words, with mistakes equivalent to those of a young child."
    },
    brocampia: {
        categories: ["dev"],
        name: "Brocampia - Escampe/Mana MinMax tree based AI",
        tech: [Tech.java],
        year: "2025",
        tags: [Tag.university, Tag.team],
        thumbnail: brocampiaThumb,
        thumbnailSmall: brocampiaThumbSmall,
        shadowColor: "#f4d9a2",
        description: 'Decision tree based "old school" AI for the game Escampe (also known as Mana). UI and client server interaction were provided.'
    },
    stationGames: {
        categories: ["dev"],
        name: "Station Games",
        tech: [Tech.ts, Tech.js, Tech.css, Tech.html, Tech.svelte, Tech.leaflet],
        year: "2023",
        tags: [Tag.personal, Tag.public],
        thumbnail: stationThumb,
        thumbnailSmall: stationThumbSmall,
        shadowColor: "#77CBD5",
        href: "https://picorims.github.io/station-games",
        description: "A game about guessing all subway, train, tramway and bus stations of Ile-De-France. The game's database is obtained from Ile-De-France Mobilités' open data files. See in-game information for more details."
    },
    localGps: {
        categories: ["dev"],
        name: "Local GPS",
        tech: [Tech.ts, Tech.css, Tech.html, Tech.svelte],
        year: "2024",
        tags: [Tag.personal, Tag.public],
        thumbnail: gpsThumb,
        thumbnailSmall: gpsThumbSmall,
        href: "https://picorims.github.io/network-graph-display/",
        description: "Display a network graph on top of a given background, and allow to perform Dijkstra's algorithm on selected nodes. Built on top of the network graph from bitmap project."
    },
    networkGraphFromBitmap: {
        categories: ["dev"],
        name: "Network graph from bitmap image",
        tech: [Tech.python, Tech.numpy, Tech.svelte, Tech.html, Tech.css, Tech.ts],
        year: "2024",
        tags: [Tag.personal, Tag.public],
        href: "https://github.com/Picorims/network-graph-display",
        description: "Transform a bitmap image into a non directed weighted network graph, and display it using a web viewer to perform Dijkstra's algorithm on selected nodes."
    },
    bruicolis: {
        categories: ["dev"],
        name: "Bruicolis - Playlist management API and frontend",
        tech: [Tech.ts, Tech.css, Tech.html, Tech.svelte, Tech.prisma, Tech.sqlite, Tech.express],
        year: "2025",
        tags: [Tag.university, Tag.team, Tag.heavy],
        thumbnail: bruicolisThumb,
        thumbnailSmall: bruicolisThumbSmall,
        href: "https://github.com/Picorims/app5-bruicolis-front",
        shadowColor: "#0cba80",
        description: "Developed the front-end of a web application to manage a library of music tracks, and make tag ased playlists. Contributed a bit to the back-end routes (clean architecture, REST API), but didn't work on its architecture."
    },
    bloggingKit: {
        categories: ["dev"],
        name: "Svelte blogging kit",
        tech: [Tech.ts, Tech.css, Tech.html, Tech.svelte],
        year: "2024-2025",
        tags: [Tag.personal, Tag.public],
        thumbnail: bloggingKitThumb,
        thumbnailSmall: bloggingKitThumbSmall,
        href: "https://picorims.github.io/svelte-blogging-kit/",
        description: 'Simple svelte library to help creating blog post pages (only). Not production ready, wrote only for the purpose of powering my blog "Your first music track" (showcased on the music page).'
    },
    directogallery: {
        categories: ["dev"],
        name: "Directogallery",
        tech: [Tech.ts, Tech.css, Tech.html, Tech.tauri, Tech.rust, Tech.svelte],
        year: "2023",
        tags: [Tag.personal],
        thumbnail: directoThumb,
        thumbnailSmall: directoThumbSmall,
        href: "https://github.com/Picorims/directogallery",
        shadowColor: "#0a91d4",
        description: "Application to browse a file system directory as a gallery."
    },
    penpotPlugin: {
        categories: ["dev"],
        name: "Penpot plugin",
        tech: [Tech.ts, Tech.css, Tech.html, Tech.svelte],
        year: "2024",
        tags: [Tag.personal, Tag.public],
        thumbnail: penpotPluginThumb,
        thumbnailSmall: penpotPluginThumbSmall,
        href: "https://penpot.app/penpothub/plugins/tiling-utility",
        shadowColor: "#31efb8",
        description: "Penpot plugin contest entry, allowing to create a grid or revolution patterns from a source element, with support for offsets and randomization."
    },
    imageAnnotationTool: {
        categories: ["dev"],
        name: "Image annotation software",
        tech: [Tech.vbnet],
        year: "2021",
        tags: [Tag.university, Tag.team],
        description: "This software allows to place points for the different features of a face, to then compare a face with other faces and display the closest one. The focus was on creating a great user interface and experience."
    },
    plant: {
        categories: ["dev"],
        name: "Plant",
        tech: [Tech.js, Tech.css, Tech.html, Tech.electron, Tech.p5],
        year: "2019-2020",
        tags: [Tag.personal, Tag.heavy, Tag.public],
        thumbnail: plantThumb,
        thumbnailSmall: plantThumbSmall,
        href: "https://github.com/Picorims/plant-game",
        shadowColor: "#26df4e",
        description: "A two players strategy game about growing plants in a small grid. Grow in a smart way to block your opponent from growing further. Maximize your score by taking advantage of various bonuses."
    },
    cursorophone: {
        categories: ["dev"],
        name: "Cursorophone",
        tech: [Tech.js, Tech.css, Tech.html],
        year: "2021",
        tags: [Tag.personal, Tag.public],
        thumbnail: cursoThumb,
        thumbnailSmall: cursoThumbSmall,
        href: "https://picorims.github.io/cursorophone",
        shadowColor: "#625a8f",
        description: "Play music with your mouse on a keyboard like layout. Keep your mouse click down (or spacebar), and slide it to play. Customize the sound to your needs."
    },
    spotifyAnalyzer: {
        categories: ["dev"],
        name: "Spotify playlist analyzer",
        tech: [Tech.python, Tech.numpy, Tech.pandas],
        year: "2022-2023",
        tags: [Tag.personal, Tag.public],
        thumbnail: playlistThumb,
        thumbnailSmall: playlistThumbSmall,
        href: "https://github.com/Picorims/spotify-playlist-analyzer",
        description: "Explore all kind of data about a given spotify playlist. All results are provided through an exported PDF file and additional CSV indexes."
    },
    desktopIconMaker: {
        categories: ["dev"],
        name: "Desktop icon maker",
        tech: [Tech.ts, Tech.css, Tech.html, Tech.svelte],
        year: "2024",
        tags: [Tag.personal, Tag.public],
        thumbnail: iconMakerThumb,
        thumbnailSmall: iconMakerThumbSmall,
        href: "https://picorims.github.io/desktop-icon-maker/",
        description: "A small tool to generate a desktop icon (or whatever other purpose) as .ico, .png or .jpeg file. The user can provide a svg document, and customize the appearance (colors, size, padding, radius, etc)."
    },
    melodicChrono: {
        categories: ["dev"],
        name: "The Melodic Chrono",
        tech: [Tech.android, Tech.java],
        year: "2022",
        tags: [Tag.personal, Tag.public],
        thumbnail: chronoThumb,
        thumbnailSmall: chronoThumbSmall,
        href: "https://github.com/Picorims/the-melodic-chrono",
        shadowColor: "#bb86fc",
        description: "Very basic application to play sequence of notes synchronized with a chronometer, allowing to know its progression without having to turn on the phone."
    },

    // minecraft =======================

    projectZearth: {
        categories: ["minecraft"],
        name: "Project Zearth",
        tech: [],
        year: "2017-now",
        tags: [Tag.team, Tag.personal, Tag.heavy, Tag.public],
        thumbnail: pzThumb,
        thumbnailSmall: pzThumbSmall,
        href: "https://project-zearth.com/",
        shadowColor: "#e53b44",
        description: "Member of the Project Zearth team, one of the oldest Minecraft city map still actively maintained. Come have fun with us!"
    },
    divercity: {
        categories: ["minecraft"],
        name: "Divercity",
        tech: [],
        year: "2015-2020",
        tags: [Tag.heavy, Tag.personal, Tag.public],
        thumbnail: dvThumb,
        href: "https://www.planetminecraft.com/project/divercity-alpha-1-0-city-map-est-2015-2019/",
        shadowColor: "#1ea7b2",
        description: "An old personal Minecraft city map project. If you want to try it out, pick the unfinished version linked in the description of the map."
    },

    // music =======================
    youtubeMusic: {
        categories: ["music"],
        name: "Picorims music - Youtube",
        tech: [],
        year: "2017",
        tags: [Tag.personal, Tag.public],
        href: "https://www.youtube.com/channel/UCu3xe8VjndEcPF1EYGAaTKg/videos",
        description: "Some finished tracks are available here."
    },

    yourFirstMusicTrack: {
        categories: ["music"],
        name: "Your first music track",
        tech: [],
        year: "2024-2025",
        tags: [Tag.university, Tag.public, Tag.heavy],
        thumbnail: musicBlogThumb,
        thumbnailSmall: musicBlogThumbSmall,
        shadowColor: "#ffe493",
        href: "https://your-first-music-track.weebly.com/",
        description: "University English blog introducing music composition and production to people unfamiliar with music theory."
    },

    cubicAdventure: {
        categories: ["music"],
        name: "Cubic Adventure",
        tech: [],
        year: "2025",
        tags: [Tag.personal, Tag.heavy, Tag.public],
        thumbnail: cubicAdventureThumb,
        href: "https://www.youtube.com/watch?v=ql_KpshKHP0",
        shadowColor: "#64f14f",
        description: "A 13 minute long music track and video I made to explore concept music for the Minecraft Community Movie. Album art is also by me (made with Inkscape, not AI ;) )."
    }
}