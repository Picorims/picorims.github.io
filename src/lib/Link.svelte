<script lang="ts">
    interface Props {
        href?: string;
        text?: any;
    }

    let { href = "", text = href }: Props = $props();

</script>

<a {href} rel="noopener noreferrer" target="_blank">{text}</a>