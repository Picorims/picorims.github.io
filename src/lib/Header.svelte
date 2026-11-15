<script lang="ts">
	let menuVisible = $state(false);
    import profileIcon from "$lib/assets/profile_icon.png";
</script>

<header>
	<div class="header-l">
		<a id="logo" href="/" class="discreet">
			<img width="197" height="197" src={profileIcon} alt="picorims icon" />
		</a>
		<a href="https://framaforms.org/would-you-donate-1771697595" target="_blank" rel="noopener noreferrer" class="discreet donate">Donate</a>
	</div>
	<nav class="nav-pc">
		<a class="discreet" href="/">Home</a>
		<a class="discreet" href="/development">Development</a>
		<a class="discreet" href="/music">Music</a>
		<a class="discreet" href="/minecraft">Minecraft</a>
	</nav>
	<nav class="nav-mobile">
		<button
			onclick={() => {
				menuVisible = !menuVisible;
			}}
		>
			{#if menuVisible}
				<i class="ri-close-line"></i>
			{:else}
				<i class="ri-menu-line"></i>
			{/if}
		</button>
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<div
			class="nav-content"
			style="display: {menuVisible ? 'flex' : 'none'}"
			onclick={() => (menuVisible = false)}
			onkeydown={(e) => {if (e.key === "Enter") menuVisible = false}}
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
		background-color: var(--color-background);
		box-shadow: 0 0 48px 48px var(--color-background);
	}

	div.header-l {
		display: flex;
		align-items: center;
		gap: 20px;
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
		background: var(--color-primary);
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
		text-shadow: 0 0 10px black;
		font-variant-caps: small-caps;
		font-weight: 300;
		letter-spacing: 0.075em;
	}
	nav.nav-pc a {
		height: 100%;
		padding: 0 0.75em;
	}
	nav a::after {
		position: absolute;
		display: block;
		bottom: -50%;
		left: 50%;
		width: 0;
		content: '';
		height: 10px;
		background-color: var(--color-primary);
		box-shadow: 0 0 4px var(--color-primary);
		transition: 0.1s;
		/* https://css-generators.com/wavy-shapes/ */
		mask: 
			radial-gradient(8.32px at 50% calc(100% + 4.2px),#0000 calc(99% - 2px),#000 calc(101% - 2px) 99%,#0000 101%) calc(50% - 12px) calc(50% - 4px + .5px)/24px 8px repeat-x,
			radial-gradient(8.32px at 50% -4.2px,#0000 calc(99% - 2px),#000 calc(101% - 2px) 99%,#0000 101%) 50% calc(50% + 4px)/24px 8px repeat-x;
		border-radius: 8px;
	}
	nav.nav-mobile a::after {
		background-color: var(--color-primary);
		left: initial;
		right: 0;
		height: 100%;
		z-index: -1;
		transition: 0.2s;
	}
	nav:not(.nav-mobile) a:hover::after {
		width: 70%;
		left: 15%;
	}
	nav.nav-mobile a:hover::after {
		width: 95%;
		right: 0;
	}
	nav a:hover {
		color: white; /*intentional*/
	}
	nav.nav-mobile a {
		padding: 0.5em 1em;
	}

	nav.nav-mobile .nav-content {
		position: fixed;
		right: 0;
		top: var(--header-height);
		max-height: calc(100vh - var(--header-height));
		padding: 0.5rem;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		background-color: var(--color-background);
		box-shadow: 0 0 32px 32px var(--color-background);
		border-bottom-left-radius: var(--large-border-radius);
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

	a.donate {
		margin-right: 20px;
		padding: 0.5em 1em;
		border: 2px solid var(--color-donate);
		border-radius: var(--subtle-border-radius);
		color: var(--color-donate);
		font-weight: 900;
		text-decoration: none;
		box-shadow: 0 0 2px var(--color-donate);
		background-color: rgb(from var(--color-donate) r g b / 0.2);
		
		transition: 0.1s;
	}
	a.donate:hover {
		background-color: var(--color-donate);
		color: black; /* intentional */
		box-shadow: 0 0 16px var(--color-donate);
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
