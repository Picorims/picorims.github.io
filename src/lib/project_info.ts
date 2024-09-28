import { Tag } from "./TagList.svelte";
import { Tech } from "./TechList.svelte";

import w2bThumb from '$lib/assets/project_thumbnails/wav2bar_background.jpg';
import plantThumb from "$lib/assets/project_thumbnails/plant_background.jpg";
import cursoThumb from "$lib/assets/project_thumbnails/cursorophone_background.png";
import dashboardThumb from "$lib/assets/project_thumbnails/trip_dashboard_background.jpg";
import directoThumb from "$lib/assets/project_thumbnails/directogallery_background.png";
import billardThumb from "$lib/assets/project_thumbnails/billiard_background.png";
import playlistThumb from "$lib/assets/project_thumbnails/playlist_analyzer_background.png";
import chronoThumb from "$lib/assets/project_thumbnails/melodic_chrono_background.jpg";
import stationThumb from "$lib/assets/project_thumbnails/station_games_background.jpg";
import gpsThumb from "$lib/assets/project_thumbnails/gps_background.png";
import iconMakerThumb from "$lib/assets/project_thumbnails/desktop_icon_maker_background.png";
import projectorThumb from "$lib/assets/project_thumbnails/projector_background.png";

import pzThumb from "$lib/assets/project_thumbnails/project_zearth_background.jpg";
import dvThumb from "$lib/assets/project_thumbnails/divercity_background.png";

export interface ProjectData {
    readonly name: string,
    readonly tech: Array<Tech>,
    readonly year: string,
    readonly tags: Array<Tag>,
    readonly thumbnail?: string
}

export const ProjectInfo: {[index: string]: ProjectData} = {
    //dev =======================
    thisWebsite: {
        name: "This website!",
        tech: [Tech.ts, Tech.css, Tech.html, Tech.svelte],
        year: "2019-2023",
        tags: [Tag.personal, Tag.public],
    },
    wav2bar: {
        name: "Wav2Bar",
        tech: [Tech.js, Tech.css, Tech.html, Tech.electron, Tech.hexo, Tech.mocha, Tech.chai, Tech.ffmpeg],
        year: "2019-2023",
        tags: [Tag.personal, Tag.heavy, Tag.public],
        thumbnail: w2bThumb
    },
    directogallery: {
        name: "Directogallery",
        tech: [Tech.ts, Tech.css, Tech.html, Tech.tauri, Tech.rust, Tech.svelte],
        year: "2023",
        tags: [Tag.personal],
        thumbnail: directoThumb
    },
    tripDashboard: {
        name: "Trip planification dashboard",
        tech: [Tech.ts, Tech.css, Tech.scss, Tech.html, Tech.angular, Tech.php, Tech.mariadb, Tech.xampp],
        year: "2022-2023",
        tags: [Tag.team, Tag.university],
        thumbnail: dashboardThumb
    },
    billiard: {
        name: "Billiard",
        tech: [Tech.cpp, Tech.opengl],
        year: "2023",
        tags: [Tag.team, Tag.university],
        thumbnail: billardThumb
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
    stationGames: {
        name: "Station Games",
        tech: [Tech.ts, Tech.js, Tech.css, Tech.html, Tech.svelte, Tech.leaflet],
        year: "2023",
        tags: [Tag.personal, Tag.public],
        thumbnail: stationThumb,
    },
    localGps: {
        name: "Local GPS",
        tech: [Tech.ts, Tech.css, Tech.html, Tech.svelte],
        year: "2024",
        tags: [Tag.personal, Tag.public],
        thumbnail: gpsThumb
    },
    networkGraphFromBitmap: {
        name: "Network graph from bitmap image",
        tech: [Tech.python, Tech.numpy, Tech.svelte, Tech.html, Tech.css, Tech.ts],
        year: "2024",
        tags: [Tag.personal, Tag.public]
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
    },
    cursorophone: {
        name: "Cursorophone",
        tech: [Tech.js, Tech.css, Tech.html],
        year: "2021",
        tags: [Tag.personal, Tag.public],
        thumbnail: cursoThumb,
    },
    spotifyAnalyzer: {
        name: "Spotify playlist analyzer",
        tech: [Tech.python, Tech.numpy, Tech.pandas],
        year: "2022-2023",
        tags: [Tag.personal, Tag.public],
        thumbnail: playlistThumb
    },
    desktopIconMaker: {
        name: "Desktop icon maker",
        tech: [Tech.ts, Tech.css, Tech.html, Tech.svelte],
        year: "2024",
        tags: [Tag.personal, Tag.public],
        thumbnail: iconMakerThumb
    },
    melodicChrono: {
        name: "The Melodic Chrono",
        tech: [Tech.android],
        year: "2022",
        tags: [Tag.personal, Tag.public],
        thumbnail: chronoThumb
    },

    // minecraft =======================

    projectZearth: {
        name: "Project Zearth",
        tech: [],
        year: "2017-now",
        tags: [Tag.team, Tag.personal, Tag.heavy, Tag.public],
        thumbnail: pzThumb
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
    }
}