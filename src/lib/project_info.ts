import { Tag } from "./TagList.svelte";
import { Tech } from "./TechList.svelte";

import w2bThumb from '$lib/assets/project_thumbnails/wav2bar_background.jpg';

export interface ProjectData {
    readonly name: string,
    readonly tech: Array<Tech>,
    readonly year: string,
    readonly tags: Array<Tag>,
    readonly thumbnail?: string
}

export const ProjectInfo: {[index: string]: ProjectData} = {
    wav2bar: {
        name: "Wav2Bar",
        tech: [Tech.js, Tech.css, Tech.html, Tech.electron, Tech.hexo, Tech.mocha, Tech.chai],
        year: "2019-2023",
        tags: [Tag.personal, Tag.heavy, Tag.public],
        thumbnail: w2bThumb
    },
    directogallery: {
        name: "Directogallery",
        tech: [Tech.js, Tech.css, Tech.html, Tech.electron, Tech.hexo, Tech.mocha, Tech.chai],
        year: "2023",
        tags: [Tag.personal],
    },
    tripDashboard: {
        name: "Trip planification dashboard",
        tech: [Tech.ts, Tech.css, Tech.scss, Tech.html, Tech.angular, Tech.php, Tech.mariadb],
        year: "2022-2023",
        tags: [Tag.team, Tag.university]
    },
    billiard: {
        name: "Billiard",
        tech: [Tech.cpp, Tech.opengl],
        year: "2023",
        tags: [Tag.team, Tag.university]
    },
    plant: {
        name: "Plant",
        tech: [Tech.js, Tech.css, Tech.html, Tech.electron, Tech.p5],
        year: "2019-2020",
        tags: [Tag.personal, Tag.heavy]
    },
    cursorophone: {
        name: "Cursorophone",
        tech: [Tech.js, Tech.css, Tech.html],
        year: "2021",
        tags: [Tag.personal]
    },
    spotifyAnalyzer: {
        name: "Spotify playlist analyzer",
        tech: [Tech.python],
        year: "2022-2023",
        tags: [Tag.personal]
    },
    melodicChrono: {
        name: "The Melodic Chrono",
        tech: [Tech.android],
        year: "2022",
        tags: [Tag.personal]
    },
}