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

export interface ProjectData {
    readonly name: string,
    readonly tech: Array<Tech>,
    readonly year: string,
    readonly tags: Array<Tag>,
    readonly thumbnail?: string,
    readonly thumbnailSmall?: string,
}

export const ProjectInfo: {[index: string]: ProjectData} = {
    //dev =======================
    thisWebsite: {
        name: "This website!",
        tech: [Tech.ts, Tech.css, Tech.html, Tech.svelte],
        year: "2019-now",
        tags: [Tag.personal, Tag.public],
    },
    wav2bar: {
        name: "Wav2Bar",
        tech: [Tech.ts, Tech.tauri, Tech.svelte, Tech.rust, Tech.js, Tech.css, Tech.html, Tech.electron, Tech.hexo, Tech.mocha, Tech.chai, Tech.ffmpeg],
        year: "2019-now",
        tags: [Tag.personal, Tag.heavy, Tag.public],
        thumbnail: w2bThumb,
        thumbnailSmall: w2bThumbSmall
    },
    tripDashboard: {
        name: "Trip planification dashboard",
        tech: [Tech.ts, Tech.css, Tech.scss, Tech.html, Tech.angular, Tech.php, Tech.mariadb, Tech.xampp],
        year: "2022-2023",
        tags: [Tag.team, Tag.university],
        thumbnail: dashboardThumb,
        thumbnailSmall: dashboardThumbSmall
    },
    billiard: {
        name: "Billiard",
        tech: [Tech.cpp, Tech.opengl],
        year: "2023",
        tags: [Tag.team, Tag.university],
        thumbnail: billardThumb,
        thumbnailSmall: billardThumbSmall
    },
    compiler: {
        name: "C subset compiler",
        tech: [Tech.js, Tech.ts, Tech.mocha],
        year: "2023",
        tags: [Tag.team, Tag.university],
    },
    projector: {
        name: "Projector",
        tech: [Tech.cpp, Tech.ffmpeg, Tech.raspberrypi],
        year: "2023",
        tags: [Tag.team, Tag.university, Tag.heavy],
        thumbnail: projectorThumb
    },
    shader3D: {
        name: "3D shader - Infinite islands",
        tech: [Tech.glsl],
        year: "2025",
        tags: [Tag.university, Tag.public, Tag.heavy],
        thumbnail: shader3dThumb,
        thumbnailSmall: shader3dThumbSmall
    },
    shader2D: {
        name: "2D shader - Sunset on water",
        tech: [Tech.glsl],
        year: "2025",
        tags: [Tag.university, Tag.public, Tag.heavy],
        thumbnail: shader2dThumb,
        thumbnailSmall: shader2dThumbSmall
    },
    broccolii: {
        name: "Broccolii - 2D live multiplayer keyboard game",
        tech: [Tech.ts, Tech.html, Tech.css, Tech.react, Tech.python, Tech.fastapi, Tech.docker, Tech.sqlite],
        year: "2024-2025",
        tags: [Tag.team, Tag.university, Tag.heavy],
        thumbnail: broccoliiThumb,
        thumbnailSmall: broccoliiThumbSmall
    },
    openStreetKart: {
        name: "Open Street Kart - Kart game with real world maps",
        tech: [Tech.godot, Tech.openstreetmap],
        year: "2025-now",
        tags: [Tag.personal, Tag.public, Tag.heavy],
        thumbnail: openStreetKartThumb,
        thumbnailSmall: openStreetKartThumbSmall,
    },
    broccolEVR: {
        name: "Broccol-E - VR game",
        tech: [Tech.csharp, Tech.unity, Tech.pico],
        year: "2024-2025",
        tags: [Tag.team, Tag.university, Tag.heavy],
        thumbnail: broccolEVRThumb,
        thumbnailSmall: broccolEVRThumbSmall
    },
    fr2phonAI: {
        name: "Fr2PhonAI - French to phonetic transcription AI",
        tech: [Tech.python, Tech.scikitlearn],
        year: "2024",
        tags: [Tag.university, Tag.team, Tag.heavy],
        thumbnail: fr2phonAIThumb
    },
    brocampia: {
        name: "Brocampia - Escampe/Mana MinMax tree based AI",
        tech: [Tech.java],
        year: "2025",
        tags: [Tag.university, Tag.team],
        thumbnail: brocampiaThumb,
        thumbnailSmall: brocampiaThumbSmall
    },
    stationGames: {
        name: "Station Games",
        tech: [Tech.ts, Tech.js, Tech.css, Tech.html, Tech.svelte, Tech.leaflet],
        year: "2023",
        tags: [Tag.personal, Tag.public],
        thumbnail: stationThumb,
        thumbnailSmall: stationThumbSmall
    },
    localGps: {
        name: "Local GPS",
        tech: [Tech.ts, Tech.css, Tech.html, Tech.svelte],
        year: "2024",
        tags: [Tag.personal, Tag.public],
        thumbnail: gpsThumb
        , thumbnailSmall: gpsThumbSmall
    },
    networkGraphFromBitmap: {
        name: "Network graph from bitmap image",
        tech: [Tech.python, Tech.numpy, Tech.svelte, Tech.html, Tech.css, Tech.ts],
        year: "2024",
        tags: [Tag.personal, Tag.public]
    },
    bruicolis: {
        name: "Bruicolis - Playlist management API and frontend",
        tech: [Tech.ts, Tech.css, Tech.html, Tech.svelte, Tech.prisma, Tech.sqlite, Tech.express],
        year: "2025",
        tags: [Tag.university, Tag.team, Tag.heavy],
        thumbnail: bruicolisThumb,
        thumbnailSmall: bruicolisThumbSmall
    },
    bloggingKit: {
        name: "Svelte blogging kit",
        tech: [Tech.ts, Tech.css, Tech.html, Tech.svelte],
        year: "2024-2025",
        tags: [Tag.personal, Tag.public],
        thumbnail: bloggingKitThumb,
        thumbnailSmall: bloggingKitThumbSmall
    },
    directogallery: {
        name: "Directogallery",
        tech: [Tech.ts, Tech.css, Tech.html, Tech.tauri, Tech.rust, Tech.svelte],
        year: "2023",
        tags: [Tag.personal],
        thumbnail: directoThumb,
        thumbnailSmall: directoThumbSmall
    },
    penpotPlugin: {
        name: "Penpot plugin",
        tech: [Tech.ts, Tech.css, Tech.html, Tech.svelte],
        year: "2024",
        tags: [Tag.personal, Tag.public],
        thumbnail: penpotPluginThumb,
        thumbnailSmall: penpotPluginThumbSmall
    },
    imageAnnotationTool: {
        name: "Image annotation software",
        tech: [Tech.vbnet],
        year: "2021",
        tags: [Tag.university, Tag.team]
    },
    plant: {
        name: "Plant",
        tech: [Tech.js, Tech.css, Tech.html, Tech.electron, Tech.p5],
        year: "2019-2020",
        tags: [Tag.personal, Tag.heavy, Tag.public],
        thumbnail: plantThumb,
        thumbnailSmall: plantThumbSmall
    },
    cursorophone: {
        name: "Cursorophone",
        tech: [Tech.js, Tech.css, Tech.html],
        year: "2021",
        tags: [Tag.personal, Tag.public],
        thumbnail: cursoThumb,
        thumbnailSmall: cursoThumbSmall
    },
    spotifyAnalyzer: {
        name: "Spotify playlist analyzer",
        tech: [Tech.python, Tech.numpy, Tech.pandas],
        year: "2022-2023",
        tags: [Tag.personal, Tag.public],
        thumbnail: playlistThumb,
        thumbnailSmall: playlistThumbSmall
    },
    desktopIconMaker: {
        name: "Desktop icon maker",
        tech: [Tech.ts, Tech.css, Tech.html, Tech.svelte],
        year: "2024",
        tags: [Tag.personal, Tag.public],
        thumbnail: iconMakerThumb,
        thumbnailSmall: iconMakerThumbSmall
    },
    melodicChrono: {
        name: "The Melodic Chrono",
        tech: [Tech.android, Tech.java],
        year: "2022",
        tags: [Tag.personal, Tag.public],
        thumbnail: chronoThumb,
        thumbnailSmall: chronoThumbSmall
    },

    // minecraft =======================

    projectZearth: {
        name: "Project Zearth",
        tech: [],
        year: "2017-now",
        tags: [Tag.team, Tag.personal, Tag.heavy, Tag.public],
        thumbnail: pzThumb,
        thumbnailSmall: pzThumbSmall
    },
    divercity: {
        name: "Divercity",
        tech: [],
        year: "2015-2020",
        tags: [Tag.heavy, Tag.personal, Tag.public],
        thumbnail: dvThumb
    },

    // music =======================
    youtubeMusic: {
        name: "Picorims music - Youtube",
        tech: [],
        year: "2017",
        tags: [Tag.personal, Tag.public],
    },

    yourFirstMusicTrack: {
        name: "Your first music track",
        tech: [],
        year: "2024-2025",
        tags: [Tag.university, Tag.public, Tag.heavy],
        thumbnail: musicBlogThumb,
        thumbnailSmall: musicBlogThumbSmall
    },

    cubicAdventure: {
        name: "Cubic Adventure",
        tech: [],
        year: "2025",
        tags: [Tag.personal, Tag.heavy, Tag.public],
        thumbnail: cubicAdventureThumb,
    }
}