<div class="container">
    <slot></slot>
</div>

<style>
    div.container {
        display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		/* align-items: stretch; */
		gap: 50px;
    }
</style>