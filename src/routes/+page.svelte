<script lang="ts">
	import CategoryCard, { Color } from "$lib/CategoryCard.svelte";
    import profileIcon from "$lib/assets/profile_icon.png";
</script>

<section id="banner">
    <div>
        <h1 id="title">Picorims</h1>
        <a id="email" href="mailto:picorims.contact@gmail.com">picorims.contact@gmail.com</a>
    </div>
    <div class="banner-right">
        <div id="profile-icon">
            <img width="197" height="197" src={profileIcon} alt="picorims icon" />
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

<section>
    <h2>See what I am up to</h2>
    <div class="categories">
        <CategoryCard color={Color.BLUE} title="Development" icon="ri-code-s-slash-line" href="/development"></CategoryCard>
        <CategoryCard color={Color.PURPLE} title="Music" icon="ri-disc-fill" href="/music"></CategoryCard>
        <CategoryCard color={Color.PINK} title="Minecraft" icon="ri-box-3-fill" href="/minecraft"></CategoryCard>
    </div>
</section>

<style>
    #banner {
        width: 100%;
        padding: 50px 5%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        text-align: center;
        color: white;
    }
    #banner > div {
        flex: 1 1 auto;
        max-width: 100%;
    }

    #title {
        font-size: 3rem;
        margin-top: 0;
        margin-bottom: 0.25em;
        text-transform: uppercase;
        transition: 0.2s;
    }

    #email {
        font-size: 1.5rem;
    }

    @media (max-width: 640px) {
        #title {
            font-size: 2rem;
        }
        #email {
            font-size: 1.25rem;
        }
    }
    @media (max-width: 340px) {
        #email {
            font-size: 1rem;
        }
    }







    div.banner-right {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 50px 5%;
        animation: floatT 12s ease-in-out 0s infinite, floatL 7.7s ease-in-out 0s infinite;
    }
    #profile-icon {
        position: relative;
        --logo-size: 197px;
        width: var(--logo-size);
        height: var(--logo-size);
        transition: 0.1s;
    }
    @media screen and (max-width: 420px) {
        #profile-icon {
            --logo-size: 150px;
        }
    }
    #profile-icon > img {
        position: relative;
        width: 100%;
        min-width: var(--logo-size);
        height: 100%;
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



    div.categories {
        display: flex;
        justify-content: center;
        gap: 50px;
        flex-wrap: wrap;
        padding: 0 10%;
    }
</style>