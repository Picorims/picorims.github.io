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

export interface ProjectData {
    readonly name: string,
    readonly tech: Array<Tech>,
    readonly year: string,
    readonly tags: Array<Tag>,
    readonly thumbnail?: string
}

export const ProjectInfo: {[index: string]: ProjectData} = {
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
    },
    stationGames: {
        name: "Station Games",
        tech: [Tech.ts, Tech.js, Tech.css, Tech.html, Tech.svelte, Tech.leaflet],
        year: "2023",
        tags: [Tag.personal, Tag.public],
        thumbnail: stationThumb,
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
    melodicChrono: {
        name: "The Melodic Chrono",
        tech: [Tech.android],
        year: "2022",
        tags: [Tag.personal, Tag.public],
        thumbnail: chronoThumb
    },
}