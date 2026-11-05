<script module lang="ts">
    export enum Tag {
        team = "Team",
        university = "University",
        personal = "Personal",
        heavy = "Heavy",
        public = "Public",
        ai_remnants_asserted = "Asserted AI Remnants",
        ai_remnants_possible = "Possible AI Remnants",
        ai_remnants_possible_from_others = "Possible AI remnants from others",
        ai_free = "No AI used",
    }
</script>

<script lang="ts">
    interface Props {
        tagList?: Array<Tag>;
    }

    let { tagList = [] }: Props = $props();
</script>

<span>
    {#each tagList as tag}
        <span class="tag">{tag}</span>
    {/each}
</span>

<style>
    span.tag {
        display: inline-block;
        padding: 0.1em 0.2em;
        margin-right: 0.25em;
        margin-bottom: 0.25em;
        color: var(--main-blue);
        font-weight: bold;
        background-color: var(--main-black-transparent);
        border: 1px solid var(--main-blue);
        border-radius: var(--subtle-border-radius);
    }
</style>
