<script lang="ts">
    export let href = "/";
    export let icon = "";
    export let color = "white";
</script>

<a class="discreet" href={href}><i class={icon} style="color: {color};"></i></a>

<style>
    a {
        display: inline-block;
        transform: scale(1); /*makes the shadow work for some reason*/
        color: white;
        text-decoration: none;
        font-size: 1.5rem;
        transition: 0.1s;
        margin-right: 0.25em;
    }

    a i {
        position: relative;
        padding: 0.25em;
        border-radius: 50px;
        background-color: var(--main-black);
        transition: 0.1s;
    }

    a:hover i::after {
        --shadow-size: calc(100% + 4px);
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

    a:hover i {
        color: white !important;
    }
</style>