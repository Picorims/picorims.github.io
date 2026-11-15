<script lang="ts">
    
    interface Props {
        /**
         * 6 digits hex color with hash ("#").
         */
        color: string;
        key: string;
    }

    let {color, key}: Props = $props();

    let rgbRatioColor: [number, number, number] = $derived((() => {
        const rStr = color.slice(1, 3);
        const gStr = color.slice(3, 5);
        const bStr = color.slice(5, 7);
        let r = parseInt(rStr, 16);
        let g = parseInt(gStr, 16);
        let b = parseInt(bStr, 16);

        return [r / 256, g / 256, b / 256];
    })());

</script>

<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
    <filter id={`pattern-filter-${key}`}>
        <feColorMatrix in="SourceGraphic" type="matrix" values={`${rgbRatioColor[0]} 0 0 0 0
                                                                    0 ${rgbRatioColor[1]} 0 0 0
                                                                    0 0 ${rgbRatioColor[2]} 0 0
                                                                    0 0 0 0 0.15`}></feColorMatrix>
    </filter>
</svg>
