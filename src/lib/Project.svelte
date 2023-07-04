<script lang="ts">
    export let title = "title";
    export let href = "/";
    export let shadowColor = "var(--blue-shadow)";
    export let background = "";
</script>

<div class="project-container" style="box-shadow: 0 5px 10px {shadowColor}">
    <img class="bgnd-img" src={background} alt="{title} thumbnail">
    <div class="card-container">
        <h3><a href={href}>{title}</a></h3>
        <p>
            <slot></slot>
        </p>
        <a class="button" href={href}>Explore</a>
    </div>
</div>

<style>
    div.project-container {
        position: relative;
        display: block;
        flex: 1 0 auto;
        width: 300px;
        min-height: 300px;
        border-radius: var(--main-border-radius);
        overflow: hidden;
        background-color: var(--black-contrast);
    }
    div.card-container {
        padding: 20px;
    }
    div.card-container h3 {
        font-size: 1.8rem;
        margin: 0;
    }
    div.card-container p {
        margin: 0.5em 0;
        font-size: 1.1rem;
    }
    div.project-container .bgnd-img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    a.button {
        display: inline-block;
        padding: 0.5rem;
        background-color: var(--main-purple);
        cursor: pointer;
        border-radius: 5px;
        font-weight: bold;
    }
</style>