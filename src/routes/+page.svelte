<section id="banner">
    <div>
        <h1 id="title">Picorims</h1>
        <a id="email" href="mailto:picorims.contact@gmail.com">picorims.contact@gmail.com</a>
    </div>
    <div class="banner-right">
        <div id="profile-icon">
            <img width="197" height="197" src="/assets/profile_icon.png" alt="picorims icon" />
        </div>
    </div>
</section>

<section id="presentation">
    <p>
        Hi, my name is Picorims, and I am a French computer science student
        in apprenticeship at Polytech Paris-Saclay.
        I also enjoy playing and making music!
    </p>
</section>

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
    #banner {
        width: 100%;
        padding: 50px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        text-align: center;
        color: white;
    }
    #banner > div {
        flex: 1 1 auto;
    }

    div.banner-right {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 50px;
        animation: floatT 12s ease-in-out 0s infinite, floatL 7.7s ease-in-out 0s infinite;
    }
    #profile-icon {
        position: relative;
        margin-left: 20px;
        --logo-size: 197px;
        width: var(--logo-size);
        height: var(--logo-size);
    }
    #profile-icon > img {
        position: relative;
        width: var(--logo-size);
        height: var(--logo-size);
        /* border-radius: var(--logo-size); */
        animation: profileBubble 30s ease-in-out 0s infinite;
    }
    #profile-icon::after {
        --shadow-size: calc(var(--logo-size) + 8px);
        position: absolute;
        top: -4px;
        left: -4px;
        content: "";
        z-index: -1;
        width: var(--shadow-size);
        height: var(--shadow-size);
        /* border-radius: var(--shadow-size); */
        background: var(--main-blue);
        background: var(--linear-gradient);
        filter: blur(4px);
        transition: 0.1s;
        animation: profileBubble 30s ease-in-out 0s infinite;
    }
    @keyframes profileBubble {
        0%, 100% {border-radius: 46% 54% 44% 56% / 51% 48% 52% 49%;}
        25% {border-radius: 52% 48% 43% 57% / 46% 64% 36% 54%;}
        50% {border-radius: 64% 36% 67% 33% / 44% 52% 48% 56%;}
        75% {border-radius: 51% 49% 44% 56% / 63% 48% 52% 37%;}
    }
    @keyframes floatT {
        0%, 100% {top: -7px;}
        50% {top: 7px;}
    }
    @keyframes floatL {
        0%, 100% {left: -7px;}
        50% {left: 7px;}
    }

    #title {
        font-size: 3rem;
        margin-top: 0;
        margin-bottom: 0.25em;
        text-transform: uppercase;
        text-shadow: 1px 1px 5px white;
    }

    #email {
        font-size: 1.5rem;
    }



    #presentation {
        padding: 3rem 10%;
        font-size: 1.5rem;
        font-style: italic;
        background-color: var(--black-contrast);
        line-height: 1.5em;
        box-shadow: 0 0 8px var(--black-shadow);
    }
    #presentation > p {
        position: relative;
    }
    #presentation > p::before, #presentation > p::after {
        position: absolute;
        display: inline-block;
        font-size: 2em;
    }
    #presentation > p::before {
        content: "“";
        left: -0.5em;
        color: var(--main-blue);
    }
    #presentation > p::after {
        content: "”";
        color: var(--main-pink);
    }
</style>