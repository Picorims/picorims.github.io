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
        <a id="email" href="mailto:picorims.contact@gmail.com">picorims.contact@gmail.com</a>
        <p>Copyright (c) 2022-2023 Picorims</p>
    </div>
</footer>    

<style>
    footer {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        background-color: var(--black-contrast);
        text-align: left;
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
    }
</style>