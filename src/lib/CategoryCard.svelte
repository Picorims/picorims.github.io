<script module lang="ts">
    export enum Color {
        BLUE = "primary",
        PURPLE = "secondary",
        PINK = "tertiary",
    };
</script>

<script lang="ts">
	import { onMount } from "svelte";

	import ColorizeSVGFilter from "./ColorizeSVGFilter.svelte";

    interface Props {
        title?: string;
        color?: Color;
        href?: string;
        icon?: string;
    }

    let {
        title = "title",
        color = Color.BLUE,
        href = "/",
        icon = ""
    }: Props = $props();

    let colorHex = $state("#FFFFFF");
    let key = $derived(title?.toLowerCase());

    onMount(() => {
        const style = window.getComputedStyle(document.body);
        colorHex = style.getPropertyValue(`--color-${color}`);
    });
</script>

<a class="container discreet" href={href} style="color: var(--color-{color}); --color: var(--color-{color})">
    <span class="background" style={`filter: url(#pattern-filter-${key})`}></span>
    <i class={icon}></i>
    <h3>{title}</h3>
    <ColorizeSVGFilter {key} color={colorHex} />
</a>

<style>
    a.container {
        position: relative;
        --size: 250px;
        min-width: var(--size);
        width: var(--size);
        height: var(--size);
        border-radius: calc(var(--size) * 0.35);
        border: 12px solid var(--color-background);
        overflow: hidden;
        background-color: var(--color-background-lighter-1);

        text-align: center;
        text-decoration: none;
        font-size: 8rem;
        transition: 0.2s;
    }
    @supports (corner-shape: squircle) {
        a.container {
            corner-shape: squircle;
            border-radius: var(--size);
        }
    }
    a.container:hover {
        transform: scale(1.1);
        background-color: var(--color-background-lighter-1); /* Fallback for browsers that don't support oklch */
        background-color: oklch(from var(--color) 50% 0.2 h / 0.5);
    }

    span.background {
        display: block;
        position: absolute;
        width: 200%;
        height: 200%;
        top: -50%;
        left: -50%;
        transform: rotate(20deg);
        z-index: 1;
        background-image: url("$lib/assets/card_pattern.svg");
        background-size: 256px;
        
    }
    a.container:hover span.background {
        animation: 10s linear movePattern infinite; 
    }

    @media (prefers-reduced-motion: reduce) {
        a.container:hover span.background {
            animation: none;
        }
    }

    @keyframes movePattern {
        from {
            background-position: 0 0;
        }
        to {
            background-position: 256px 256px;
        }
    }

    h3 {
        position: relative;
        z-index: 2;
        margin: -8px;
        transition: 0.2s;
        color: var(--color-text); /* Fallback for browsers that don't support oklch */
        color: oklch(from var(--color) 90% 0.1 h);
        font-variant-caps: small-caps;
    }

    i {
        position: relative;
        z-index: 2;
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