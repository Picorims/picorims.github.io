<header>
    <a id="logo" href="/" class="discreet">
        <img width="197" height="197" src="/assets/profile_icon.png" alt="picorims icon" />
    </a>
    <nav>
        <a class="discreet" href="/">Home</a>
        <a class="discreet" href="/development">Development</a>
        <a class="discreet" href="/music">Music</a>
        <a class="discreet" href="/minecraft">Minecraft</a>
    </nav>
</header>

<style>
    header {
        position: fixed;
        z-index: 500;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: var(--header-height);
        background-color: var(--black-contrast);

        border-bottom: 3px solid;
        border-image-slice: 1;
        border-color: var(--main-blue);
        border-image-source: var(--linear-gradient);
    }

    #logo {
        position: relative;
        margin-left: 20px;
        --logo-size: 40px;
        width: var(--logo-size);
        height: var(--logo-size);
    }
    #logo > img {
        width: var(--logo-size);
        height: var(--logo-size);
        border-radius: var(--logo-size);
    }
    #logo::after {
        --shadow-size: calc(var(--logo-size) + 4px);
        position: absolute;
        top: -2px;
        left: -2px;
        content: "";
        z-index: -1;
        width: var(--shadow-size);
        height: var(--shadow-size);
        border-radius: var(--shadow-size);
        background: var(--main-blue);
        background: var(--linear-gradient);
        filter: blur(2px);
        transition: 0.1s;
    }
    #logo:hover::after {
        filter: blur(4px);
    }

    nav {
        margin-right: 20px;
        /*It works while there is no mobile menu*/
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    nav > a {
        display: inline-block;
        position: relative;
        height: 100%;
        padding: 0 0.5em;
        font-size: 1.2rem;
        text-decoration: none;
        color: white;
    }
    nav > a::after {
        position: absolute;
        display: block;
        bottom: 0;
        left: 50%;
        width: 0;
        content: "";
        height: 2px;
        background-color: var(--main-blue);
        transition: 0.1s;
    }
    nav > a:hover::after {
        width: 70%;
        left: 15%;
    }
</style>