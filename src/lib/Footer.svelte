<script lang="ts">
	import { onMount } from "svelte";
	import SocialIcon from "./SocialIcon.svelte";
	import Fishes from "./assets/fishes.svg.svelte";

    let reducedMotion = $state(true);

    onMount(() => {
        reducedMotion = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;
    })
</script>

<footer>
    <div class="background">
        <Fishes />
    </div>
    <div>
        <h2>Navigation</h2>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/development">Development</a></li>
                <li><a href="/music">Music</a></li>
                <li><a href="/minecraft">Minecraft</a></li>
            </ul>
        </nav>
    </div>
    <div>
        <h2>Contact</h2>
        <p><a id="email" href="mailto:picorims.contact@gmail.com">picorims.contact@gmail.com</a></p>
        <p>
            <SocialIcon href="https://discord.gg/EVGzfdP" icon="ri-discord-fill" color="#7289DA"></SocialIcon>
            <SocialIcon href="https://www.youtube.com/@picorims" icon="ri-youtube-fill" color="#FF0000"></SocialIcon>
            <SocialIcon href="https://github.com/Picorims" icon="ri-github-fill"></SocialIcon>
            <!-- <SocialIcon href="https://twitter.com/picorims" icon="ri-twitter-fill" color="#1DA1F2"></SocialIcon> -->
            <SocialIcon href="https://bsky.app/profile/picorims.bsky.social" icon="ri-bluesky-fill" color="#1DA1F2"></SocialIcon>
            <SocialIcon href="https://mastodon.social/@picorims" icon="ri-mastodon-fill" color="#6364FF"></SocialIcon>
        </p>
        <p>
            Copyright © 2022-2026 Picorims.<br/>
            Icons are courtesy of <a href="https://remixicon.com/">Remix Icon <i class="ri-remixicon-fill"></i></a>.
        </p>
        <p></p>
    </div>
</footer>

<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
    <filter id="water-filter">
        <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="1" seed="0" stitchTiles="stitch" result="noise"></feTurbulence>
        <feColorMatrix in="noise" type="hueRotate" values="60" result="noise-modulated">
            {#if !reducedMotion}
                <animate  attributeName="values" from="0" to="360" dur="3s" repeatCount="indefinite" />
            {/if}
        </feColorMatrix>
        <feDisplacementMap in="SourceGraphic" in2="noise-modulated" scale="24" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
    </filter>
</svg>
<style>
    footer {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        padding: 3rem 10%;
        margin-top: 50px;
        text-align: left;
        overflow: hidden;
        /* box-shadow: 0 0 16px var(--color-background); */
    }

    div.background {
        position: absolute;
        content: "";
        top: 5%;
        left: -10%;
        width: 120%;
        height: 120%;
        z-index: -1;
        overflow: hidden;
        filter: url(#water-filter);

        --ray-1-color: #61fff2;
        --ray-2-color: #00e5ff;
        --ray-3-color: #26ffbe;
        --ray-4-color: #0affeb;
        --surface-top-color: rgb(31, 143, 241);
        --very-top-color: rgb(16, 118, 207);
        --top-color: rgb(3, 88, 163);
        --middle-color: rgb(3, 67, 124);
        --bottom-color: rgb(0, 49, 92);

        border-top: 2px solid var(--color-secondary);

        background: linear-gradient(
            55deg,
            transparent,
            transparent 5.25%,
            rgb(from var(--ray-1-color) r g b / 0.22) 6%,
            rgb(from var(--ray-1-color) r g b / 0.12) 10%,
            rgb(from var(--ray-1-color) r g b / 0.16) 14%,
            rgb(from var(--ray-1-color) r g b / 0.14) 18%,
            rgb(from var(--ray-1-color) r g b / 0.23) 26%,
            transparent 26.75%,
            transparent 43.5%,
            rgb(from var(--ray-2-color) r g b / 0.2) 44%,
            rgb(from var(--ray-2-color) r g b / 0.15) 45%,
            rgb(from var(--ray-2-color) r g b / 0.17) 46.5%,
            rgb(from var(--ray-2-color) r g b / 0.2) 48%,
            transparent 48.5%,
            transparent 64%,
            rgb(from var(--ray-3-color) r g b / 0.07) 64.5%,
            rgb(from var(--ray-3-color) r g b / 0.05) 65.5%,
            rgb(from var(--ray-3-color) r g b / 0.08) 66.5%,
            transparent 67%,
            transparent 72.5%,
            rgb(from var(--ray-4-color) r g b / 0.15) 73%,
            rgb(from var(--ray-4-color) r g b / 0.05) 79%,
            rgb(from var(--ray-4-color) r g b / 0.08) 86%,
            rgb(from var(--ray-4-color) r g b / 0.15) 89%,
            transparent 89.5%,
            transparent 100%
        ), linear-gradient(
            to bottom,
            var(--surface-top-color) 0%,
            var(--very-top-color) 2%,
            var(--top-color) 20%,
            var(--middle-color) 50%,
            var(--bottom-color) 100%
        );

        & > :global(svg) {
            position: absolute;
            top: 25%;
            animation: 60s linear moveFishes infinite;
            fill: rgb(17, 17, 34);
        }

    }

    @keyframes moveFishes {
        from {
            transform: translateX(-512px);
        }
        to {
            transform: translateX(calc(150vW + 512px));
        }
    }

    @media (prefers-reduced-motion: reduce) {
        div.background > :global(svg) {
            animation: none;
        }
    }

    feTurbulence {
        animation: 1s ease-in-out animMovement infinite;
    }

    h2 {
        font-size: 1.25rem;
        text-align: left;
    }

    footer > div {
        flex: 1 1 auto;
    }

    @media screen and (max-width: 640px) {
        footer > div {
            min-width: 100%;
        }
    }

    ul {
        padding: 0;
    }

    li {
        list-style-type: none;
        margin-bottom: 0.5em;
    }
</style>