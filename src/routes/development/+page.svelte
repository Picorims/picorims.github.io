<script lang="ts">
	import Project from "$lib/Project.svelte";
</script>

<h1>Development</h1>

<section id="projects-section">
    <h2>Projects</h2>
    <div id="projects">
        <Project title="Wav2Bar" href="https://picorims.github.io/wav2bar-website/" shadowColor="#06a4fa" background="./assets/wav2bar_background.png">
            A free, open source audio visualizer creator. Add visualizers, timers,
            particle flows, images, backgrounds, text, etc; and export your work
            as a production ready video.
        </Project>
        <Project title="Plant" href="https://github.com/Picorims/plant-game" shadowColor="#26df4e" background="./assets/plant_background.png">
            A two players strategy game about growing plants
            in a small grid. Grow in a smart way
            to block your opponent from growing further.
            Maximize your score by taking advantage of various bonuses.
        </Project>
        <Project title="Cursorophone" href="https://picorims.github.io/cursorophone" shadowColor="#625a8f" background="./assets/cursorophone_background.png">
            Play music with your mouse on a keyboard like layout.
            Keep your mouse click down (or spacebar),
            and slide it to play. Customize the sound to your needs.        
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