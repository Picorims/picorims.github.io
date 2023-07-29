<script lang="ts">
	import TechList, {Tech} from "./TechList.svelte";

    export let techList: Array<Tech> = [];
    export let href = "";
</script>

<section class="project-header">
    <h2>Details</h2>

    <p class="tech">
        <strong>Technologies: </strong>
        <TechList list={techList} withLabels></TechList>
    </p>

    <div class="pros-cons">
        <div class="pros">
            <p><strong>Strengths:</strong></p>
            <ul>
                <slot name="strengths"></slot>
            </ul>
        </div>
    
        <div class="cons">
            <p><strong>Weaknesses:</strong></p>
            <ul>
                <slot name="weaknesses"></slot>
            </ul>
        </div>
    </div>

    <p><strong>Explored:</strong></p>
    <ul>
        <slot name="explored"></slot>
    </ul>

    {#if href !== ""}
        <a class="button" href={href}>Visit website</a>
    {/if}
</section>

<style>
    section.project-header {
        width: 90%;
        margin: 50px auto;
        padding: 20px;
        background-color: var(--black-contrast);
        border-radius: var(--main-border-radius);
    }

    h2 {
        margin: 0;
        margin-bottom: 0.25em;
    }
    
    p {
        margin: 0.2em 0;
    }
    p.tech {
        display: inline-flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.5em;
    }
    p strong {
        font-size: 1.2em;
        text-decoration: underline var(--main-blue);
    }

    div.pros-cons {
        display: flex;
        flex-wrap: wrap;
        background-color: var(--main-black);
        border-radius: var(--main-border-radius);
        margin: 20px 0;
    }
    div.pros-cons > div {
        width: 50%;
        padding: 10px 20px;
    }
    div.pros {
        border-right: 1px solid var(--black-contrast);
    }

    @media screen and (max-width: 640px) {
        div.pros-cons > div {
            width: 100%;
        }
        div.pros {
            border-right: none;
        }
    }

    ul {
        margin-top: 0.2em;
    }
    div.pros ul {
        list-style-type: "✓ ";
    }
    div.cons ul {
        list-style-type: "⨯ ";
    }
    :global(li) {
        padding-left: 0.5em;
    }

    a.button {
        margin-top: 0.5em;
    }
</style>