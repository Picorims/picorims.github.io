<script lang="ts">
	import SocialIcon from "./SocialIcon.svelte";
</script>

<footer>
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

<style>
    footer {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        padding: 1rem 10%;
        margin-top: 50px;
        background-color: var(--main-black);
        text-align: left;
        box-shadow: 0 0 16px var(--main-black);
    }

    h2 {
        font-size: 1.1rem;
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