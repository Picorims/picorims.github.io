<section id="projects-section">
    <h2>Projects</h2>
    <div id="projects">
        <div id="project_wav2bar" class="project_container">
            <h3><a href="https://picorims.github.io/wav2bar-website/">Wav2Bar</a></h3>
            <p>
                A free, open source audio visualizer creator. Add visualizers, timers,
                particle flows, images, backgrounds, text, etc; and export your work
                as a production ready video.
            </p>
            <a class="button" href="https://picorims.github.io/wav2bar-website/">Explore</a>
            <div class="bgnd_img"></div>
        </div>
        <div id="project_plant" class="project_container">
            <h3><a href="https://github.com/Picorims/plant-game">Plant</a></h3>
            <p>
                (In development, release coming soon.) A two players strategy game
                about growing plants in a small grid. Grow in a smart way
                to block your opponent from growing further.
                Maximize your score by taking advantage of various bonuses.
            </p>
            <a class="button" href="https://github.com/Picorims/plant-game">Explore</a>
            <div class="bgnd_img"></div>
        </div>
        <div id="project_cursorophone" class="project_container">
            <h3><a href="https://picorims.github.io/cursorophone">Cursorophone</a></h3>
            <p>
                Play music with your mouse on a keyboard like layout.
                Keep your mouse click down (or spacebar),
                and slide it to play. Customize the sound to your needs.
            </p>
            <a class="button" href="https://picorims.github.io/cursorophone">Explore</a>
            <div class="bgnd_img"></div>
        </div>
    </div>
</section>

<style>
    #projects {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .project_container {
        position: relative;
        display: block;
        flex: 1 0 auto;
        width: 46%;
        min-height: 400px;
        padding: 4%;
        overflow: hidden;
        box-shadow: 0 5px 10px var(--blue-shadow);
    }
    .project_container h3 {
        font-size: 1.8rem;
    }
    .project_container h3 a {
        padding: 0.3rem;
    }
    .project_container p {
        font-size: 1.2rem;
        font-style: italic;
        text-shadow: 0 0 2px black;
    }
    .project_container .bgnd_img {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0.5;
        transition: 1s;
    }

    @media (max-width: 1000px) {
        .project_container {
            width: 100%;
        }
    }

    .button {
        display: inline-block;
        padding: 0.5rem;
        margin: 10px 0;
        background-color: var(--main-purple);
        cursor: pointer;
        border-radius: 5px;
        font-weight: bold;
    }

    #project_wav2bar {
        box-shadow: inset 0 0px 10px #06a4fa;
    }
    #project_wav2bar .bgnd_img {
        background-image: url("./assets/wav2bar_background.png");
    }
    #project_plant {
        box-shadow: inset 0 0px 10px #26df4e;
    }
    #project_plant .bgnd_img {
        background-image: url("./assets/plant_background.png");
    }
    #project_cursorophone {
        box-shadow: inset 0 0px 10px #625a8f;
    }
    #project_cursorophone .bgnd_img {
        background-image: url("./assets/cursorophone_background.png");
    }

    .project_container:hover .bgnd_img {
        opacity: 0.75;
        transition: 0.3s;
    }
</style>