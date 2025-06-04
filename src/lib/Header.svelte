<script lang="ts">
	let menuVisible = false;
    import profileIcon from "$lib/assets/profile_icon.png";
</script>

<header>
	<a id="logo" href="/" class="discreet">
		<img width="197" height="197" src={profileIcon} alt="picorims icon" />
	</a>
	<nav class="nav-pc">
		<a class="discreet" href="/">Home</a>
		<a class="discreet" href="/development">Development</a>
		<a class="discreet" href="/music">Music</a>
		<a class="discreet" href="/minecraft">Minecraft</a>
	</nav>
	<nav class="nav-mobile">
		<button
			on:click={() => {
				menuVisible = !menuVisible;
			}}
		>
			{#if menuVisible}
				<i class="ri-close-line" />
			{:else}
				<i class="ri-menu-line" />
			{/if}
		</button>
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<div
			class="nav-content"
			style="display: {menuVisible ? 'flex' : 'none'}"
			on:click={() => (menuVisible = false)}
			on:keydown={(e) => {if (e.key === "Enter") menuVisible = false}}
            role="navigation"
		>
			<a class="discreet" href="/">Home</a>
			<a class="discreet" href="/development">Development</a>
			<a class="discreet" href="/music">Music</a>
			<a class="discreet" href="/minecraft">Minecraft</a>
		</div>
	</nav>
</header>

<style>
	header {
		position: fixed;
		z-index: 500;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		min-height: var(--header-height);
		background-color: var(--black-contrast-transparent);
		backdrop-filter: blur(10px);

		border-bottom: 3px solid;
		border-image-slice: 1;
		border-color: var(--main-blue);
		border-image-source: var(--linear-gradient);
	}

	#logo {
		position: relative;
		margin-left: 20px;
		--logo-size: 40px;
		width: var(--logo-size);
		height: var(--logo-size);
	}
	#logo > img {
		width: var(--logo-size);
		height: var(--logo-size);
		border-radius: var(--logo-size);
	}
	#logo::after {
		--shadow-size: calc(var(--logo-size) + 4px);
		position: absolute;
		top: -2px;
		left: -2px;
		content: '';
		z-index: -1;
		width: var(--shadow-size);
		height: var(--shadow-size);
		border-radius: var(--shadow-size);
		background: var(--main-blue);
		background: var(--linear-gradient);
		filter: blur(2px);
		transition: 0.1s;
	}
	#logo:hover::after {
		filter: blur(4px);
	}

	nav.nav-pc {
		margin-right: 20px;
		/*It works while there is no mobile menu*/
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	nav.nav-mobile {
		display: none;
	}

	nav a {
		display: inline-block;
		position: relative;
		text-decoration: none;
		color: white;
		font-size: 1.2rem;
	}
	nav.nav-pc a {
		height: 100%;
		padding: 0 0.5em;
	}
	nav a::after {
		position: absolute;
		display: block;
		bottom: 0;
		left: 50%;
		width: 0;
		content: '';
		height: 2px;
		background-color: var(--main-blue);
		box-shadow: 0 0 4px var(--main-blue);
		transition: 0.1s;
	}
	nav.nav-mobile a::after {
		background-color: var(--main-purple);
		height: 100%;
		z-index: -1;
		transition: 0.2s;
	}
	nav a:hover::after {
		width: 70%;
		left: 15%;
	}
	nav.nav-mobile a:hover::after {
		width: 100%;
		left: 0;
	}
	nav.nav-mobile a {
		padding: 0.5em 1em;
	}

	nav.nav-mobile .nav-content {
		position: fixed;
		right: 0;
		top: var(--header-height);
		max-height: calc(100vh - var(--header-height));
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		background-color: var(--black-contrast);
	}

	nav.nav-mobile button {
		position: fixed;
		right: 0;
		top: 0;
		width: var(--header-height);
		height: var(--header-height);
		font-size: 40px;
		border: none;
		background-color: transparent;
		color: white;
		cursor: pointer;
	}
    nav.nav-mobile button:hover {
        text-shadow: 0 0 4px white;
    }

	@media screen and (max-width: 640px) {
		nav.nav-pc {
			display: none;
		}
		nav.nav-mobile {
			display: initial;
		}
	}
</style>
