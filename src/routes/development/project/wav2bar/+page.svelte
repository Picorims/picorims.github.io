<script lang="ts">
	import ProjectHeader from "$lib/ProjectHeader.svelte";
	import ProjectDetails from "$lib/ProjectDetails.svelte";

	import { TechLists } from "$lib/techlists";
    import w2bThumb from '$lib/assets/project_thumbnails/wav2bar_background.jpg';
</script>

<ProjectHeader title="Wav2Bar" background={w2bThumb}></ProjectHeader>

<ProjectDetails techList={TechLists.wav2bar} href="https://picorims.github.io/wav2bar-website/">
    <span slot="strengths">
        <li>published</li>
        <li>positive feedback from users and small activity</li>
        <li>automated builds</li>
    </span>
    <span slot="weaknesses">
        <li>architecture and tech debt</li>
        <li>performance</li>
        <li>lack of unit tests</li>
    </span>
    <span slot="explored">
        <li>native web app</li>
        <li>canvas and audio processing</li>
        <li>custom components in pure HTML5 (standard API)</li>
        <li>states</li>
        <li>user interface</li>
        <li>CI / CD</li>
    </span>
</ProjectDetails>

<section>
    <p>
        Duis duis id elit ea. Pariatur do aliquip voluptate ea voluptate. Ea et officia sunt incididunt quis enim proident deserunt culpa excepteur deserunt tempor consequat et. Ullamco dolor quis esse occaecat Lorem minim elit exercitation Lorem qui enim excepteur commodo. Exercitation in occaecat amet officia sit fugiat sunt enim dolor voluptate fugiat labore non aute.
    </p>
</section>