<script context="module" lang="ts">
    export enum Color {
        BLUE = "blue",
        PURPLE = "purple",
        PINK = "pink",
    };
</script>

<script lang="ts">
    export let title = "title";
    export let color: Color = Color.BLUE;
    export let href = "/";
    export let icon = "";
</script>

<a class="container discreet" href={href} style="color: var(--main-{color}); --color: var(--main-{color})">
    <i class={icon}></i>
    <h3>{title}</h3>
</a>

<style>
    a.container {
        --size: 250px;
        min-width: var(--size);
        width: var(--size);
        height: var(--size);
        border-radius: var(--size);
        box-shadow: 0 0 16px var(--color);
        border: 2px solid var(--color);

        text-align: center;
        text-decoration: none;
        font-size: 8rem;
        transition: 0.2s;
    }
    a.container:hover {
        transform: scale(1.1);
        background-color: var(--black-contrast); /* Fallback for browsers that don't support oklch */
        background-color: oklch(from var(--color) 10% 0.2 h);
        box-shadow: 0 0 32px var(--color);
    }

    h3 {
        margin: 0;
        transition: 0.2s;
    }

    @media screen and (max-width: 460px) {
        a.container {
            --size: 200px;
            font-size: 6rem;
        }
        h3 {
            font-size: 1.25rem;
        }
    }
</style>