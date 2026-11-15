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

    const aiTags = [Tag.ai_remnants_asserted, Tag.ai_remnants_possible, Tag.ai_remnants_possible_from_others];
</script>

<script lang="ts">
    interface Props {
        tagList?: Array<Tag>;
    }

    let { tagList = [] }: Props = $props();
</script>

<span>
    {#each tagList as tag}
        <span class="tag" class:ai-tag={aiTags.includes(tag) } class:ai-free={tag === Tag.ai_free}>{tag}</span>
    {/each}
</span>

<style>
    span.tag {
        display: inline-block;
        padding: 0.15em 0.5em;
        margin-right: 0.5em;
        margin-bottom: 0.5em;
        color: var(--color-text-darker-2);
        font-size: 0.9rem;
        font-weight: 300;
        background-color: var(--color-background);
        border: 2px solid var(--color-background-lighter-1);
        border-radius: var(--subtle-border-radius);
    }
    span.ai-tag {
        color: var(--color-tertiary);
    }
    span.ai-free {
        color: var(--color-primary);
    }
</style>
